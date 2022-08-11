import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:5173/');

  await expect(page).toHaveTitle(/Vite App/);

  const label = page.locator('data-testid=app');
  await expect(label).toContainText('Welcome to Vite + React!');

  const button = page.locator('data-testid=button');

  await expect(button).toContainText(/0/);

  button.click();
  await expect(button).toContainText(/1/);

  button.click();
  await expect(button).toContainText(/2/);

  page.close();
});
