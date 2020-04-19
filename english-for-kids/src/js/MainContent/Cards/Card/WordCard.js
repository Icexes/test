export default function createWordCard(data) {



    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    const card = document.createElement('div');
    card.classList.add('card-word');
    card.dataset.audioSrc = data.audioSrc;
    const cardFace = document.createElement('div');
    cardFace.classList.add('card__face', 'card__face--front');
    const cardFaceImage = document.createElement('img');
    cardFaceImage.src = data.image;
    cardFaceImage.classList.add('card-word__img');

    const cardFaceDescription = document.createElement('p');
    cardFaceDescription.classList.add('card-word__description');
    cardFaceDescription.textContent = data.word;
    cardFace.append(cardFaceImage, cardFaceDescription);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card__face', 'card__face--back');
    const cardBackImage = document.createElement('img');
    cardBackImage.src = data.image;
    cardBackImage.classList.add('card-word__img');


    const cardBackDescription = document.createElement('p');
    cardBackDescription.classList.add('card-word__description');
    cardBackDescription.textContent = data.translation;
    cardBack.append(cardBackImage, cardBackDescription);

    const cardRotate = document.createElement('div');
    cardRotate.classList.add('card__rotate');
    card.append(cardFace, cardBack, cardRotate);
    cardContainer.append(card);





    return cardContainer;
}