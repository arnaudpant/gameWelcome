/* ******* TP Jeux Welcome *********

But: Faire apparaitre les cartes pour une partie avec feuille de marque papier

===============================================
Algorythme
===============================================
X> Mettre toutes cartes dans des Array:
- 81 cartes travaux (2 faces):
  * 3x [1, 2, 14, 15]
  * 4x [3, 13]
  * 5x [4, 12]
  * 6x [5, 11]
  * 7x [6, 10]
  * 8x [7, 9]
  * 9x [8]
  Verso:
  * Piscine [9]
  * Barrière (géometre) [18] 
  * Paysagiste [18]
  * Agence d'interim [9]
  * Agent immobilier [18]
  * Bis [9]
  
- 29 cartes Plans (3x 6 = 18)

*/
// =======================================
// INITIALISATION
// =======================================
const arrayCardTravaux = [
  [1, 'géometre'], [1, 'bis'], [1, 'bis'],
  [2, 'paysagiste'], [2, 'géometre'], [2, 'immobilier'],
  [14, 'piscine'], [14, 'interim'], [14, 'géometre'],
  [15, 'immobilier'], [15, 'paysagiste'], [15, 'interim'],
  [3, 'immobilier'], [3, 'géometre'], [3, 'piscine'],[3, 'paysagiste'],
  [13, 'immobilier'], [13, 'paysagiste'], [13, 'immobilier'],[13, 'géometre'],
  [4, 'paysagiste'], [4, 'bis'], [4, 'géometre'],[4, 'immobilier'],[4, 'interim'],
  [12, 'paysagiste'], [12, 'bis'], [12, 'immobilier'],[12, 'paysagiste'],[12, 'interim'],
  [5, 'bis'], [5, 'paysagiste'], [5, 'piscine'],[5, 'paysagiste'],[5, 'géometre'],[5, 'interim'],
  [11, 'immobilier'], [11, 'piscine'], [11, 'immobilier'],[11, 'géometre'],[11, 'paysagiste'],[11, 'géometre'],
  [6, 'géometre'], [6, 'paysagiste'], [6, 'immobilier'],[6, 'piscine'],[6, 'géometre'],[6, 'paysagiste'],[6, 'immobilier'],
  [10, 'interim'], [10, 'piscine'], [10, 'géometre'],[10, 'géometre'],[10, 'immobilier'],[10, 'immobilier'],[10, 'immobilier'],
  [7, 'interim'], [7, 'géometre'], [7, 'paysagiste'],[7, 'bis'],[7, 'bis'],[7, 'géometre'],[7, 'paysagiste'],[7, 'immobilier'],
  [9, 'immobilier'], [9, 'géometre'], [9, 'géometre'],[9, 'paysagiste'],[9, 'paysagiste'],[9, 'interim'],[9, 'immobilier'],[9, 'piscine'],
  [8, 'immobilier'], [8, 'bis'], [8, 'piscine'],[8, 'bis'],[8, 'interim'],[8, 'piscine'],[8, 'paysagiste'],[8, 'géometre'],[8, 'paysagiste']
]

const arrayCardPlan1 = [
  [[6, 6], 10, 6],
  [[5, 5], 8, 4],
  [[1, 1, 1, 1, 1, 1], 8, 4],
  [[2, 2, 2, 2], 8, 4],
  [[4, 4], 6, 3]
];

const arrayCardPlan2 = [
  [[4, 1, 1], 9, 5],
  [[3, 3, 4], 12, 7],
  [[3, 6], 8, 4],
  [[4, 5], 9, 5],
  [[1, 1, 6], 11, 6]
];

const arrayCardPlan3 = [
  [[2, 5], 7, 3],
  [[1, 4, 5], 13, 7],
  [[3, 4], 7, 3],
  [[1, 2, 6], 12, 7]
];

// =======================================
// Elt
// =======================================
const startBtnElt = document.querySelector('.navbar__start');
const testBtnElt = document.querySelector('.navbar__chrono');

let card1NumberElt = document.querySelector('.card1-face__number');
let card1ActionElt = document.querySelector('.card1__action');
let card1CoinElt = document.querySelector('.card1__number__next');

let card2NumberElt = document.querySelector('.card2__number');
let card2ActionElt = document.querySelector('.card2__action');

let card3NumberElt = document.querySelector('.card3__number');
let card3ActionElt = document.querySelector('.card3__action');

let btnPrevElt = document.querySelector('.btn-prev');
let btnNextElt = document.querySelector('.btn-next');

// =======================================
// EventListener
// =======================================
startBtnElt.addEventListener('click', startNewGame);
testBtnElt.addEventListener('click', testFunction);
btnPrevElt.addEventListener('click', prevCard);
btnNextElt.addEventListener('click', nextCard);


// =======================================
// Variables
// =======================================
let numberTour = 0;
let arrayPlayCardTravaux = [];
let arrayPlayCardPlan1 = [];
let arrayPlayCardPlan2 = [];
let arrayPlayCardPlan3 = [];


// =======================================
//  ****** Functions ******
// =======================================

// Début de partie
function startNewGame () {
  arrayPlayCardTravaux = arrayCardTravaux.slice();
  melangeArray(arrayPlayCardTravaux);
  
  arrayPlayCardPlan1 = arrayCardPlan1.slice();
  melangeArray(arrayPlayCardPlan1);
  
  arrayPlayCardPlan2 = arrayCardPlan2.slice();
  melangeArray(arrayPlayCardPlan2);
  
  arrayPlayCardPlan3 = arrayCardPlan3.slice();
  melangeArray(arrayPlayCardPlan3);
  
  affichageCardsTravaux();
}


function melangeArray(array) {
 
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
   }
  return array;
}


// Changement de cartes
function nextCard(){
  numberTour++;
  affichageCardsTravaux();
  return numberTour
}

function prevCard(){
  numberTour--;
  affichageCardsTravaux();
  return numberTour
}




function affichageCardsTravaux(){
//   Card 1
  card1NumberElt.innerText = arrayPlayCardTravaux[numberTour][0];
  affichageDosCardTravaux(arrayPlayCardTravaux[numberTour][1], card1ActionElt);
  
//  Card 2 
  card2NumberElt.innerText = arrayPlayCardTravaux[numberTour + 27][0];
  affichageDosCardTravaux(arrayPlayCardTravaux[numberTour + 27][1], card2ActionElt);
  
//  Card 3 
  card3NumberElt.innerText = arrayPlayCardTravaux[numberTour + 54][0];
  affichageDosCardTravaux(arrayPlayCardTravaux[numberTour + 54][1], card3ActionElt);
}




function affichageDosCardTravaux(numberCardDos, cardXActionElt) {
  switch (numberCardDos) {
    case 'géometre': 
      cardXActionElt.innerHTML = 'GEOMETRE';
      break;
      
     case 'bis': 
      cardXActionElt.innerHTML = 'BIS';
      break;
      
      case 'paysagiste': 
      cardXActionElt.innerHTML = 'PAYSAGISTE';
      break;
      
      case 'immobilier': 
      cardXActionElt.innerHTML = 'IMMOBILIER';
      break;
      
      case 'piscine': 
      cardXActionElt.innerHTML = 'PISCINE';
      break;
      
      case 'interim': 
      cardXActionElt.innerHTML = 'INTERIM';
      break;
      
  }
 }