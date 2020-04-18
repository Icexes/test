export default function createMenuButton() {
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    for (let i = 0; i < 3 ; i+=1) {
        const line = document.createElement('span');
        line.classList.add('menu-button__line');
        menuButton.append(line);
    }
    return menuButton;
}

