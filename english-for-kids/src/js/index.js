import '../css/style.css';
import '../css/style.scss';
import createHeader from './Header/header';
// import createCards from './MainContent/Cards/Cards';
import createMainContent from './MainContent/MainContent'
import playAudio from './MainContent/Cards/Card/playAudio'

const header = createHeader();
const mainContent = createMainContent();
let currentPage = 'MainPage';


header.addEventListener('click', event => {
    if (event.target.closest('.menu-button')) {
        header.querySelector('.menu-button').classList.toggle('menu-button--rotate');
        header.querySelector('.desktop-menu').classList.toggle('desktop-menu--active');
    }
    else if (event.target.closest('.desktop-menu__link')) {
        header.querySelector('.menu-button').classList.toggle('menu-button--rotate');
        header.querySelector('.desktop-menu').classList.toggle('desktop-menu--active');
        if (currentPage === event.target.textContent) return;
        currentPage = event.target.textContent;
        createMainContent(event.target.textContent);
    }

})

mainContent.addEventListener('click', event => {
   if (event.target.closest('.card-category')) {
       currentPage = event.target.closest('.card').getAttribute('data-category');
       createMainContent(event.target.closest('.card').getAttribute('data-category'));
   }
   if (event.target.closest('.card-word')) {

    if (event.target.classList.contains('card__rotate')) {
    event.target.closest('.card-word').classList.toggle('card--rotate');
    }
        else if ((!event.target.closest('.card--rotate'))) {
            playAudio((event.target.closest('.card-word').getAttribute('data-audio-src')));
        }

}

})

mainContent.addEventListener('mouseout', event => {
     const card = document.querySelector('.card--rotate');
     if (!card) return;
     if (!event.relatedTarget.closest('.card--rotate')) {
        
         card.classList.remove('card--rotate');
     }
    
})