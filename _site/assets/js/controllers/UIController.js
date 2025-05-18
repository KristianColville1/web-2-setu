import UIView from "../views/UIView.js";

/**
 * @class UIController
 * @description Controller for managing UI interactions and delegating to the UIView.
 */
export default class UIController {
    /**
     * @constructor
     * @description Initializes the UIController and its associated UIView.
     */
    constructor() {
        this.view = new UIView();
    }

    /**
     * @method init
     * @description Initializes UI components.
     */
    init() {
        this.view.setupBurgerMenu();
    }
}
