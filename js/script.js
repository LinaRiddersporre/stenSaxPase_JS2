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
        whatPlace();
    })

    function getScoreBoard(){
        return fetch(scoreBoardUrl).then(r=>{ return r.json().then((data=>{  
            console.log(data)
            createScoreboardElements(data)
            return data
        }))})
    }
    getScoreBoard();

    function createScoreboardElements(data){
        for(const post in data){
            console.log('data', data)
            let highscore = data[post];
            console.log('highscore', highscore)
            let player = document.createElement('h3');
            document.querySelector('.scoreboard').appendChild(player);
            player.innerText = highscore.name + ' ........ ' + highscore.score
        }
    }

    function whatPlace(){
        let scoreArray
        let score = document.querySelector('.userScore').innerText 
        let name = document.querySelector('.playerName').innerText
        
        
        getScoreBoard().then((data)=>{
            scoreArray = data;
            
            console.log('playerScore', score);
            console.log('scoreArray', scoreArray[0].score)
            scoreArray.push({
                name, 
                score
            })
            result = Object.values(scoreArray).sort((a, b)=>b.score - a.score).slice(0, 5)
            console.log('result', result)
        }).then(()=>{
            const headerObject = {
                "Content-type": "application/json; charset=UTF-8"
            };
            for(let i = 0; i<5; i++){
            let addPlayerUrl0 = `https://scoreboard-ed666-default-rtdb.europe-west1.firebasedatabase.app/${i}.json`;
                fetch(addPlayerUrl0,{
                    method: `PUT`,
                    body: JSON.stringify({
                        name: `${result[i].name}`,
                        score: `${result[i].score}`
                    }),
                    headers: headerObject
                })}
                console.log('result', result)
        })
        
    }
}
)();

//TODO: if sats för spelslut kontroll
//TODO: ta bort alla element som är över den senaste top 5
//TODO: gör allt oåtkomligt innan namn är ifyllt
//TODO: reloada sidan med reload knapp?
//TODO: Kolla på vg