
# Calculator App Test Automation

This project is a solution developed for an Moxymind assignment. Basically it is test automation solution for Android Calculator application.

## Technologies Used
- [Appium](http://appium.io/docs/en/latest/)
- [WebdriverIO](https://webdriver.io)
- TypeScript

## Test Scenarios
Two test scenarios were implemented:

1. **Basic Mathematical Operations**: Verifies the functionality of basic operations (e.g., addition, subtraction) in the calculator.
2. **CLEAR and ClearAll Buttons**: Verifies the correct functionality of the CLEAR and ClearAll buttons.

## Testing Approach
- **Page Object Model** (POM) is used for organizing test code.
- The first test scenario uses **data-driven testing**.

## Reporting
A simple **dot reporter** is used for test reporting. For more details, check the [dot reporter documentation](https://webdriver.io/docs/dot-reporter/).

## CLI Commands

- To run the **CLEAR and ClearAll Buttons** test scenario, use the following command:
  npx wdio wdio.conf.ts --spec test/specs/clearButtonsTest.spec.ts
- To run the **Basic Mathematical Operations** test scenario, use the following command:
  npx wdio wdio.conf.ts --spec test/specs/calculationsTest.spec.ts
- To run both scenarios, use this command:
  npx wdio wdio.conf.ts
