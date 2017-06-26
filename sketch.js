var bird;
var pipes = []
var game;
var score;

function setup() {
    createCanvas(400,600);
    bird = new Bird();
    frameRate(60);
    score = new Score();
    console.log(score.maxscore);
    console.log(eval(sessionStorage.scores));
    if(eval(sessionStorage.scores)>0) {
        score.maxscore = sessionStorage.scores;
    }

    button = createButton('Pause: P'); //Pause button
    button.position(0, 0);
    button.mousePressed(pause);
    function pause() {
        confirm('Paused. \n Do you want to Resume?');
    }

    button2 = createButton('Reset'); //Reset button
    button2.position(0, 22);
    button2.mousePressed(reset);
    function reset() {
        location.reload();
    }
}


function draw() {
    background(112, 196, 206);
    if (frameCount < 100) {
        textSize(25);
        fill(255);
        text("PRESS SPACEBAR TO FLY",50,200);
    };

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hit(bird)) { /*subs in function pipes.hit(x) with bird object as parameter */

            sessionStorage.scores = score.maxscore;//stores max score at localstorage.scores so it can be shown on next play
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit()
            }


        }

        if (pipes[i].offscreen()) {
            pipes.splice(i,1);
        }

    }

    if (frameCount % 60 ==0 && frameCount >= 200) { /*means, every 40 frames! */
        pipes.push(new Pipe());

    }
    score.show();
    score.update();

    bird.show();
    bird.update();

}

function keyPressed () {
    if (key == ' ') {
        bird.up();
    }
    if (key == 'P') {
        confirm('Paused. \nDo you want to Resume?');
    }

}
