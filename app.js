'use strict';
console.log('hey');

let instructionNav = document.querySelector('#instruction-nav');
let section = document.querySelector('section');
let mainPageDiv = document.querySelector('.main-page-body');
let sectionP = document.querySelector('section p');
let imgTreasure = document.querySelector('#treasure');
let body = document.querySelector('body');
console.log(imgTreasure);

function displayNav() {
    section.classList.toggle('section-after');
    mainPageDiv.classList.toggle('main-page-body-after');
    sectionP.classList.toggle('pAfter');
    imgTreasure.classList.toggle('treasure');
    body.classList.toggle('body-after');
}

instructionNav.addEventListener('click', displayNav);
