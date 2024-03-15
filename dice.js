
 var images = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png',];


// var result1 = './images/' + images[random];
var random = Math.floor(Math.random()*6); 
var random2 = Math.floor(Math.random()*6); 

var result1 = './images/' + images[random];
var result2 = './images/' + images[random2];

 var dice1 = document.querySelector('.img1').setAttribute('src', result1);
 var dice2 = document.querySelector('.img2').setAttribute('src', result2);

function rollDice(){
 return dice1
}


function rollDice2(){
     return dice2
    }

function winner(){


if (random === random2){
    return document.querySelector('h2').innerHTML = 'This roll is a draw'
}
    if(random > random2){
        return document.querySelector('h2').innerHTML = ' The winner is player 1 '
    }
    else if( random < random2){
        return document.querySelector('h2').innerHTML =' The winner is player 2 '
    }

}

rollDice();
rollDice2();
winner()