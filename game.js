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
//     question: `I’m tall when I’m young, and I’m short when I’m old. What am I?`
//     , answer: candle
//   }
//   , {
//     question: `I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?`
//     , answer: shadow
//   }
//   , {
//     question: `What has one eye, but can’t see?`
//     , answer: needle
//   }
//   , {
//     question: `What has a head and a tail but no body?`
//     , answer: coin
//   }
//   , {
//     question: `What begins with an “e” and only contains one letter?`
//     , answer: envelope
//   }
//   , {
//     question: `A word I know, six letters it contains, remove one letter and 12 remains. What is it?`
//     , answer: Dozens
//   }
//   , {
//     question: `Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?`
//     , answer: R
//   }
//   , {
//     question: `What begins with T, ends with T, and is full of T?`
//     , answer: Teapot
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



