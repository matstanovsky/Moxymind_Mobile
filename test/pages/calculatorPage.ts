import { numberToWord } from "../utils/convertUtils";

export class CalculatorPage{

    get numberZero(){ return this.getNumberButton(0); }
    get numberOne(){ return this.getNumberButton(1); }
    get numberTwo(){ return this.getNumberButton(2); }
    get numberThree(){ return this.getNumberButton(3); }
    get numberFour(){ return this.getNumberButton(4); }
    get numberFive(){ return this.getNumberButton(5); }
    get numberSix(){ return this.getNumberButton(6); }
    get numberSeven(){ return this.getNumberButton(7); }
    get numberEight(){ return this.getNumberButton(8); }
    get numberNine(){ return this.getNumberButton(9); }

    get plus() { return driver.$('#plus'); } 
    get minus() { return driver.$('#minus'); }
    get multiply() { return driver.$('#increasing'); }
    get divide() { return driver.$('#drop'); }
    get equals() { return driver.$('#equality'); }

    get percent() { return driver.$('#percent')}
    get clear() {return driver.$('#clearOne')}
    get allClear() {return driver.$('#clear')}

    get editor() {return driver.$('#editLarge')}
    get tempResult() {return driver.$('#editSmall')}

    async getNumberButton(number: number){
        const idLocator = `#${numberToWord(number)}`;
        return driver.$(idLocator);
    }
    async clickOnNumber(number:number) {
        await (await this.getNumberButton(number)).click();
    }
    async clickOnAction(action:string) {
        await driver.$(`#${action}`).click();
    }
    async enterNumber(number: number) {
        const digits = number.toString().split('');
        for (const digit of digits) {
            const digitNumber = parseInt(digit, 10);
            await this.clickOnNumber(digitNumber);
        }
    }
}

const calculatorPage = new CalculatorPage();
export default calculatorPage;

