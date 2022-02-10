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

