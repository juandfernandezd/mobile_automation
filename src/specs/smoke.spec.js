import informationScreen from "../screens/informationScreen.js";
import locationScreen from "../screens/locationScreen.js";
import mainScreen from "../screens/mainScreen.js";
import splashScreen from "../screens/splashScreen.js";
import welcomeScreen from "../screens/welcomeScreen.js";

describe('Smoke', () => {
    it('Category list test', async () => {
        await splashScreen.validateSplash();
        await welcomeScreen.getNextScreen();
        await locationScreen.getNextPage();
        await informationScreen.passModal();
        await mainScreen.goMapView();
        await mainScreen.getMapContainer.waitForExist({ timeout: 3000 });
        await mainScreen.getListCategories.waitForExist({ timeout: 3000 });
        await mainScreen.expandListCategories();
        await mainScreen.getHotelOption.waitForExist({ timeout: 3000 });
        await mainScreen.closeList()
    })

    it('Privayy & Legal test', async () => {
        await mainScreen.goMenuView();
        await mainScreen.scrollMenuView();
    })

    it('Add Plans Option test', async () => {
        await mainScreen.goReserveView();
        await mainScreen.getCheckDinning.waitForExist({ timeout: 3000});
        await mainScreen.goDinningView();
        await mainScreen.getPartySize.waitForExist({ timeout: 3000 });
    })


});

