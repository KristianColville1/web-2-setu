/**
 * @class UIView
 * @description Handles direct DOM manipulations for UI components.
 */
export default class UIView {
    /**
     * @method setupBurgerMenu
     * @description Sets up the burger menu toggle functionality for responsive navigation.
     */
    setupBurgerMenu() {
        const burger = document.querySelector('.navbar-burger');
        const menu = document.querySelector(`#${burger?.dataset.target}`);
        if (burger && menu) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
        }
    }
}
