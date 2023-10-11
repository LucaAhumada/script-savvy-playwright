import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test location
  testDir: './tests',

  outputDir: './reports/artifacts',

  // Wheter to run spec files sequentially
  fullyParallel: false,

  // Fail build on CI if there are tests marked as 'only'.
  forbidOnly: !!process.env.CI,

  // Amount of retries on failure (flaky test)
  retries: process.env.CI ? 1 : 1,

  // Amount of jobs to run in parallel
  workers: process.env.CI ? 1 : 1,

  // Maximum time expect() should wait to met a condition
  expect: { timeout: 6 * 1000 },

  globalTeardown: "./global-teardown.ts",

  // Reporter to use. See https://playwright.dev/docs/test-reporters 
  reporter: [
    ['list'],
    ["allure-playwright", { detail: true }],
    ['html', { outputFolder: './reports/html-reports', open: 'never' }]
    // To generate Azure Pipeline Results use the following reporter
    // ['junit', { outputFile: 'test-results/junit.xml' }],
  ],

  use: {
    actionTimeout: 10 * 1000, // Maximum time each action like click() can take
    viewport: { width: 1500, height: 730 },
    headless: true,
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'Chrome',
      use: { channel: 'chrome' },
    },

    // {
    //  name: 'firefox',
    //  use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //  name: 'Microsoft Edge',
    //  use: { channel: 'msedge' },
    // },

    // {
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
    // },

    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }
  ],

  // In case you need to run your local env before the tests run
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});

module.exports = exports.default;