import UIView from "../views/UIView.js";

export default class UIController {
    constructor() {
        this.view = new UIView();
    }

    init() {
        this.view.setupBurgerMenu();
    }
}
