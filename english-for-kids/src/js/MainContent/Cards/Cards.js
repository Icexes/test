import createCard from './Card/Card'
import cardsData from '../../DataFiles/Cards'
import createWordCard from './Card/WordCard'

export default function createCards(category = 'mainPaige') {
    const cards = document.createElement('section');
    cards.classList.add('cards');
    cardsData[category].forEach(elem => {
        const card = category === 'mainPaige' ? createCard(elem, category) : createWordCard(elem,category);
        cards.append(card);
    })
    return cards;
}