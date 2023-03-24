const message = document.querySelector(".message");
const score = document.querySelector(".score");
const num = document.querySelector(".number");
const body = document.getElementById("body");
const again = document.querySelector(".again");

let highScoreAfter = 0; 
let scoreShow = 20;



secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber)




document.querySelector(".check").addEventListener("click",function(){
    const guess =  Number(document.querySelector(".guess").value);

    message.textContent = "";
    if(guess === secretNumber){
       num.textContent = "";
        message.textContent = "🎉 Correct Answer  🎉";
        body.style = "background-color: #60b347; ";
        num.textContent = secretNumber;

        if(scoreShow>highScoreAfter){
            highScoreAfter = scoreShow;
            document.querySelector(".highscore").textContent = highScoreAfter;
        }
        console.log("Radi");
        document.querySelector(".check").disabled = true;
   }
   else if(guess !== secretNumber){
    if(scoreShow>1){
    if(guess<secretNumber){
        message.textContent = "To Low";
    }
    else {
        message.textContent = "To High";
    }
    scoreShow--;
    score.textContent = scoreShow;
   }
   else{
    message.textContent = "You Lost the Game";
    document.querySelector(".check").disabled = true;
   }
}
});


again.addEventListener("click",function(){

    scoreShow = 20; 

    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);

    message.textContent = "Start guessing...";
    body.style = "background-color: #222; ";
    score.textContent = scoreShow;
    num.textContent = "?";
    document.querySelector(".guess").value = ""
    document.querySelector(".check").disabled = false;

})