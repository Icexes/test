export default function playMode(currentPage, isPlayMode) {
    const wrapper = document.querySelector('main .wrapper');
    const cards = currentPage !== 'Main Page' ? document.querySelectorAll('.card-word') : document.querySelectorAll('.card');
    const desktopMenu = document.querySelector('.desktop-menu');
    if (isPlayMode) {
        desktopMenu.classList.add('desktop-menu--play-mode');
    } else {
        desktopMenu.classList.remove('desktop-menu--play-mode');
    }

    if (currentPage !== 'Main Page') {
        if (isPlayMode) {
            cards.forEach(card => {
                const cardWordCover = document.createElement('div');
                cardWordCover.classList.add('card-word--cover');
                card.append(cardWordCover);
                card.querySelector('img').classList.add('card-word__img--cover');
                card.querySelector('p').classList.add('display-none');
                card.querySelector('.card__rotate').classList.add('display-none');
            })
            wrapper.querySelector('.play-button').classList.add('display-block');
        } else {
            if (!document.querySelector('.card-word--cover')) return;
            cards.forEach(card => {
                const cardWordCover = card.querySelector('.card-word--cover');
                cardWordCover.remove();
                card.querySelector('.card-word__img').classList.remove('card-word__img--cover');
                card.querySelector('p').classList.remove('display-none');
                card.querySelector('.card__rotate').classList.remove('display-none');
            })
            wrapper.querySelector('.play-button').classList.remove('play-button--repeat');
            wrapper.querySelector('.play-button').classList.remove('display-block');
        }
    } else if (currentPage === 'Main Page') {
        if (isPlayMode) {
            cards.forEach(card => card.classList.add('card--play-mode'))
        } else {
            cards.forEach(card => card.classList.remove('card--play-mode'));
        }
    }

}