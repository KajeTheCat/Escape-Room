'use strict';
let symbol = document.querySelector('#symbols');
let pyramidOne = document.querySelector('#pyramidOne');
let pyramidTwo = document.querySelector('#pyramidTwo');
let pyramidThree = document.querySelector('#pyramidThree');
let pyramidFour = document.querySelector('#pyramidFour');
let tbody = document.querySelector('tbody');
let winnerDiv = document.querySelector('.winner-div');
let victorsDiv = document.querySelector('.victorsDiv');
let loserDiv = document.querySelector('.loserDiv');
let roomName = document.querySelector('#room-name');
let form = document.querySelector('form');
let gameLevels = document.querySelector('.game-levels');
let mainContainer = document.querySelectorAll('.maincontainer');
let easyButton = document.querySelector('#easy-button');
let mediumButton = document.querySelector('#medium-button');
let hardButton = document.querySelector('#hard-button');
let userName = '';
let userTimeScore = '';
let time = '';
let gamePlayerArr = JSON.parse(localStorage.getItem('victors')) || [];

function GamePlayer(name, userTimeScore) {
  this.name = name;
  this.userTimeScore = userTimeScore;
  gamePlayerArr.push(this);
}

function saveGameFile() {
  let stringifiedArr = JSON.stringify(gamePlayerArr);
  localStorage.setItem('victors', stringifiedArr);
}

function instantiateGamePlayer(name, userTimeScore) {
  new GamePlayer(name, userTimeScore);
  saveGameFile();
}

let questionDb = [
  {
    question: 'In reply to an inquiry about the animals on his farm, the farmer says: “I only ever keep sheep, goats, and horses. In fact, at the moment they are all sheep bar three, all goats bar four, and all horses bar five.” How many goats does he have?'
    , answer: '2'
  }
  , {
    question: 'If a hen and a half lay an egg and a half in a day and a half, how many eggs will half a dozen hens lay in half a dozen days?'
    , answer: '24'
  }
  , {
    question: 'My twin lives at the reverse of my house number. The difference between our house numbers ends in two. What are the lowest possible numbers of our house numbers?'
    , answer: '72'
  }
  , {
    question: 'I have a calculator that can display ten digits. How many different ten-digit numbers can I type using just the 0-9 keys once each, and moving from one keypress to the next using the knight’s move in chess?'
    , answer: '4'
  }
  , {
    question: 'A grandfather, two fathers and two sons went to the movie theater together and everyone bought one movie ticket each. How many tickets did they buy in total?'
    , answer: '3'
  }
  , {
    question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?'
    , answer: 'Candle'
  }
  , {
    question: 'I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?'
    , answer: 'Shadow'
  }
  , {
    question: 'What has one eye, but can’t see?'
    , answer: 'Needle'
  }
  , {
    question: 'What has a head and a tail but no body?'
    , answer: 'Coin'
  }
  , {
    question: 'What begins with an “e” and only contains one letter?'
    , answer: 'Envelope'
  }
  , {
    question: 'A word I know, six letters it contains, remove one letter and 12 remains. What is it?'
    , answer: 'Dozens'
  }
  , {
    question: 'Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?'
    , answer: 'R'
  }
  , {
    question: 'What five-letter word becomes shorter when you add two letters to it?'
    , answer: 'Short'
  }
  , {
    question: 'I am the beginning of everything, the end of everywhere. I’m the beginning of eternity, the end of time and space. What am I?'
    , answer: 'e'
  }
  , {
    question: 'What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?'
    , answer: 'noon'
  }
  , {
    question: 'What is the end of everything?'
    , answer: 'g'
  }
  , {
    question: 'What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?'
    , answer: 'river'
  }
  , {
    question: 'If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?'
    , answer: 'mirror'
  }
  , {
    question: 'I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?'
    , answer: 'key'
  }
];

function renderVictors() {
  for (let i = 0; i < gamePlayerArr.length; i++) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.textContent = gamePlayerArr[i].name;
    let tdTime = document.createElement('td');
    tdTime.textContent = gamePlayerArr[i].userTimeScore;
    tr.append(tdName, tdTime);
    tbody.appendChild(tr);
  }
}

function victory() {
  userTimeScore = time;
  instantiateGamePlayer(userName, userTimeScore);
  clearInterval(ticker);
  victorsDiv.style.visibility = 'visible';
  renderVictors();
}

function submitName(event) {
  event.preventDefault();
  userName = event.target.name.value;
  console.log(userName);
  winnerDiv.style.display = 'none';
  victory();
}

function winner() {
  winnerDiv.style.display = 'flex';
  form.addEventListener('submit', submitName);
}

