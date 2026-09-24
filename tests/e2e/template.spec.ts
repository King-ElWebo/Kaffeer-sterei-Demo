import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

import { siteRoutes } from './routes';

for (const route of siteRoutes) {
  test(`${route.name} route has no critical browser, overflow, or accessibility failures`, async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => pageErrors.push(error.message));

    const response = await page.goto(route.path, { waitUntil: 'networkidle' });

    expect(response?.ok()).toBe(true);
    await expect(page.locator('main')).toBeVisible();

    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);

    const accessibility = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    const seriousViolations = accessibility.violations.filter((violation) =>
      ['serious', 'critical'].includes(violation.impact ?? ''),
    );

    expect(seriousViolations).toEqual([]);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}

test('the configured showcase displays brand identity and navigation', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('link', { name: 'RÖSTWERK 1070', exact: false }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Präzise Röstung',
  );
  await expect(
    page.getByRole('link', { name: 'Bohnen entdecken' }),
  ).toHaveAttribute('href', '/kaffee');
});

test('geschmacksfinder interaction deterministically recommends a coffee', async ({
  page,
}) => {
  await page.goto('/geschmack');

  // Verify initial state
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Geschmacksfinder',
  );

  // Step 1: Default is Filter, advance to step 2
  const nextStep1 = page.getByRole('button', { name: 'Weiter zu Frage 2' });
  await nextStep1.click();

  // Step 2: Select Fruchtig & Floral, advance to step 3
  await page.getByRole('radio', { name: /Fruchtig/i }).click();
  const nextStep2 = page.getByRole('button', { name: 'Weiter zu Frage 3' });
  await nextStep2.click();

  // Step 3: Select Hell & Spritzig
  await page.getByRole('radio', { name: /Hell & Spritzig/i }).click();
  const calculateBtn = page.getByRole('button', {
    name: 'Empfehlung berechnen',
  });
  await calculateBtn.click();

  // Result should recommend Flora Neubau
  await expect(
    page.getByRole('heading', { level: 2, name: /Flora Neubau/i }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: /Flora Neubau im Detail ansehen/i }),
  ).toHaveAttribute('href', '/kaffee/flora-neubau');
});

test('brew calculator recalculates coffee amount and switches methods', async ({
  page,
}) => {
  await page.goto('/bruehen');

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Das perfekte Brühverhältnis',
  );

  // Switch to French Press tab
  const frenchPressTab = page.getByRole('tab', { name: /French Press/i });
  await frenchPressTab.click();
  await expect(frenchPressTab).toHaveAttribute('aria-selected', 'true');

  // Switch to 500 ml preset
  const preset500 = page.getByRole('button', { name: '2 Tassen (500 ml)' });
  await preset500.click();

  // Check calculated coffee amount: 500 / 15 = 33.3 g (in main metrics card)
  await expect(
    page.locator('main').getByText('33.3 g', { exact: true }),
  ).toBeVisible();
});

test('coffee catalog filter switches active category', async ({ page }) => {
  await page.goto('/kaffee');

  // Select Espresso filter
  const espressoFilter = page.getByRole('button', {
    name: /Espresso & Siebträger/i,
  });
  await espressoFilter.click();
  await expect(espressoFilter).toHaveAttribute('aria-pressed', 'true');

  // Wiener Samt card should be visible, Flora Neubau card should not be visible
  await expect(
    page.locator('main').getByRole('heading', { name: 'Wiener Samt' }),
  ).toBeVisible();
  await expect(
    page.locator('main').getByRole('heading', { name: 'Flora Neubau' }),
  ).not.toBeVisible();
});

const reviewViewports = [
  { name: 'small-mobile', width: 320, height: 568 },
  { name: 'modern-mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1440, height: 1000 },
  { name: 'large-desktop', width: 1920, height: 1080 },
] as const;

test('@visual capture the five default review viewports', async ({ page }) => {
  test.setTimeout(180_000);
  const screenshotRoot = path.resolve('artifacts/qa/screenshots');
  await mkdir(screenshotRoot, { recursive: true });

  for (const viewport of reviewViewports) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    for (const route of siteRoutes) {
      await page.goto(route.path, { waitUntil: 'domcontentloaded' });
      await page.screenshot({
        path: path.join(screenshotRoot, `${route.name}-${viewport.name}.png`),
        fullPage: true,
      });
    }
  }
});
