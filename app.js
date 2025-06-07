let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;

        levelUP();
    }
});                    
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}
function levelUP(){
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx =Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);

}


function checkAnswer() {
    let lastIdx = userSeq.length - 1;

    if (userSeq[lastIdx] === gameSeq[lastIdx]) {
        if (userSeq.length === gameSeq.length) {
            // Move to next level after a short delay
            setTimeout(levelUP, 1000);
            userSeq = []; // Reset user sequence for the next round
        }
    } else {
        h2.innerText = `Game Over! Press any key to start.`;
        resetGame();
    }
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log("true");

    checkAnswer();

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}