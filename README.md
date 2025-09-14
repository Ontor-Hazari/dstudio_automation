# Contact Form Automation

This project contains automated tests for a contact form using Playwright.

## Installation

1.  Clone the repository.
2.  Install the dependencies using npm:

    ```bash
    npm install
    ```

3.  Install the required browsers for Playwright:

    ```bash
    npx playwright install
    ```

## Running the tests

You can run the tests using the following commands:

-   To run all the tests in headless mode:

    ```bash
    npm test
    ```

-   To run the tests in headed mode:

    ```bash
    npm run test:headed
    ```

-   To open the Playwright UI and run the tests from there:

    ```bash
    npm run test:ui
    ```

## Project Structure

-   `config/urls.js`: Contains the URLs used in the tests.
-   `pages/PageModels.js`: Contains the Page Object Models for the application.
-   `tests/contact-form.spec.js`: Contains the test cases for the contact form.
-   `testData/contactFormData.js`: Contains the test data used in the tests.
-   `playwright.config.js`: The configuration file for Playwright.
