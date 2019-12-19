var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var myShovel = new Image()
myShovel.src = "./images/pala.jpg";
var rightPressed = false;
var leftPressed = false;
var paddleX = 305;
var paddleHeight = 54;
var paddleWidth = 107;
var paddleDx = 0;



function drawShovel() {
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(myShovel, paddleX += paddleDx, 396);
    if(paddleX > 600 || paddleX < 0) {
        paddleDx = 0;
    }
}


document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    if(pause == 0){
        if (rightPressed && paddleX < canvas.width - 107) {
            paddleDx += 7;
        }
        else if (leftPressed && paddleX > 0) {
            paddleDx -= 7;
            console.log('entra')
        }
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
        paddleDx = 0;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
        paddleDx = 0;
    }
}