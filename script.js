const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');
const startBtn = document.getElementById('start');
const menu = document.getElementById('menu');
const cardsField = document.getElementById('game');
let renderedCards = [];

let difficulty = 1;
let bugCard = 0;

class Card {
  renderCard(isBug) {
    const card = document.createElement('div');
    card.classList.add('card');
    if (isBug) {
      card.innerHTML = `
        <img class="card__back" src="./img/reverseCard.png">
        <img class="card__front" src="./img/bugCard.png">
      `;
    } else {
      card.innerHTML = `
        <img class="card__front" src="./img/emptyCard.png">
        <img class="card__back" src="./img/reverseCard.png">
      `;
    };
    cardsField.append(card);
  };

  generateCards (cards, lvl) {
    bugCard = Math.floor(Math.random() * cards);
    for (let i = 0; i < cards; i++) {
      if (i === bugCard) {
        this.renderCard(true);
      } else {
        this.renderCard(false);
      };
    }
    cardsField.className = `game ${lvl}`;
  };

  renderCards(difficulty) {
    switch (difficulty) {
      case 1 :
        this.generateCards(3, 'easy');
        break;

      case 2 :
        this.generateCards(6, 'medium');
        break;

      case 3 :
        this.generateCards(10, 'hard');
        break;
    }
  };
};

// const rotate = function(card) {
//   card.classList.add('rotate');
//   setTimeout(function () {
//     let isBug = !!(card.getAttribute('isbug'));
//   if (isBug) {
//     card.style.backgroundImage = "url(./img/bugCard.png)"
//   } else {
//     card.style.backgroundImage = "url(./img/emptyCard.png)"
//   }
//   card.classList.remove('rotate');
//   }, 800);
// };

const cards = new Card();

easyBtn.addEventListener('click', () => {
  difficulty = 1;
  easyBtn.classList.add('selected');
  mediumBtn.classList.remove('selected');
  hardBtn.classList.remove('selected');
});

mediumBtn.addEventListener('click', () => {
  difficulty = 2;
  mediumBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  hardBtn.classList.remove('selected');
});

hardBtn.addEventListener('click', () => {
  difficulty = 3;
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  mediumBtn.classList.remove('selected');
});

startBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  cards.renderCards(difficulty);
  renderedCards = document.querySelectorAll('.card');
  for (let i = 2; i < renderedCards.length; i++) {  //counter starts from 2 because we have 2 cards on start screen
    renderedCards[i].addEventListener('click', function() {
      renderedCards[i].classList.add('rotate');
      renderedCards[i].addEventListener('click', function () {
        cardsField.innerHTML = '';
        cardsField.className = ''
        menu.classList.remove('hidden');
      });
    });
  };
});