function renderGreenLight() {
  if (correctAnswerCounter == 4) {
    pyramidFour.style.color = '#34eb7a';
    winner();
  } else if (correctAnswerCounter == 3) {
    pyramidThree.style.color = '#34eb7a';
  } else if (correctAnswerCounter == 2) {
    pyramidTwo.style.color = '#34eb7a';
  } else if (correctAnswerCounter == 1) {
    pyramidOne.style.color = '#34eb7a';
  }
}

let correctAnswerCounter = 0;

function symbolPuzzle(event) {
  let randomNum = Math.floor(Math.random() * questionDb.length);
  let randomQuestion = questionDb[randomNum].question;
  let symbolPuzzleAnswer = prompt(randomQuestion);
  let symbolPuzzleCorrectAnswer = questionDb[randomNum].answer;
  if (symbolPuzzleAnswer.toLowerCase() === symbolPuzzleCorrectAnswer.toLowerCase()) {
    correctAnswerCounter++;
    renderGreenLight();
    if (correctAnswerCounter >= 4) {
      event.target.removeEventListener('click', symbolPuzzle);
    }
  } else {
    alert('you guessed wrong');
  }
}

symbol.addEventListener('click', symbolPuzzle);

let symbolImages = [
  'imgs/symbolThree.png',
  'imgs/symbolFour.png',
  'imgs/symbolFive.png',
  'imgs/symbolSix.png',
  'imgs/symbolSeven.png'
];

let gameRoom = document.querySelector('.game-room');
let entry = document.querySelector('.entry');
let hall = document.querySelector('.hall');
let sarco = document.querySelector('.sarco');
let stairs = document.querySelector('.stairs');

function entrySwitch() {
  roomName.textContent = 'Door of Osiris';
  gameRoom.style.background = "url('imgs/entry.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '0.5s';
  renderSymbols();
}

function hallSwitch() {
  roomName.textContent = 'Ra\'s Den';
  gameRoom.style.background = "url('imgs/hall.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '0.5s';
  renderSymbols();
}

function sarcoSwitch() {
  roomName.textContent = 'Ramses\' Tomb';
  gameRoom.style.background = "url('imgs/sarco.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '0.5s';
  renderSymbols();
}

function stairsSwitch() {
  roomName.textContent = 'Hall of Tut';
  gameRoom.style.background = "url('imgs/stairs.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '1s';
  renderSymbols();
}

window.onload = renderSymbols();

entry.addEventListener('click', entrySwitch);
hall.addEventListener('click', hallSwitch);
sarco.addEventListener('click', sarcoSwitch);
stairs.addEventListener('click', stairsSwitch);


let timeInSecs;
let ticker;
function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval('tick()', 1000);
}

function gameOver() {
  loserDiv.style.display = 'flex';
}

function tick() {
  let secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  } else {
    clearInterval(ticker);
  }
  let mins = Math.floor(secs / 60);
  secs %= 60;
  time = ((mins < 10) ? '0' : '') + mins + ':' + ((secs < 10) ? '0' : '') + secs;
  if (time.toString() === '00:00') {
    gameOver();
  }
  let countdown = document.querySelector('#countdown');
  countdown.textContent = time;
}

function renderSymbols() {
  let img = document.querySelector('#symbols');
  let randomNum = Math.floor(Math.random() * symbolImages.length);
  img.src = symbolImages[randomNum];
  let xPos = Math.floor((Math.random() * 1100) + 100);
  let yPos = Math.floor((Math.random() * 430) + 310);
  img.style.top = yPos + 'px';
  img.style.left = xPos + 'px';
}

(function (global) {

  if (typeof (global) === 'undefined') {
    throw new Error('window is undefined');
  }

  let _hash = '!';
  let noBackPlease = function () {
    global.location.href += '#';
    global.setTimeout(function () {
      global.location.href += '!';
    }, 50);
  };

  global.onhashchange = function () {
    if (global.location.hash !== _hash) {
      global.location.hash = _hash;
    }
  };

  global.onload = function () {
    noBackPlease();
  };
})(window);

easyButton.addEventListener('click', easy);
mediumButton.addEventListener('click', medium);
hardButton.addEventListener('click', hard);


function easy() {
  startTimer(300);
  gameLevels.style.visibility = 'hidden';
  mainContainer[0].style.visibility = 'hidden';
  mainContainer[1].style.visibility = 'hidden';
  mainContainer[2].style.visibility = 'hidden';
}

function medium() {
  startTimer(180);
  gameLevels.style.visibility = 'hidden';
  mainContainer[0].style.visibility = 'hidden';
  mainContainer[1].style.visibility = 'hidden';
  mainContainer[2].style.visibility = 'hidden';
}

function hard() {
  startTimer(12);
  gameLevels.style.visibility = 'hidden';
  mainContainer[0].style.visibility = 'hidden';
  mainContainer[1].style.visibility = 'hidden';
  mainContainer[2].style.visibility = 'hidden';
}



