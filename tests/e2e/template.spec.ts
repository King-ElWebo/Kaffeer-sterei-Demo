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

test('mobile drawer opens with focus trap, backdrop isolation, escape return, and closes on desktop resize', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menuToggle = page.locator('button[aria-controls="mobile-menu"]');
  await expect(menuToggle).toBeVisible();
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

  // Open mobile menu
  await menuToggle.click();
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

  const drawer = page.locator('#mobile-menu');
  await expect(drawer).toBeVisible();
  await expect(drawer).toHaveAttribute('role', 'dialog');
  await expect(drawer).toHaveAttribute('aria-modal', 'true');

  // Verify non-modal elements are marked inert
  await expect(page.locator('#main-content')).toHaveAttribute('inert', '');
  await expect(page.locator('footer')).toHaveAttribute('inert', '');

  // Verify body scroll lock
  const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
  expect(bodyOverflow).toBe('hidden');

  // Verify close button is present inside drawer
  const closeBtn = drawer.getByRole('button', { name: 'Menü schließen' });
  await expect(closeBtn).toBeVisible();

  // Test Escape key closes drawer and returns focus to menuToggle
  await page.keyboard.press('Escape');
  await expect(drawer).not.toBeVisible();
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menuToggle).toBeFocused();

  // Verify inert and scroll lock removed
  await expect(page.locator('#main-content')).not.toHaveAttribute('inert', '');
  const resetOverflow = await page.evaluate(() => document.body.style.overflow);
  expect(resetOverflow).toBe('');

  // Re-open menu, then test resizing across desktop breakpoint (>= 768px)
  await menuToggle.click();
  await expect(drawer).toBeVisible();
  await page.setViewportSize({ width: 800, height: 900 });
  await expect(drawer).not.toBeVisible();
  await expect(page.locator('#main-content')).not.toHaveAttribute('inert', '');
});

test('brew calculator supports keyboard tabs, dynamic capacity-matching presets, and Brühwasser labels', async ({
  page,
}) => {
  await page.goto('/bruehen');

  const v60Tab = page.getByRole('tab', { name: /V60/i });
  await expect(v60Tab).toBeVisible();
  await expect(v60Tab).toHaveAttribute('aria-selected', 'true');

  // Check V60 preset label: must be "Kanne (600 ml)", strictly matching V60 max capacity (not 750 ml!)
  const v60PotPreset = page.getByRole('button', { name: 'Kanne (600 ml)' });
  await expect(v60PotPreset).toBeVisible();
  await v60PotPreset.click();
  await expect(
    page.locator('main').getByText('600 ml', { exact: true }).first(),
  ).toBeVisible();

  // Verify UI copy specifies Brühwasser
  await expect(
    page.getByText('Wassermenge (Brühwasser)', { exact: true }),
  ).toBeVisible();

  // Test keyboard navigation on tablist: ArrowRight moves from V60 to French Press
  await v60Tab.focus();
  await page.keyboard.press('ArrowRight');
  const frenchPressTab = page.getByRole('tab', { name: /French Press/i });
  await expect(frenchPressTab).toHaveAttribute('aria-selected', 'true');
  await expect(frenchPressTab).toBeFocused();

  // For French Press, preset label should be "Kanne (750 ml)"
  await expect(
    page.getByRole('button', { name: 'Kanne (750 ml)' }),
  ).toBeVisible();

  // Press End key -> moves to last method (Bialetti)
  await page.keyboard.press('End');
  const bialettiTab = page.getByRole('tab', { name: /Bialetti/i });
  await expect(bialettiTab).toHaveAttribute('aria-selected', 'true');
  await expect(bialettiTab).toBeFocused();

  // Press Home key -> moves back to first method (V60)
  await page.keyboard.press('Home');
  await expect(v60Tab).toHaveAttribute('aria-selected', 'true');
  await expect(v60Tab).toBeFocused();
});

test('geschmacksfinder supports arrow key roving tabindex, step focus shifts, and transparent trade-offs without fake percentages', async ({
  page,
}) => {
  await page.goto('/geschmack');

  // Step 1: Default is Filter. Navigate via arrow keys in radiogroup
  const filterRadio = page.getByRole('radio', { name: /Handfilter/i });
  await filterRadio.focus();
  await expect(filterRadio).toHaveAttribute('aria-checked', 'true');

  // ArrowDown moves to next radio in group (French Press)
  await page.keyboard.press('ArrowDown');
  const frenchPressRadio = page.getByRole('radio', { name: /French Press/i });
  await expect(frenchPressRadio).toHaveAttribute('aria-checked', 'true');
  await expect(frenchPressRadio).toBeFocused();

  // Move back to Handfilter
  await page.keyboard.press('ArrowUp');
  await expect(filterRadio).toHaveAttribute('aria-checked', 'true');

  // Click Weiter zu Frage 2 -> verifies focus shifts to step 2 heading
  await page.getByRole('button', { name: 'Weiter zu Frage 2' }).click();
  const step2Heading = page.locator('[id$="-step2-title"]');
  await expect(step2Heading).toBeFocused();

  // Step 2: Select Fruchtig & Floral
  await page.getByRole('radio', { name: /Fruchtig & Floral/i }).click();
  await page.getByRole('button', { name: 'Weiter zu Frage 3' }).click();

  // Step 3: Heading focused
  const step3Heading = page.locator('[id$="-step3-title"]');
  await expect(step3Heading).toBeFocused();

  // Select Hell & Spritzig and calculate
  await page.getByRole('radio', { name: /Hell & Spritzig/i }).click();
  await page.getByRole('button', { name: 'Empfehlung berechnen' }).click();

  // Step 4 Result Checks:
  // 1. Result heading focused
  const resultHeading = page.locator('[id$="-result-title"]');
  await expect(resultHeading).toBeFocused();
  await expect(resultHeading).toContainText('Flora Neubau');

  // 2. Ensure NO fake percentage scores are rendered anywhere on the page
  const pageText = await page.innerText('main');
  expect(pageText).not.toMatch(/\d+%\s*Übereinstimmung/i);

  // 3. Progress indicator does not state "Schritt 4 von 3"
  expect(pageText).not.toContain('Schritt 4 von 3');
  expect(pageText).not.toContain('Frage 4 von 3');

  // 4. Test trade-off explanation for conflicting choice: Reset and pick Espresso + Light Roast
  await page.getByRole('button', { name: /Andere Antworten wählen/i }).click();
  await page.getByRole('radio', { name: /Espresso & Siebträger/i }).click();
  await page.getByRole('button', { name: 'Weiter zu Frage 2' }).click();
  await page.getByRole('radio', { name: /Fruchtig & Floral/i }).click();
  await page.getByRole('button', { name: 'Weiter zu Frage 3' }).click();
  await page.getByRole('radio', { name: /Hell & Spritzig/i }).click();
  await page.getByRole('button', { name: 'Empfehlung berechnen' }).click();

  // Check that transparent trade-off rationale explains modern fruit espresso
  await expect(page.getByText(/Modern Espresso/i)).toBeVisible();
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
  { name: 'tablet-portrait', width: 834, height: 1194 },
  { name: 'tablet-landscape', width: 1024, height: 768 },
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
