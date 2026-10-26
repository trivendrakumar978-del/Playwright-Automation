// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  // Test folder
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if test.only is accidentally used
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // One worker on CI
  workers: process.env.CI ? 1 : undefined,

  // HTML report
  reporter: 'html',

  // Shared settings for all projects
  use: {

    // Screenshot when test fails
    screenshot: 'only-on-failure',

    // Trace when test fails
    trace: 'retain-on-failure',

    // Base URL
    // baseURL: 'http://localhost:3000',
  },

  // Configure projects for major browsers
  projects: [

    // Chrome / Chromium
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Firefox
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // Safari / WebKit
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile Chrome
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },

    // Mobile Safari
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // Microsoft Edge
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },

    // Google Chrome
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // Run local development server before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});