let score = 0;
let timer = 60;
let hitrn = 0;

function makeBubble() {
    clutter = "";
    for (let i = 0; i < 168; i++) {
        rd = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rd}</div>`
    }
    document.querySelector("#pannelBottom").innerHTML = clutter;
}

function timeRun() {
    let timeVal = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(timeVal);
            document.querySelector("#pannelBottom").innerHTML = `<h1>Game Over </h1>
                                                                <h1>Your Score: ${score}</h1>`
        }
    }, 1000)
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#pannelBottom").addEventListener("click", function (dets) {
    let clicked = Number(dets.target.textContent);
    if (clicked === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})
makeBubble();
timeRun();
getNewHit();