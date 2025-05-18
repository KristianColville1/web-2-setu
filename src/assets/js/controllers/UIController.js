import UIView from "../views/UIView.js";

/**
 * @class UIController
 * @description Controller for managing UI interactions and delegating to the UIView.
 */
export default class UIController {
    /**
     * Initializes the UIController and its associated UIView.
     */
    constructor() {
        this.view = new UIView();
    }

    /**
     * Initializes UI components.
     */
    init() {
        this.view.setupBurgerMenu();
    }
}
