import '../css/style.css';
import '../css/style.scss';
import createHeader from './Header/header';
// import createCards from './MainContent/Cards/Cards';
import createMainContent from './MainContent/MainContent'

createHeader();


const mainContent = createMainContent();

mainContent.addEventListener('click', event => {
   if (event.target.closest('.card-category')) {
       
       createMainContent(event.target.closest('.card').getAttribute('data-category'));
   }
   if (event.target.closest('.card-word')) {

    if (event.target.classList.contains('card__rotate')) {
    event.target.closest('.card-word').classList.toggle('card--rotate');
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