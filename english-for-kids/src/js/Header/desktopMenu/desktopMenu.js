import menuLinks from '../../DataFiles/MenuLinks'

export default function createDesktopMenu() {
    const desktopMenu = document.createElement('div');
    desktopMenu.classList.add('desktop-menu');
    const desktopMenuList = document.createElement('ul');
    desktopMenuList.classList.add('desktop-menu__list');
    desktopMenu.append(desktopMenuList);
    menuLinks.forEach(textContent => {
        const item = document.createElement('li');
        item.classList.add('desktop-menu__item');
        const link = document.createElement('a');
        link.href = '#';
        link.classList.add('desktop-menu__link');
        link.text = textContent;
        item.append(link)
        desktopMenuList.append(item);
    })
    return desktopMenu;
}
