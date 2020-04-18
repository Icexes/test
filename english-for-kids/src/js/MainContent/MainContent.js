import createCards from './Cards/Cards'


export default function createMainContent(category = 'Main Page') {

    const mainContent = !document.querySelector('main .wrapper') ? document.createElement('main') : document.querySelector('main');
    mainContent.classList.add('main-content');
    const wrapper = !document.querySelector('main .wrapper') ? document.createElement('div') : document.querySelector('main .wrapper');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML = '';
    const sectionName = document.createElement('h2');
    sectionName.textContent = category;
    sectionName.classList.add('main-content__title');

    const cards = createCards(category);
    wrapper.append(sectionName, cards);
    mainContent.append(wrapper);
    document.body.append(mainContent);


    return mainContent;
}