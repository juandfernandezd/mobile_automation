import BaseScreen from "./baseScreen.js";

class MainScreen extends BaseScreen {
    get getMapButton() { return $('~Map, Tab, 2of5'); }
    get getMenuButton() { return $('~More Options, Tab, 5of5'); }
    get getReserveButton() { return $('~Buy tickets, Reserve Dining, Tab, 3of5'); }
    get getMapContainer() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/fragmentContainer")'); }
    get getListCategories() { return $('~Attractions, Category, Collapsed, 1of11, button'); }
    get getHotelOption() { return $('~Hotels, Category, 10of11, button'); }
    get getScrollView() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/fragmentContainer")'); };
    get getCloseList() { return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/closeButton")'); }
    get getCheckDinning() { return $('android=new UiSelector().text("Check Dining Availability")'); }
    get getPartySize() { return $('android=new UiSelector().text("Party Size")'); }

    async goMapView(){
        await this.doTapOn(await this.getMapButton);
    }

    async expandListCategories() {
        await this.doTapOn(await this.getListCategories);
    }

    async goMenuView(){
        await this.doTapOn(await this.getMenuButton);
    }

    async scrollMenuView(){
        await this.scrollView(await this.getScrollView);
    }

    async closeList(){
        await this.doTapOn(await this.getCloseList);
    }

    async goReserveView(){
        await this.doTapOn(await this.getReserveButton);
    }

    async goDinningView() {
        await this.doTapOn(await this.getCheckDinning);
    }

}

export default new MainScreen();