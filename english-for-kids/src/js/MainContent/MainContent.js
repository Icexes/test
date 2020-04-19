import createCards from './Cards/Cards'
import playMode from '../PlayMode/PlayMode'

export default function createMainContent(category = 'Main Page',isPlayMode) {

    const mainContent = !document.querySelector('main .wrapper') ? document.createElement('main') : document.querySelector('main');
    mainContent.classList.add('main-content');
    const wrapper = !document.querySelector('main .wrapper') ? document.createElement('div') : document.querySelector('main .wrapper');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML = '';
    const sectionName = document.createElement('h2');
    sectionName.textContent = category;
    sectionName.classList.add('main-content__title');

    const statPanel = document.createElement('div');
    statPanel.classList.add('stat-panel');
    const cards = createCards(category);

    const playButton = document.createElement('button');
    playButton.classList.add('play-button');
    playButton.textContent = 'Start Game';
    
    wrapper.append(sectionName, statPanel, cards, playButton);
    mainContent.append(wrapper);
    document.body.append(mainContent);

   
    if (isPlayMode) playMode(category, isPlayMode);


    const menuLinks = document.querySelectorAll('.desktop-menu__link');
    menuLinks.forEach(link=> {
        if (link.classList.contains('desktop-menu__link--active')) link.classList.remove('desktop-menu__link--active');
        if (link.textContent=== category) {
            link.classList.add('desktop-menu__link--active');
        }
    })
   
    return mainContent;
}