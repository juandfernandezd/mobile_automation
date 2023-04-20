import BaseScreen from "./baseScreen.js";

class WelcomeScreen extends BaseScreen {
    get getStartedButton() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/permission_primary_btn")');}

    async getNextScreen() {
        await this.doTapOn(await this.getStartedButton);
    }
}

export default new WelcomeScreen();