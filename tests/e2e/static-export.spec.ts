import { expect, test } from '@playwright/test';

import { siteRoutes } from './routes';

for (const route of siteRoutes) {
  test(`${route.name} loads and reloads from the static export`, async ({
    page,
  }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('main')).toBeVisible();

    const reloaded = await page.reload();
    expect(reloaded?.status()).toBe(200);
    await expect(page.locator('main')).toBeVisible();

    const images = page.locator('main img:visible');
    for (let index = 0; index < (await images.count()); index++) {
      const image = images.nth(index);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate((element: HTMLImageElement) => element.naturalWidth),
        )
        .toBeGreaterThan(0);
      const source = await image.getAttribute('src');
      if (source?.startsWith('/media/') && !source.endsWith('.svg')) {
        const sourceSet = await image.getAttribute('srcset');
        expect(sourceSet).toContain('/media/responsive/');
        expect(sourceSet?.split(',').length).toBeGreaterThan(1);
      }
    }
  });
}

test('key showcase navigation and interactions work from the static export', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Bohnen entdecken' }).click();
  await expect(page).toHaveURL(/\/kaffee\/?$/);
  await expect(page.locator('main')).toBeVisible();

  // Test coffee product navigation from catalog
  await page.getByRole('link', { name: 'Wiener Samt', exact: true }).click();
  await expect(page).toHaveURL(/\/kaffee\/wiener-samt\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Wiener Samt',
  );
});

test('mobile drawer opens, cycles focus, and closes with escape on static export', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();

  const menuToggle = page.locator('button[aria-controls="mobile-menu"]');
  await expect(menuToggle).toBeVisible();

  // Open drawer
  await menuToggle.click();
  const drawer = page.locator('#mobile-menu');
  await expect(drawer).toBeVisible();

  // Initial focus on close button
  const closeBtn = drawer.getByRole('button', { name: 'Menü schließen' });
  await expect(closeBtn).toBeFocused();

  // Tab cycling through links
  await page.keyboard.press('Tab');
  await expect(
    drawer.getByRole('link', { name: 'Kaffee', exact: true }),
  ).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(
    drawer.getByRole('link', { name: 'Geschmacksfinder', exact: true }),
  ).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(
    drawer.getByRole('link', { name: 'Brühguide', exact: true }),
  ).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(
    drawer.getByRole('link', { name: 'Rösterei', exact: true }),
  ).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(
    drawer.getByRole('link', { name: 'Zum Geschmacksfinder', exact: true }),
  ).toBeFocused();

  // Wrap to close button
  await page.keyboard.press('Tab');
  await expect(closeBtn).toBeFocused();

  // Close with Escape
  await page.keyboard.press('Escape');
  await expect(drawer).not.toBeVisible();
  await expect(menuToggle).toBeFocused();
});

test('geschmacksfinder computes combined trade-offs on static export', async ({
  page,
}) => {
  await page.goto('/geschmack');
  await expect(page.locator('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Geschmacksfinder',
  );

  // Step 1: Espresso & Siebträger
  await page.getByRole('radio', { name: /Espresso & Siebträger/i }).click();
  await page.getByRole('button', { name: 'Weiter zu Frage 2' }).click();

  // Step 2: Schokolade & Nuss
  await page.getByRole('radio', { name: /Schokolade & Nuss/i }).click();
  await page.getByRole('button', { name: 'Weiter zu Frage 3' }).click();

  // Step 3: Hell & Spritzig
  await page.getByRole('radio', { name: /Hell & Spritzig/i }).click();
  await page.getByRole('button', { name: 'Empfehlung berechnen' }).click();

  // Result: Flora Neubau with combined trade-offs
  const resultHeading = page.locator('[id$="-result-title"]');
  await expect(resultHeading).toBeFocused();
  await expect(resultHeading).toContainText('Flora Neubau');

  await expect(
    page.getByText('Sensorische Einordnung deiner Auswahl:'),
  ).toBeVisible();
  await expect(page.getByText(/Modern Espresso/i)).toBeVisible();
  await expect(
    page.getByText(
      /Sensorischer Kompromiss.*Schokolade gewählt.*helle Röstung/i,
    ),
  ).toBeVisible();
});

test('brew calculator switches methods and presets on static export', async ({
  page,
}) => {
  await page.goto('/bruehen');
  await expect(page.locator('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Das perfekte Brühverhältnis',
  );

  // V60 Kanne preset (600 ml)
  const v60PotPreset = page.getByRole('button', { name: 'Kanne (600 ml)' });
  await expect(v60PotPreset).toBeVisible();
  await v60PotPreset.click();
  await expect(
    page.locator('main').getByText('36.0 g', { exact: true }),
  ).toBeVisible();

  // Switch to French Press tab
  const frenchPressTab = page.getByRole('tab', { name: /French Press/i });
  await frenchPressTab.click();
  await expect(frenchPressTab).toHaveAttribute('aria-selected', 'true');

  // French Press Kanne preset (750 ml)
  const fpPotPreset = page.getByRole('button', { name: 'Kanne (750 ml)' });
  await expect(fpPotPreset).toBeVisible();
  await fpPotPreset.click();
  await expect(
    page.locator('main').getByText('50.0 g', { exact: true }),
  ).toBeVisible();
});
