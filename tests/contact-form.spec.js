const { test, expect } = require('@playwright/test');
const { HomePage, ContactPage } = require('../pages/PageModels');
const URLS = require('../config/urls');
const testData = require('../testData/contactFormData');

test.describe('Contact Form Tests', () => {
  let homePage;
  let contactPage;

  // Test data is now imported from testData folder

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactPage = new ContactPage(page);
  });

  test('should submit contact form successfully', async ({ page }) => {
    // Go to home page
    await homePage.goToHomePage(URLS.HOME_PAGE);
    await homePage.clickContactLink();

    // Fill and submit the contact form
    await contactPage.submitContactForm(
      testData.validUser.name, 
      testData.validUser.email, 
      testData.validUser.message
    );

    // Wait for form submission
    await page.waitForTimeout(2000);
  });

  test('should fill contact form fields individually', async ({ page }) => {
    // Go to home page
    await homePage.goToHomePage(URLS.HOME_PAGE);
    await homePage.clickContactLink();

    // Fill form fields one by one
    await contactPage.fillNameField(testData.validUser.name);
    await contactPage.fillEmailField(testData.validUser.email);
    await contactPage.fillMessageField(testData.validUser.message);
    await contactPage.clickSendButton();

    // Wait for form submission
    await page.waitForTimeout(2000);
  });

  test('should handle empty form fields', async ({ page }) => {
    // Go to home page
    await homePage.goToHomePage(URLS.HOME_PAGE);
    await homePage.clickContactLink();

    // Try to submit with empty fields
    await contactPage.submitContactForm(
      testData.emptyFields.name, 
      testData.validUser.email, 
      testData.emptyFields.message
    );

    await page.waitForTimeout(2000);
  });

  test('should handle invalid email format', async ({ page }) => {
    // Go to home page
    await homePage.goToHomePage(URLS.HOME_PAGE);
    await homePage.clickContactLink();

    // Try to submit with invalid email
    await contactPage.submitContactForm(
      testData.validUser.name, 
      testData.invalidUser.email, 
      testData.validUser.message
    );

    await page.waitForTimeout(2000);
  });

  test('should test with different user types', async ({ page }) => {
    // Go to home page
    await homePage.goToHomePage(URLS.HOME_PAGE);
    await homePage.clickContactLink();

    // Test with business user
    await contactPage.submitContactForm(
      testData.businessUser.name, 
      testData.businessUser.email, 
      testData.businessUser.message
    );

    await page.waitForTimeout(2000);
  });

  test('should test with long name', async ({ page }) => {
    // Go to home page
    await homePage.goToHomePage(URLS.HOME_PAGE);
    await homePage.clickContactLink();

    // Test with very long name
    await contactPage.submitContactForm(
      testData.longName.name, 
      testData.longName.email, 
      testData.longName.message
    );

    await page.waitForTimeout(2000);
  });
});
