import createCards from './Cards/Cards'
import playMode from '../PlayMode/PlayMode'
import createTable from './StatTable'

export default function createMainContent(category = 'Main Page', isPlayMode, cardsData, whorstWordArr='') {

    const mainContent = !document.querySelector('main') ? document.createElement('main') : document.querySelector('main');
    mainContent.classList.add('main-content');
    mainContent.innerHTML = '';
    const wrapper = !document.querySelector('main .wrapper') ? document.createElement('div') : document.querySelector('main .wrapper');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML = '';
    const sectionName = document.createElement('h2');
    sectionName.textContent = category;
    sectionName.classList.add('main-content__title');

    const statPanel = document.createElement('div');
    statPanel.classList.add('stat-panel');

    if (category !== 'Statistics' && whorstWordArr!=='empty') {

        const cards = createCards(category , whorstWordArr);
        const playButton = document.createElement('button');
        playButton.classList.add('play-button');
        playButton.textContent = 'Start Game';
        wrapper.append(sectionName, statPanel, cards, playButton);
        mainContent.append(wrapper);
        document.body.append(mainContent);
        if (isPlayMode) playMode(category, isPlayMode);
    } else if (category === 'Statistics') {
        mainContent.append(wrapper);
        const table = createTable();
        wrapper.append(sectionName, table);

        document.querySelector('.controls__reset-stat-btn').addEventListener('click', () => {

            localStorage.setItem('cardsStat', JSON.stringify(cardsData));
            createMainContent('Statistics', isPlayMode, cardsData);

        })



        // new
        document.querySelector('.controls__repeat-word-btn').addEventListener('click', () => {
            const words = [];
            const localStorageCardsData = JSON.parse(localStorage.getItem("cardsStat"));
            Object.keys(localStorageCardsData).forEach(categ => {
                if (categ !== 'Main Page') {
                    localStorageCardsData[categ].forEach(wordObject => {
                        words.push(wordObject);
                    })
                }
            })
            const whorstWords = [];
            const sortedWords = words.sort((a, b) => (a.bad / ((a.bad + a.ok) === 0 ? 1 : a.bad + a.ok)) > (b.bad / ((b.bad + b.ok) === 0 ? 1 : b.bad + b.ok)) ? 1 : -1).slice(words.length - 8);
            sortedWords.forEach(word => {
                if (word.bad !== 0) {
                    whorstWords.push(word);
                }
            })


            createMainContent('Repeat', isPlayMode, '', whorstWords.length === 0 ? 'empty' : whorstWords);

        })
        // end new


    }
    else if (category === 'Repeat') {
        const nothingToShow = document.createElement('h1');
        nothingToShow.classList.add('nothing-to-show');
        nothingToShow.textContent = 'No errors yet!';
        wrapper.append(nothingToShow);
        mainContent.append(wrapper);
        document.body.append(mainContent);
    }


    const menuLinks = document.querySelectorAll('.desktop-menu__link');
    menuLinks.forEach(link => {
        if (link.classList.contains('desktop-menu__link--active')) link.classList.remove('desktop-menu__link--active');
        if (link.textContent === category) {
            link.classList.add('desktop-menu__link--active');
        }
    })

    return mainContent;
}