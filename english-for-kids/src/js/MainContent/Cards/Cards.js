import createCard from './Card/Card'
import cardsData from '../../DataFiles/Cards'
import createWordCard from './Card/WordCard'

export default function createCards(category = 'Main Page', whorstWordObject) {
    const cards = document.createElement('section');
    cards.classList.add('cards');


    if (!whorstWordObject) {
    cardsData[category].forEach(elem => {
        const card = category === 'Main Page' ? createCard(elem, category) : createWordCard(elem, category);
        cards.append(card);
    })
    }
    else {
        whorstWordObject.forEach(elem => {
            const card = createWordCard(elem, category);
            cards.append(card);
    })
}

    return cards;


}