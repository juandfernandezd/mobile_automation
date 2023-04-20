export default class BaseScreen {

    async doTapOn(element){
        await element.touchAction('tap');
    }

    async scrollView(element) {
        await element.scrollIntoView();
    }

}