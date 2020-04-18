import createMenuButton from './menuButton/menuButton'
import createDesktopMenu from './desktopMenu/desktopMenu'
import createSwitcher from './Switcher/Switcher'

export default function createHeader() {

    const header = document.createElement('header');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const headerWrap = document.createElement('div');
    headerWrap.classList.add('header__wrap');
    const menuButton = createMenuButton();
    const desktopMenu = createDesktopMenu();
    const switcher = createSwitcher();
    headerWrap.append(menuButton, desktopMenu, switcher);
    wrapper.append(headerWrap);
    header.append(wrapper);
    document.body.append(header);

    return header;
}