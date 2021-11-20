'use strict';

// let closedBook = document.querySelector('#closed-book');
// let openjack = document.querySelector('#open-jack');
// let openbox = document.querySelector('#open-box');
// let balloonOne = document.querySelector('#balloonOne');
// let balloonTwo = document.querySelector('#balloonTwo');
// let balloonThree = document.querySelector('#balloonThree');

// let dbtwo = [
//   {
//     question: `In reply to an inquiry about the animals on his farm, the farmer says: “I only ever keep sheep, goats, and horses. In fact, at the moment they are all sheep bar three, all goats bar four, and all horses bar five.” How many goats does he have?`
//     , answer: 2
//   }
//   , {
//     question: `If a hen and a half lay an egg and a half in a day and a half, how many eggs will half a dozen hens lay in half a dozen days?`
//     , answer: 24
//   }
//   , {
//     question: `My twin lives at the reverse of my house number. The difference between our house numbers ends in two. What are the lowest possible numbers of our house numbers?`
//     , answer: 72
//   }
//   , {
//     question: `I have a calculator that can display ten digits. How many different ten-digit numbers can I type using just the 0-9 keys once each, and moving from one keypress to the next using the knight’s move in chess?`
//     , answer: 4
//   }
//   , {
//     question: `A grandfather, two fathers and two sons went to the movie theater together and everyone bought one movie ticket each. How many tickets did they buy in total?`
//     , answer: 3
//   }
//   , {
//     question: `A duck was given $9, a spider was given $36, a bee was given $27. Based off of this information, how much money would be given to a cat?`
//     , answer: 18
//   }
// ];

// console.log(dbtwo);

// function renderPassword(password) {
//   let pPassword = document.createElement('p');
//   pPassword.textContent = password;
//   balloonOne.appendChild(pPassword);
// }

// function renderPasswordTwo(password) {
//   let pPassword = document.createElement('p');
//   pPassword.textContent = password;
//   balloonTwo.appendChild(pPassword);
// }

// function renderPasswordThree(password) {
//   let pPassword = document.createElement('p');
//   pPassword.textContent = password;
//   balloonThree.appendChild(pPassword);
// }

// function bookPuzzle(event) {
//   let randomNum = Math.floor(Math.random() * dbtwo.length);
//   let randomQuestion = dbtwo[randomNum].question;
//   let bookPuzzleAnswer = prompt(randomQuestion);
//   console.log(bookPuzzleAnswer);
//   if (parseInt(bookPuzzleAnswer) === dbtwo[randomNum].answer) {
//     renderPassword(bookPuzzleAnswer);
//     event.target.removeEventListener('click', bookPuzzle);
//   } else {
//     alert('you guessed wrong');
//   }
// }

// function jackPuzzle(event) {
//   let randomNum = Math.floor(Math.random() * dbtwo.length);
//   let randomQuestion = dbtwo[randomNum].question;
//   let jackPuzzleAnswer = prompt(randomQuestion);
//   console.log(jackPuzzleAnswer);
//   if (parseInt(jackPuzzleAnswer) === dbtwo[randomNum].answer) {
//     renderPasswordTwo(jackPuzzleAnswer);
//     event.target.removeEventListener('click', jackPuzzle);
//   } else {
//     alert('you guessed wrong');
//   }
// }

// function boxPuzzle(event) {
//   let randomNum = Math.floor(Math.random() * dbtwo.length);
//   let randomQuestion = dbtwo[randomNum].question;
//   let boxPuzzleAnswer = prompt(randomQuestion);
//   console.log(boxPuzzleAnswer);
//   if (parseInt(boxPuzzleAnswer) === dbtwo[randomNum].answer) {
//     renderPasswordThree(boxPuzzleAnswer);
//     event.target.removeEventListener('click', boxPuzzle);
//   } else {
//     alert('you guessed wrong');
//   }
// }

// closedBook.addEventListener('click', bookPuzzle);
// openbox.addEventListener('click', boxPuzzle);
// openjack.addEventListener('click', jackPuzzle);


let gameRoom = document.querySelector('.game-room');
let entry = document.querySelector('.entry');
let hall = document.querySelector('.hall');
let sarco = document.querySelector('.sarco');
let stairs = document.querySelector('.stairs');

function entrySwitch() {
  gameRoom.style.background = "url('imgs/entry.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '1s';
}

function hallSwitch() {
  gameRoom.style.background = "url('imgs/hall.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '1s';
}

function sarcoSwitch() {
  gameRoom.style.background = "url('imgs/sarcophagus.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '1s';
}

function stairsSwitch() {
  gameRoom.style.background = "url('imgs/stairs.jpg')";
  gameRoom.style.backgroundSize = 'cover';
  gameRoom.style.transitionDuration = '1s';
}

entry.addEventListener('click', entrySwitch);
hall.addEventListener('click', hallSwitch);
sarco.addEventListener('click', sarcoSwitch);
stairs.addEventListener('click', stairsSwitch);


let timeInSecs;
let ticker;
let h1 = document.querySelector;



