import { test, expect } from '@playwright/test';
import { greetingTestId, buttonTestId } from '../pages/App';

test('App should show greeting and increments the counter', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');

  await expect(page).toHaveTitle(/Vite App/);

  const label = page.locator(`data-testid=${greetingTestId}`);
  await expect(label).toContainText('Welcome to Vite + React!');

  const button = page.locator(`data-testid=${buttonTestId}`);

  // default value
  await expect(button).toContainText(/0/);

  button.click();
  await expect(button).toContainText(/1/);

  button.click();
  await expect(button).toContainText(/2/);

  page.close();
});
