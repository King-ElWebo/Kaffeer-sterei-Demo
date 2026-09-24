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
