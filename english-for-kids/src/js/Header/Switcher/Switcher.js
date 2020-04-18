export default function createSwitcher() {
    const switcher = document.createElement('div');
    switcher.classList.add('switcher');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('switcher__checkbox');
    const labelLeft = document.createElement('label');
    labelLeft.classList.add('switcher__label-left');
    labelLeft.textContent = 'Play';
    const labelRight = document.createElement('label');
    labelRight.classList.add('switcher__label-right');
    labelRight.textContent = 'Train';
    switcher.append(checkbox,labelLeft,labelRight);
    return switcher;
}
