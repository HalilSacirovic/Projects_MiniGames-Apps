'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let score,scoreArr,isPlaying,active;

const NewGame = () => {
    player0El.classList.remove("player--winner");
player1El.classList.remove("player--winner");
player1El.classList.remove("player--active");
player1El.classList.remove("player--active");
player0El.classList.add("player--active");
 score = 0;

 scoreArr = [0,0];
 active = true;
 isPlaying = 0;

score0El.textContent = 0;
score1El.textContent = 0;

current0El.textContent = 0;
current1El.textContent = 0;




}

NewGame();


 const swithPlayer = () =>{
    player0El.classList.toggle("player--active"); // ovo togle znaci da ukoliko player0El sadrzi klasu active uklonice je; a ukoliko ne sandrzi tu klasu onda je dodaje
    player1El.classList.toggle("player--active");
    document.getElementById(`current--${isPlaying}`).textContent = 0;
    score = 0;
    if(isPlaying === 0){
        isPlaying = 1;
    }
    else {
        isPlaying = 0;
    }

 }


btnRoll.addEventListener("click",function(){
    
    if(active){
        let dice  = Math.trunc(Math.random()*6)+1;
  
        diceEl.src= `dice-${dice}.png`;

        if(dice != 1){
            score += dice;
            document.getElementById(`current--${isPlaying}`).textContent = score;
    
        }else{
            
            swithPlayer();
        }
    }
    
})


btnHold.addEventListener("click",function(){
if(active){
    
scoreArr[isPlaying] += score;
document.getElementById(`score--${isPlaying}`).textContent = scoreArr[isPlaying];

if(scoreArr[isPlaying] >=10) {
    active=false
    document.querySelector(`.player--${isPlaying}`).classList.add("player--winner"); // ovo togle znaci da ukoliko player0El sadrzi klasu active uklonice je; a ukoliko ne sandrzi tu klasu onda je dodaje
    document.querySelector(`.player--${isPlaying}`).classList.remove("player--active");
}else{

    swithPlayer()
}
}


})


btnNew.addEventListener("click",function(){
    
NewGame();

})

