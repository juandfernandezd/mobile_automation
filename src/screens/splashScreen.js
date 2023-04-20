import BaseScreen from "./baseScreen.js"

class SplashScreen extends BaseScreen {
    get getSplashContainer() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/container")');}

    async validateSplash() {
        await this.getSplashContainer;
    }
}

export default new SplashScreen();