import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Temple Beth Shalom/)
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    // Footer has links to Programs; use that since header nav requires lg breakpoint
    const programsLink = page.locator('a[href="/programs"]').first()
    await expect(programsLink).toBeVisible({ timeout: 10000 })
    await programsLink.click()
    await expect(page).toHaveURL('/programs')
  })
})

test.describe('Programs Page', () => {
  test('displays programs from Drupal', async ({ page }) => {
    await page.goto('/programs')
    await expect(page).toHaveTitle(/Programs/)
    await expect(page.getByText('Religious School').first()).toBeVisible()
  })
})

test.describe('Services Page', () => {
  test('displays service times from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page).toHaveTitle(/Service Times/)
    await expect(page.getByText('Shabbat', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Events Page', () => {
  test('displays events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page).toHaveTitle(/Events/)
    await expect(page.getByText('Purim', { exact: false }).first()).toBeVisible()
  })
})

test.describe('News Page', () => {
  test('displays news from Drupal', async ({ page }) => {
    await page.goto('/news')
    await expect(page).toHaveTitle(/News/)
    await expect(page.getByText('Mitzvah', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/programs', '/services', '/events', '/news']) {
      await page.goto(path)
      await expect(page.getByText('Beth Shalom', { exact: false }).first()).toBeVisible()
    }
  })
})
