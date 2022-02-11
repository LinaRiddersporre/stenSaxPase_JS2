(function(){
    const scoreBoardUrl = `https://scoreboard-ed666-default-rtdb.europe-west1.firebasedatabase.app/.json`;

    document.querySelector('.addButton').addEventListener('click', function(event){
        userInput = document.querySelector('.userName').value;
        console.log(userInput);
        document.querySelector('.playerName').innerText = userInput;
        event.preventDefault();
    });

    function computerRandomChoice(){
        let randomNumber = Math.floor(Math.random()*3);
        console.log('computerRandomChoice return: ', randomNumber);
        return randomNumber;
    }

    let userScore = 0;

    document.querySelector('.stone').addEventListener('click', function(){
        document.querySelector('.userPicChoice').src = 'img/sten.png';
        let randomNumber = computerRandomChoice();
        if(randomNumber === 1){
            userScore++;
            document.querySelector('.computerPicChoice').src = 'img/sax2.png';
        }else if(randomNumber === 2){
            document.querySelector('.computerPicChoice').src = 'img/påse.png';
            document.querySelector('.computerScore').innerText = 'Spelet slut, försök igen';
        }else {
            document.querySelector('.computerPicChoice').src = 'img/sten.png';
        }
        document.querySelector('.userScore').innerText = userScore;
    })

    document.querySelector('.scissor').addEventListener('click', function(){
        document.querySelector('.userPicChoice').src = 'img/sax2.png';
        let randomNumber = computerRandomChoice();
        if(randomNumber === 2){
            userScore++;
            document.querySelector('.computerPicChoice').src = 'img/påse.png';
        }else if(randomNumber === 0){
            document.querySelector('.computerPicChoice').src = 'img/sten.png';
            document.querySelector('.computerScore').innerText = 'Spelet slut, försök igen';
        }else{
            document.querySelector('.computerPicChoice').src = 'img/sax2.png';
        }
        document.querySelector('.userScore').innerText = userScore;
    })

    document.querySelector('.bag').addEventListener('click', function(){
        document.querySelector('.userPicChoice').src = 'img/påse.png';
        let randomNumber = computerRandomChoice();
        if(randomNumber === 0){
            userScore++;
            document.querySelector('.computerPicChoice').src = 'img/sten.png';
        }else if(randomNumber === 1){
            document.querySelector('.computerPicChoice').src = 'img/sax2.png';
            document.querySelector('.computerScore').innerText = 'Spelet slut, försök igen';
        }else{
            document.querySelector('.computerPicChoice').src = 'img/påse.png';
        }
        document.querySelector('.userScore').innerText = userScore;
    })
})();
