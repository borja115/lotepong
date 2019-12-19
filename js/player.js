var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var myImage = new Image()
myImage.src = "./images/bola-4millones.png";
var x = 305;
var y = 170;
var dx = 0.4;
var dy = 0.8;
var score = 0;
var lives = 3;
var pause = 0;

document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) {

    if (e.keyCode == 32) {
        if (pause == 0) {
            pause = 1;
            dx = 0;
            dy = 0;
            console.log('entro')
        }
        else {
            dx = 0.4;
            dy = 0.8;
            pause = 0;
        }
        }

}



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawShovel();
    drawBricks();
    collisionBrick();
    drawBricks();
    drawScore();
    drawLives();

    x += dx;
    y += dy;

    function detectCollisionWithPaddleX() {
        return x > paddleX && x < paddleX + paddleWidth;
    }

    function detectCollisionWithPaddleY() {
        return y + dy > canvas.height - paddleHeight;
    }

    function ballIsOutFromCanvas() {
        return y + dy > 400

    }
    function outOfCanvas() {
        return y + dy < 0
    }

    if (detectCollisionWithPaddleY() && detectCollisionWithPaddleX()) {
        dy *= -1;
    }

    if (outOfCanvas()) {
        dy *= -1
    }

    if (x + dx > 680 || x + dx < 0) dx = -dx;

    if (ballIsOutFromCanvas()) {
        lives--;
        x = paddleX;
        y = 350;
        dy *= -1;
    }




}


setInterval(draw, 60 / 10000)


