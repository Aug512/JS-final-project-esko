const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');
const startBtn = document.getElementById('start');
const backBtn = document.getElementById('back');
const menu = document.getElementById('menu');
const cardsField = document.getElementById('game');

let difficulty = 1;
let bugCard = 0;

class Card {
  renderCard(isBug) {
    const card = document.createElement('div');
    card.classList.add('card');
    if (isBug) {
      card.setAttribute('isBug', 'true');
    };
    cardsField.append(card);
  };

  renderCards(difficulty) {
    switch (difficulty) {
      case 1 :
        bugCard = Math.floor(Math.random() * 3);
        for (let i = 0; i < 3; i++) {
          if (i === bugCard) {
            this.renderCard(true);
          } else {
            this.renderCard(false);
          };
        }
        cardsField.className = 'game easy';

        break;
      case 2 :
        bugCard = Math.floor(Math.random() * 6);
        for (let i = 0; i < 6; i++) {
          if (i === bugCard) {
            this.renderCard(true);
          } else {
            this.renderCard(false);
          };
        }
        cardsField.className = 'game medium';

        break;
      case 3 :
        bugCard = Math.floor(Math.random() * 10);
        for (let i = 0; i < 10; i++) {
          if (i === bugCard) {
            this.renderCard(true);
          } else {
            this.renderCard(false);
          };
        }
        cardsField.className = 'game hard';

        break;
    }
  };

  // rotate() {
  //   this.style.transform = "scale(0)";
  //   let isBug = this.data.isBug;
  //   if (isBug) {
  //     this.style.backgroundImage = "url(/img/bugCard.png)"
  //   } else {
  //     this.style.backgroundImage = "url(/img/emptyCard.png)"
  //   }
  //   this.style.transform = "scale(1)";
  // };
};

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
  backBtn.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  cardsField.innerHTML = '';
  cardsField.className = ''
  menu.classList.remove('hidden');
  backBtn.classList.add('hidden');
})

