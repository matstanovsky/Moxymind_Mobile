import calculatorPage from '../pages/calculatorPage.ts';
import testData from '../data/calculatorTestCases.json'

describe('Set of tests for simple calculation operations', () => {
    beforeEach(async function () {
        await calculatorPage.allClear.click();
      });
    
    testData.forEach(({ num1, num2, operation, expected}) => {
        it(`Do ${operation} with ${num1} and ${num2} and expect ${expected}`, async () => {
            
            await calculatorPage.enterNumber(num1);
            await calculatorPage.clickOnAction(operation);
            await calculatorPage.enterNumber(num2);

            await expect(await calculatorPage.tempResult.getText()).toEqual(expected.toString());
            
            await calculatorPage.equals.click();
            
            await expect((await calculatorPage.editor.getText())).toEqual(expected.toString());

        });
    });
});