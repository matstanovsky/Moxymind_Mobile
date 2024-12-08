import calculatorPage from '../pages/calculatorPage.ts';

describe('Simple tests for clear/delete buttons in calculator', ()=> {
    
    beforeEach(async function () {
        await calculatorPage.allClear.click();
      });

    it('Clear all (CA) button should delete whole text', async ()=>{
        await calculatorPage.enterNumber(42);
        await calculatorPage.clickOnAction('plus');
        await calculatorPage.enterNumber(12);
        await calculatorPage.equals.click();
        await calculatorPage.allClear.click();

        await expect(await calculatorPage.editor.getText()).toBeFalsy();
        await expect(await calculatorPage.tempResult.getText()).toBeFalsy();
    })

    it('Clear button should delete just last digit in editor', async ()=>{
        await calculatorPage.enterNumber(833);
        await calculatorPage.clear.click();

        await expect(await calculatorPage.editor.getText()).toEqual('83');

        await calculatorPage.clickOnAction('minus');
        await calculatorPage.clickOnNumber(4);

        await expect(await calculatorPage.editor.getText()).toBeTruthy();
        await expect(await calculatorPage.tempResult.getText()).toEqual('79');

        await calculatorPage.clear.click();

        await expect(await calculatorPage.editor.getText()).toEqual('83-');
        await expect(await calculatorPage.tempResult.getText()).toBeFalsy();
    })

})