/* ---------- ALEKS' MEMORY GAME. Udacity FEND Project 3 ---------- */

/* ---------------------------------------------------------------- */

/* Array that holds all of the card classes */

let cardArray = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb' ];

/* ----------------------- Cards Shuffle ------------------------ */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/* ------------- Creating a list of cards with icons --------------- */

/* Select the ul .deck element */

const cardDeck = document.querySelector('.deck');

/* Declare empty list items and icon variables */

let listItem = ' ';
let cardItem = ' ';

/* Function that creates a list items and icons of a length of the cardArray and assign them classes */

function makeList() {
  for(let i = 0; i < cardArray.length; i++) {
    listItem = document.createElement('li');
    listItem.className = 'card';
    cardDeck.appendChild(listItem);

    cardItem = document.createElement('i');
    cardItem.className = 'fa';
    listItem.appendChild(cardItem);
  }
  let shuffledClasses = shuffle(cardArray);
  let cardItems = document.querySelectorAll('.card .fa');
  for (let j = 0; j < cardArray.length; j++) {
  cardItems[j].classList.add(shuffledClasses[j]);
  }
}

/* ----- Declaring variables for the game functions ------- */

let cardsOpen = [ ];
let clicks = 0;
let cardsMatched = 0;
let card = cardDeck.children;
let icon = card.firstChild;

/* ---- Adding classes to show the cards ---- */

function openCard() {
  card.className += ' open show';
  cardsOpen.push(card);
}

/* ---- Adding classes to the matched cards ---- */

function matchCard() {
  card.className += ' open match';
}

/* ---- Event listener for clicking the cards ---- */

cardDeck.addEventListener('click', game);

/* ---- Main game functions ---- */

function game(event) {

 card = event.target; //sets up card as the target of the click event

 if (card.classList.value === 'card open show'){
   return; // disable clicking the same card twice
 } else if (card.classList.value === 'card') {
      openCard(); // shows the card
    }
 }


/*
      let cardsOpened = [];
      cardsOpened.push(cardOpened);

      if (cardsOpened.length > 2) {
        cardOpened.className = 'card';

      } else if (cardOpened[0] === cardOpened[1]) {
        cardOpened.className = 'card open match';

      }
    }

  } );
}


/* ------------ Star ranking function ------- */


function showStars() {
if(clicks <= 20) {
  //show 3 stars
} else if (clicks > 20 && clicks < 28) {
    //show 2 stars
  } else {
    // show 1 star
  }
}


/* --------------- Start the Game ---------------- */

const startButton = document.getElementById('start');

startButton.addEventListener('click', startGame);
 // prevents creating multiple card decks

function startGame(){
makeList(); // puts shuffled cards on the table
game(); // responds to card clicks (game play)
// starts the timer
// counts the moves

}

/*

 If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)


 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)


 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
