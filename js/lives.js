var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#212F3";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
    if (lives == 0) {
        lives = 3;
        var video = document.getElementById('video');
        video.src = './video/raphael.mov';
        video.autoplay = true;
        video.width = 300;
        video.height = 420;
        
    
       
    }
    
}
