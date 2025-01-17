import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  const todoInput = page.getByPlaceholder('What needs to be done?');
  await todoInput.click();
  await todoInput.fill('feed the dog');
  await todoInput.press('Enter');
  await todoInput.fill('water the plants');
  await todoInput.press('Enter');
  await todoInput.click();
  await todoInput.fill('close the window');
  await todoInput.press('Enter');
  const items = page.getByRole('listitem').filter({ has: page.getByLabel('Toggle Todo')});
  await expect(items).toHaveText(['feed the dog', 'water the plants', 'close the window']);
  /*
  await expect(page.getByRole('listitem')).toContainText('feed the dog');
  await expect(page.getByRole('listitem')).toContainText('water the plants');
  await expect(page.getByRole('listitem')).toContainText('close the window');
  */
});