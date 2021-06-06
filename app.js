/*

******* TP Jeux Welcome *******

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
  [[4, 4], 6, 3],
  [[3, 3, 3], 8, 4],
  [["Full rue 1"], 6, 3],
  [["Full rue 2"], 6, 3],
  [["Full rue 3"], 6, 3],
  [["First + last house toutes les rues"], 7, 4],
  [["7 interimaires"], 6, 3],
  [["5 bis dans une rue"], 8, 3]
];

const arrayCardPlan2 = [
  [[4, 1, 1], 9, 5],
  [[3, 3, 4], 12, 7],
  [[3, 6], 8, 4],
  [[4, 5], 9, 5],
  [[1, 1, 6], 11, 6],
  [["All parcs + piscine rue n°1"], 8, 3],
  [["All parcs + piscine rue n°2"], 8, 3],
  [["All parcs + piscine rue n°3"], 8, 3],
  [["All parcs OU piscine ds 2 rues"], 7, 4]
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
const startBtnElt = document.querySelector('.navbar__btn-start');
const soloBtnElt = document.querySelector('.navbar__btn-solo');

let card1NumberElt = document.querySelector('.face1--number');
let card1ActionElt = document.querySelector('.card-travaux--dos1');
let card1CoinElt = document.querySelector('.face1--logo-next');

let card2NumberElt = document.querySelector('.face2--number');
let card2ActionElt = document.querySelector('.card-travaux--dos2');
let card2CoinElt = document.querySelector('.face2--logo-next');

let card3NumberElt = document.querySelector('.face3--number');
let card3ActionElt = document.querySelector('.card-travaux--dos3');
let card3CoinElt = document.querySelector('.face3--logo-next');

let cardPElt = document.querySelectorAll('.cardP');
let cardPlanBox1 = document.querySelector('.card-plan1');
let cardPlanBox2 = document.querySelector('.card-plan2');
let cardPlanBox3 = document.querySelector('.card-plan3');

let cardPlanPoint11 = document.querySelector('.card-plan1--point11');
let cardPlanPoint12 = document.querySelector('.card-plan1--point12');
let cardPlanPoint21 = document.querySelector('.card-plan2--point21');
let cardPlanPoint22 = document.querySelector('.card-plan2--point22');
let cardPlanPoint31 = document.querySelector('.card-plan3--point31');
let cardPlanPoint32 = document.querySelector('.card-plan3--point32');

let btnPrevElt = document.querySelector('.box-btn__prev');
let btnNextElt = document.querySelector('.box-btn__next');

let btnCompteur = document.querySelector('.box-btn__compteur');


// =======================================
// EventListener
// =======================================
startBtnElt.addEventListener('click', startNewGame);
soloBtnElt.addEventListener('click', startSoloGame);
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
let soloNbr = 42 + Math.floor(Math.random() * 39);
let partieSolo = false;


// =======================================
//  ****** Functions ******
// =======================================


// +++ Clic sur Start +++

function startNewGame() {
  arrayPlayCardTravaux = arrayCardTravaux.slice();
  melangeArray(arrayPlayCardTravaux);
  
  arrayPlayCardPlan1 = arrayCardPlan1.slice();
  melangeArray(arrayPlayCardPlan1);
  
  arrayPlayCardPlan2 = arrayCardPlan2.slice();
  melangeArray(arrayPlayCardPlan2);
  
  arrayPlayCardPlan3 = arrayCardPlan3.slice();
  melangeArray(arrayPlayCardPlan3);

  startBtnElt.style.display = 'none';
  soloBtnElt.style.display = 'block';
  
  affichageCardsTravaux();
  affichageCardsPlan();
  affichageNumberCard();
}

function continueGame() {
  arrayPlayCardTravaux = arrayCardTravaux.slice();
  melangeArray(arrayPlayCardTravaux);
  
  arrayPlayCardPlan1 = arrayCardPlan1.slice();
  melangeArray(arrayPlayCardPlan1);
  
  arrayPlayCardPlan2 = arrayCardPlan2.slice();
  melangeArray(arrayPlayCardPlan2);
  
  arrayPlayCardPlan3 = arrayCardPlan3.slice();
  melangeArray(arrayPlayCardPlan3);

  affichageCardsTravaux();
  affichageNumberCard();
}


function melangeArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
   }
  return array;
}





// +++ Partie Solo +++

function startSoloGame() {
  arrayPlayCardTravaux.splice(soloNbr, 0, ["Solo", 'géometre']);
  partieSolo = true;
  soloBtnElt.style.background = '#F5DEA3';
  soloBtnElt.style.color = '#000';
}





// +++ Cartes plans +++

function affichageCardsPlan() {
  cardPlanBox1.innerText = arrayPlayCardPlan1[0][0].join('-');
  cardPlanBox2.innerText = arrayPlayCardPlan2[0][0].join('-');
  cardPlanBox3.innerText = arrayPlayCardPlan3[0][0].join('-');
  affichageCardsPlanPoint()
}

function affichageCardsPlanPoint() {
  cardPlanPoint11.innerText = arrayPlayCardPlan1[0][1];
  cardPlanPoint11.style.background = '#584B37';
  cardPlanPoint12.innerText = arrayPlayCardPlan1[0][2];
  cardPlanPoint12.style.background = '#c7bb91';

  cardPlanPoint21.innerText = arrayPlayCardPlan2[0][1];
  cardPlanPoint21.style.background = '#584B37';
  cardPlanPoint22.innerText = arrayPlayCardPlan2[0][2];
  cardPlanPoint22.style.background = '#c7bb91';

  cardPlanPoint31.innerText = arrayPlayCardPlan3[0][1];
  cardPlanPoint31.style.background = '#584B37';
  cardPlanPoint32.innerText = arrayPlayCardPlan3[0][2];
  cardPlanPoint32.style.background = '#c7bb91';
}

// Clic sur cartes plan

cardPElt.forEach(element => {
  element.addEventListener('click', () => {
    cardPReturn(element)
  })
})

function cardPReturn(a) {
  a.childNodes[3].style.display = 'none';
}





// +++ Changement de cartes +++
function nextCard() {
  if (numberTour > 72 && !partieSolo) {
    numberTour = 0;
    continueGame();

  } else {
    numberTour = numberTour + 3;
  }
  console.log(numberTour);
  affichageCardsTravaux();
  affichageNumberCard();
  return numberTour
}

function prevCard() {
  if (numberTour >= 3) {
    numberTour = numberTour - 3;
  affichageCardsTravaux();
  affichageNumberCard()
  return numberTour
  } else {
    return 
  }
  
}

function affichageNumberCard() {
  btnCompteur.innerText = numberTour + 3;
}





// +++ Affichage des cartes number +++

function affichageCardsTravaux() {
  
  if (partieSolo) {
    if (arrayPlayCardTravaux[numberTour][0] == "Solo" || arrayPlayCardTravaux[numberTour + 1][0] == "Solo" || arrayPlayCardTravaux[numberTour + 2][0] == "Solo") {
      card1NumberElt.style.fontSize = "60px";
      card2NumberElt.style.fontSize = "60px";
      card3NumberElt.style.fontSize = "60px";

      cardPlanPoint11.style.display = 'none';
      cardPlanPoint21.style.display = 'none';
      cardPlanPoint31.style.display = 'none';
    }
    if (numberTour === 78) {
      alert("Fin de partie");
    }
  }

//   Card 1
  card1NumberElt.innerText = arrayPlayCardTravaux[numberTour][0];
  affichageDosCardTravaux(arrayPlayCardTravaux[numberTour][1], card1ActionElt);
  
  affichageCardTravauxLittleLogo(arrayPlayCardTravaux[numberTour + 3][1], card1CoinElt);
    
//  Card 2 
  card2NumberElt.innerText = arrayPlayCardTravaux[numberTour + 1][0];
  affichageDosCardTravaux(arrayPlayCardTravaux[numberTour + 1][1], card2ActionElt);

  affichageCardTravauxLittleLogo(arrayPlayCardTravaux[numberTour + 4][1], card2CoinElt);
  
//  Card 3 
  card3NumberElt.innerText = arrayPlayCardTravaux[numberTour + 2][0];
  affichageDosCardTravaux(arrayPlayCardTravaux[numberTour + 2][1], card3ActionElt);

  affichageCardTravauxLittleLogo(arrayPlayCardTravaux[numberTour + 5][1], card3CoinElt);
}





// +++ Affichage des cartes travaux +++

function affichageDosCardTravaux(numberCardDos, cardXActionElt) {
  switch (numberCardDos) {
    case 'géometre': 
      cardXActionElt.innerHTML = '<img src="images/card-geometre.svg" alt="geometre">';
      break;
      
     case 'bis': 
      cardXActionElt.innerHTML = '<img src="images/card-bis.svg" alt="bis">';
      break;
      
      case 'paysagiste': 
      cardXActionElt.innerHTML = '<img src="images/card-paysagiste.svg" alt="paysagiste">';
      break;
      
      case 'immobilier': 
      cardXActionElt.innerHTML = '<img src="images/card-immobilier.svg" alt="immobilier">';
      break;
      
      case 'piscine': 
      cardXActionElt.innerHTML = '<img src="images/card-piscine.svg" alt="piscine">';
      break;
      
      case 'interim': 
      cardXActionElt.innerHTML = '<img src="images/card-interim.svg" alt="interim">';
      break;
      
  }
}
 

function affichageCardTravauxLittleLogo(numberCardNumber, cardXNumberLogoElt) {
  switch (numberCardNumber) {
    case 'géometre': 
      cardXNumberLogoElt.innerHTML = '<img src="images/card-geometre.svg" alt="geometre">';
      break;
      
     case 'bis': 
      cardXNumberLogoElt.innerHTML = '<img src="images/card-bis.svg" alt="bis">';
      break;
      
      case 'paysagiste': 
      cardXNumberLogoElt.innerHTML = '<img src="images/card-paysagiste.svg" alt="paysagiste">';
      break;
      
      case 'immobilier': 
      cardXNumberLogoElt.innerHTML = '<img src="images/card-immobilier.svg" alt="immobilier">';
      break;
      
      case 'piscine': 
      cardXNumberLogoElt.innerHTML = '<img src="images/card-piscine.svg" alt="piscine">';
      break;
      
      case 'interim': 
      cardXNumberLogoElt.innerHTML = '<img src="images/card-interim.svg" alt="interim">';
      break;    
  }
 }
