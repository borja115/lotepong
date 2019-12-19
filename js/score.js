var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function drawScore() {
    ctx.font = "16px cursive";
    ctx.fillStyle = "#212F3D";
    ctx.fillText("Score: " + score, 8, 20);
}