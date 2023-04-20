import BaseScreen from "./baseScreen.js";

class InformationScreen extends BaseScreen {
    get getNextButton() { return $('android=new UiSelector().text("Next")'); }
    get getDoneButton() { return $('android=new UiSelector().text("Done")'); }

    async passModal() {
        await this.doTapOn(await this.getNextButton);
        await this.doTapOn(await this.getNextButton);
        await this.doTapOn(await this.getNextButton);
        await this.doTapOn(await this.getNextButton);
        await this.doTapOn(await this.getDoneButton);
    }
}

export default new InformationScreen();