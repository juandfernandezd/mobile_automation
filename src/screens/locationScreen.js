import BaseScreen from "./baseScreen.js";

class LocationScreen extends BaseScreen {
    get getShareLocationButton() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/permission_primary_btn")'); }
    get getAcceptShareLocation() { return $('android=new UiSelector().resourceId("android:id/button1")'); }
    get getAllowUsingApp() { return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")'); }

    async getNextPage() {
        await this.doTapOn(await this.getShareLocationButton);
        await this.doTapOn(await this.getAcceptShareLocation);
        await this.doTapOn(await this.getAllowUsingApp);
    }
}

export default new LocationScreen();