

let computerPattern = [];
let playerPattern = [];
let level = 0;
let gameStarted = false;
const btnColors = ["red", "blue", "green", "yellow"];
let h1 = document.querySelector("h1");

let start = document.querySelector("#btn");

start.addEventListener("click", function () {
    if (!gameStarted) {
        gameStarted = true;
        levelUp();
        console.log("game Started");
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp() {
    playerPattern = [];
    level++;
    h1.innerText = `Level ${level}`;
    let rmdmIdx = Math.floor(Math.random() * 4);
    let rmdmClr = btnColors[rmdmIdx];

    let rmdmBtn = document.querySelector(`#${rmdmClr}`);

    computerPattern.push(rmdmClr);
    gameFlash(rmdmBtn);
    console.log(rmdmClr);
}

let allBtns = document.querySelectorAll(".box");
for (let btn of allBtns) {
    btn.addEventListener("click", pressBtn);
}

function pressBtn() {
    if (gameStarted) {
        let btn = this;
        let btnclr = btn.getAttribute("id");
        playerPattern.push(btnclr);
        userFlash(btn);
        console.log(btnclr);
        check(playerPattern.length - 1); // Check the most recent input
    }
}

function check(idx) {
    if (playerPattern[idx] === computerPattern[idx]) {
        if (playerPattern.length === computerPattern.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        console.log("Game Over, Press Start to Restart");
        reset();
    }
}

function reset() {
    gameStarted = false;
    playerPattern = [];
    computerPattern = [];
    level = 0;
    h1.innerText = "Game Over! Click Start to Restart";
    document.body.classList.add("game-over");
    setTimeout(() => document.body.classList.remove("game-over"), 300);
}
