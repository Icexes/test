export default function createWordCard(data,category) {
    
    
    // card.href = '#';
    // card.classList.add('card', 'card-word');
    // const cardDescription = document.createElement('p');
    // cardDescription.classList.add('card__description');
    // cardDescription.textContent = data.word;
    // const cardImage = document.createElement('img');
    // cardImage.classList.add('card__image');
    // cardImage.src = data.image;
    // card.append(cardImage,cardDescription);
   
   
    // console.log(category);
    // return card


    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    const card = document.createElement('div');
    card.classList.add('card', 'card-word');
    const cardFace = document.createElement('div');
    cardFace.classList.add('card__face', 'card__face--front');
    const cardFaceImage = document.createElement('img');
    cardFaceImage.src = data.image;
    cardFaceImage.classList.add('card-word__img');
  
    const cardFaceDescription = document.createElement('p');
    cardFaceDescription.classList.add('card-word__description');
    cardFaceDescription.textContent = data.word;
    cardFace.append(cardFaceImage,cardFaceDescription);
   


    // /////////////////////////////
    const cardBack = document.createElement('div');
    cardBack.classList.add('card__face', 'card__face--back');
    const cardBackImage = document.createElement('img');
    cardBackImage.src = data.image;
    cardBackImage.classList.add('card-word__img');
    

    const cardBackDescription = document.createElement('p');
    cardBackDescription.classList.add('card-word__description');
    cardBackDescription.textContent = data.translation;
    cardBack.append(cardBackImage, cardBackDescription);
    
    const cardRotate = document.createElement('img');
    cardRotate.classList.add('card__rotate');
    cardRotate.src='img/rotate.png';
    
    // ///////////////////
    card.append(cardFace,cardBack,cardRotate);
    cardContainer.append(card);
    console.log(data,category);



    // const cardDescription = document.createElement('p');
    // cardDescription.classList.add('card__description');
    // cardDescription.textContent = data.word;
    // const cardImage = document.createElement('img');
    // cardImage.classList.add('card__image');
    // cardImage.src = data.image;
    // card.append(cardImage,cardDescription);
   
   
    // console.log(category);
    return cardContainer;
}