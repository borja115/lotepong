var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var myObstacle = new Image();
myObstacle.src = "./images/decimo2.jpg";
var brickRowCount = 3;
var brickColumnCount = 8;
var brickWidth = 80;
var brickHeight = 41;
var brickPadding = 7;
var brickOffsetTop = 30;
var brickOffsetLeft = 13;

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.drawImage(myObstacle, brickX, brickY, brickWidth, brickHeight)
                ctx.fill();
                ctx.closePath();

            }
        }
    }
}

var timeCollsion = 0;

function collisionBrick() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];

            if (b.status == 0) {
                timeCollsion++;
                if (timeCollsion === 1) {
                    document.getElementById('myCanvas').classList.add('image')
                }
            }

            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;

                    if (score == 20) {
                        dy *= 1.2;
                        dx *= 1.2;
                    }


                }
            }
        }
    }
}
