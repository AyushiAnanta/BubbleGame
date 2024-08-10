function CreateBubble() {
    let space = document.querySelector("#bottom");
    var m = Math.floor(Math.random() * 10);
    var cluster = `<div class="bubble">${m}</div>`;

    for (let i=0 ;  i<95 ; i++) {
        var n = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${n}</div>`;
    }

    space.innerHTML = cluster;
};

CreateBubble();

function NewHit() {
    var P = Math.floor(Math.random() * 10);
    //var HITT = `<div class="box" id="hitter">${P}</div>`;
    document.querySelector("#hitter").textContent = P;
};

NewHit();



function Timer() {
    var time = 60;

    var intrvl = setInterval(function() {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        } else {
            clearInterval(intrvl);
            document.querySelector("#bottom").innerHTML = `<h1 id="over">game over</h1>`;
        }
    }, 1000);
}

// Example usage:

Timer();

function score() {
    /*mouse click->bubble-->value === hit-value >>> score+=10
    
    new bubble values> new hit value
    mouse click->bubble-->value != hit-value >>> score-=5 make bubble red

    */
    var scoree = 0;
    var bubbles = document.querySelector("#bottom");
    var score = document.querySelector("#score");
    score.textContent = scoree;
    bubbles.addEventListener("click" , function(dets) {
        const target = dets.target;
        console.log({target})
            if (dets.target.textContent === document.querySelector("#hitter").textContent) {
                scoree += 10;
                console.log('yesss');
                score.textContent = scoree;
                CreateBubble();
                NewHit();
            } else {
                //console.log(bubbles.textContent , document.querySelector("#hitter").textContent)
                scoree -= 5;
                console.log('nooo')
                score.textContent = scoree;
                dets.target.style.backgroundColor = "#ff686b"
            }
        

   })

};

score();