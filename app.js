//https://github.com/SamiurRahmanMukul/building-javascript-7-games
//funcion para el reloj
var startTime = new Date();

function showTime(inicialTime){
  
  var nowTime = new Date();
  var outTime = (nowTime-inicialTime)/1000;
  return outTime  
  //document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
  
  }
  
  
  //setInterval(showTime(),1000);

window.onload = init;
function init(){
       
    
  }
document.addEventListener('DOMContentLoaded', () => { //evento que se dispara antes de cargar la pagina

    //document.getElementById("clock").innerHTML="00:00:00";
    
    
    //card options    
    const cardArray = [
      {      
        name: 'hotdog',
        img: 'images/hotdog.png'
      },   
      {      
        name: 'macri',
        img: 'images/macri.jpg'
      },   
      {      
        name: 'forniteLogo',
        img: 'images/forniteLogo.jpg'
      },
      {      
        name: 'hotdog',
        img: 'images/hotdog.png'
      },      
      {      
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },   
      {      
        name: 'macri',
        img: 'images/macri.jpg'
      },      
      {      
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },  
      {
        name: 'santi',
        img: 'images/santi.jpg'
      },
      {
        name: 'nerf',
        img: 'images/nerf.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'rocio',
        img: 'images/rocio.jpg'
      },
      {
        name: 'marco',
        img: 'images/marco.jpg'
      },
      {       
        name: 'forniteLogo',
        img: 'images/forniteLogo.jpg'
      },
      {
        name: 'santi',
        img: 'images/santi.jpg'
      },
      {
        name: 'nerf',
        img: 'images/nerf.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'rocio',
        img: 'images/rocio.jpg'
      },
      {
        name: 'marco',
        img: 'images/marco.jpg'
      }
    ]
    
    //cardArray.sort(() => 0.5 - Math.random());
    shuffle(cardArray);

    const grid = document.querySelector('.grid')
    //const resultDisplay = document.querySelector('#result')   
    var tries = 0; 
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/bg.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
        document.getElementById("message").innerHTML = 'Elegí dos cartas, tienen que coincidir!'
        document.getElementById("result").innerHTML = '0';
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        tries +=1;
        cards[optionOneId].setAttribute('src', 'images/bg.png')
        cards[optionTwoId].setAttribute('src', 'images/bg.png')
        document.getElementById("message").innerHTML = 'Elegiste dos veces la misma carta, huevón!! Ya vas ' + Math.round(showTime(startTime)) + ' segundos';
        
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        tries +=1;
        var audioYes = new Audio('sounds/yes.mp3');
        audioYes.play();
        document.getElementById("message").innerHTML = 'Encontraste una coincidencia! Aplausos, cara de cuis! Ya vas ' + Math.round(showTime(startTime)) + ' segundos';
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        tries +=1;
        var audioNo = new Audio('sounds/no.mp3');
        audioNo.play();
        cards[optionOneId].setAttribute('src', 'images/bg.png')
        cards[optionTwoId].setAttribute('src', 'images/bg.png')
        document.getElementById("message").innerHTML = ' No coinciden. A seguir intentando! Ya vas ' + Math.round(showTime(startTime)) + ' segundos';
        
      }
      document.getElementById("result").innerHTML = " " + tries;
      cardsChosen = []
      cardsChosenId = []
      //resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        var audio = new Audio('sounds/fin.mp3');
        audio.play();
        document.getElementById("message").innerHTML = ' Por fin, las encontraste a todas. Tardaste ' + Math.round(showTime(startTime)) + " segundos!";
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 400)
      }
    }
    //función más completa para random sorting del array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    createBoard()
    
  })