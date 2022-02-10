const url = `https://scoreboard-ed666-default-rtdb.europe-west1.firebasedatabase.app/.json`;

const username = document.querySelector('.userName');
const addButton = document.querySelector('.addButton');
const playerName = document.querySelector('.playerName');

let userInput = '';
addButton.addEventListener('click', function(event){
    userInput = username.value;
    console.log(userInput);
    playerName.innerText = userInput;
    event.preventDefault();
});

const computerChoice = document.querySelector('.computerChoice');
function computerRandomChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    console.log('computerRandomChoice return: ', randomNumber);
    return randomNumber;
}

const stone = document.querySelector('.stone');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');
const userParagrafScore = document.querySelector('.userScore');
let computerScore = document.querySelector('.computerScore');
let userPicChoice = document.querySelector('.userPicChoice');
let computerPicChoice = document.querySelector('.computerPicChoice');


let userChoice = document.querySelector('pictureOfChoice');
let userScore = 0;

stone.addEventListener('click', function(event){
    userPicChoice.src = 'img/sten.png';
    let randomNumber = computerRandomChoice();
    if(randomNumber === 1){
        userScore++;
        computerPicChoice.src = 'img/sax2.png';
    }else if(randomNumber === 2){
        computerPicChoice.src = 'img/papper1.png';
        computerScore.innerText = 'Spelet slut, försök igen';
    }else {
        computerPicChoice.src = 'img/sten.png';
    }
    userParagrafScore.innerText = userScore;
})

scissor.addEventListener('click', function(event){
    userPicChoice.src = 'img/sax2.png';
    let randomNumber = computerRandomChoice();
    if(randomNumber === 2){
        userScore++;
        computerPicChoice.src = 'img/papper1.png';
    }else if(randomNumber === 0){
        computerPicChoice.src = 'img/sten.png';
        computerScore.innerText = 'Spelet slut, försök igen';
    }else{
        computerPicChoice.src = 'img/sax2.png';
    }
    userParagrafScore.innerText = userScore;

})

paper.addEventListener('click', function(event){
    userPicChoice.src = 'img/papper1.png';
    let randomNumber = computerRandomChoice();
    if(randomNumber === 0){
        userScore++;
        computerPicChoice.src = 'img/sten.png';
    }else if(randomNumber === 1){
        computerPicChoice.src = 'img/sax2.png';
        computerScore.innerText = 'Spelet slut, försök igen';
    }else{
        computerPicChoice.src = 'img/papper1.png';
    }
    userParagrafScore.innerText = userScore;

})