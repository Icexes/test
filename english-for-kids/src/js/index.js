import '../css/style.css';
import '../css/style.scss';
import createHeader from './Header/header';
// import createCards from './MainContent/Cards/Cards';
import createMainContent from './MainContent/MainContent'
import playAudio from './MainContent/Cards/Card/playAudio'
import playMode from './PlayMode/PlayMode';
// import startGame from './PlayMode/StartGame'


const header = createHeader();
let isPlayMode = false;
let isGameStart = false;
const mainContent = createMainContent();
let currentPage = 'Main Page';
let cardsAudio = [];
let errorsCounter = 0;
const blurBody = document.createElement('div');

const createIcon = (result) => {
    const correctAnswer = document.createElement('img');
    correctAnswer.src = result ? 'img/correct-answer.png' : 'img/wrong-answer.png';
    correctAnswer.classList.add('answer',);
    const statPanel = document.querySelector('.stat-panel');
    statPanel.prepend(correctAnswer);
}

header.addEventListener('click', event => {
    if (event.target.closest('.menu-button')) {
        header.querySelector('.menu-button').classList.toggle('menu-button--rotate');
        header.querySelector('.desktop-menu').classList.toggle('desktop-menu--active');
        if (!document.querySelector('.blur-body')) {
        blurBody.classList.add('blur-body');
        document.body.append(blurBody);
        }
        else {
            blurBody.classList.remove('blur-body');
            blurBody.remove();
        }
    } else if (event.target.closest('.desktop-menu__link')) {
        isGameStart = false;
        createMainContent(event.target.textContent, isPlayMode);
        header.querySelector('.menu-button').classList.toggle('menu-button--rotate');
        header.querySelector('.desktop-menu').classList.toggle('desktop-menu--active');      
        currentPage = event.target.textContent;
        blurBody.remove();
    }

    if (event.target.closest('input ')) {

        isPlayMode = event.target.closest('input').checked;
        const statPanel = document.querySelector('.stat-panel');
        statPanel.innerHTML='';
        if (!isPlayMode && isGameStart) isGameStart = false;
        playMode(currentPage, isPlayMode);

    }

})

mainContent.addEventListener('click', event => {

    if (event.target.closest('.card-category')) {
        currentPage = event.target.closest('.card').getAttribute('data-category');
        createMainContent(event.target.closest('.card').getAttribute('data-category'));
        playMode(currentPage, isPlayMode);

    }
    if (event.target.closest('.card-word')) {

        if (event.target.classList.contains('card__rotate')) {
            event.target.closest('.card-word').classList.toggle('card--rotate');
        } else if ((!event.target.closest('.card--rotate')) && !isPlayMode) {
            playAudio((event.target.closest('.card-word').getAttribute('data-audio-src')));
        } else if (event.target.closest('.card-word--cover')) {
            if (isGameStart) {
                if (event.target.classList.contains('card-word--correct-answer')) return;
                if (event.target.closest('.card-word').getAttribute('data-audio-src') === cardsAudio[cardsAudio.length - 1]) {
                    event.target.classList.add('card-word--correct-answer');
                    playAudio('audio/correct.mp3');

                    // const correctAnswer = document.createElement('img');
                    // correctAnswer.src = 'img/correct-answer.png';
                    // correctAnswer.classList.add('answer', 'answer--correct');
                    // const statPanel = document.querySelector('.stat-panel');
                    // statPanel.append(correctAnswer);
                    createIcon(true);

                    cardsAudio.pop();
                    setTimeout(() => playAudio(cardsAudio[cardsAudio.length - 1]), 1000)
                    if (!cardsAudio.length) {
                        const modalWindow = document.createElement('div');
                        modalWindow.classList.add('modal-window', );
                        const modalDescription = document.createElement('h1');
                        modalDescription.classList.add('modal-window__description');
                        const modalImage = document.createElement('img');
                        modalImage.classList.add('modal-window__image')
                        if (errorsCounter) {
                            modalDescription.textContent = `You have ${errorsCounter} errors!`;
                            modalImage.src = 'img/failure.jpg'

                            setTimeout(() => playAudio('audio/failure.mp3'), 500)
                        } else {
                            modalDescription.textContent = 'You Win!';
                            modalImage.src = 'img/success.jpg'
                            setTimeout(() => playAudio('audio/success.mp3'), 500)
                        }
                        modalWindow.append(modalDescription, modalImage);
                        document.body.append(modalWindow);
                        setTimeout(() => modalWindow.remove(), 3500);
                        isGameStart = false;
                        currentPage = 'Main Page';
                        createMainContent(currentPage, true);
                    }

                } else {
                    createIcon(false);
                    playAudio('audio/error.mp3')
                    errorsCounter += 1;
                }
            }
        }



    }
    if (event.target.closest('.play-button')) {
        if (event.target.closest('.play-button').classList.contains('play-button--repeat')) {
            playAudio(cardsAudio[cardsAudio.length - 1])
        } else {
            isGameStart = true;
            cardsAudio = [];
            errorsCounter = 0;
            event.target.closest('.play-button').classList.add('play-button--repeat');
            const cards = document.querySelectorAll('.card-word');
            cards.forEach(card =>
                cardsAudio.push(card.getAttribute('data-audio-src')));
            cardsAudio = cardsAudio.sort(() => Math.random() - 0.5);
            playAudio(cardsAudio[cardsAudio.length - 1]);
        }
    }

})

blurBody.addEventListener('click', () => {
    document.querySelector('.menu-button').classList.toggle('menu-button--rotate');
    document.querySelector('.desktop-menu').classList.toggle('desktop-menu--active');
    blurBody.remove();
})



mainContent.addEventListener('mouseout', event => {
    const card = document.querySelector('.card--rotate');
    if (!card) return;
    if (!event.relatedTarget.closest('.card--rotate')) {

        card.classList.remove('card--rotate');
    }

})


