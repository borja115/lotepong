var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function drawBall() {
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(myImage, x, y);
}