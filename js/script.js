var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
canvas.width = canvasWidth; 
canvas.height = canvasHeight;

var gameTimer = null;
var baseSpeed = 200;
var currentSpeedDelay = baseSpeed;


function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var col = 0; col < COLS; col++) {
        for (var row = 0; row < ROWS; row++) {
            var cell = grid[col][row];
            ctx.beginPath();
            if (cell === 1) {
                ctx.fillStyle = '#ffffff';
            } else {
                ctx.fillStyle = '#000000';
            }
            ctx.fillRect(col * resolution, row * resolution, resolution - 1, resolution - 1);
        }
    }
}

function nextGen() {
    var nextGrid = createEmptyGrid();
    for (var col = 0; col < COLS; col++) {
        for (var row = 0; row < ROWS; row++) {
            var currentCell = grid[col][row];
            var neighborCount = countNeighbors(col, row);

            if (currentCell === 1) {
                if (neighborCount < 2 || neighborCount > 3) {
                    nextGrid[col][row] = 0;
                } else {
                    nextGrid[col][row] = 1;
                }
            } else if (currentCell === 0) {
                if (neighborCount === 3) {
                    nextGrid[col][row] = 1;
                } else {
                    nextGrid[col][row] = 0;
                }
            }
        }
    }
    grid = nextGrid;
    drawGrid();
}

function startGame() {
    if (!gameTimer) {
        gameTimer = setInterval(function() {
            nextGen();
        }, currentSpeedDelay);
    }
}

function stopGame() {
    clearInterval(gameTimer);
    gameTimer = null;
}

function setSpeed(multiplier) {
    currentSpeedDelay = baseSpeed / multiplier;
    var allButtons = document.querySelectorAll('.speed-btn');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
    }
    
    var activeButton = document.getElementById('btn-' + multiplier);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    if (gameTimer) {
        stopGame();
        startGame();
    }
}

function clearGrid() {
    stopGame();
    grid = createEmptyGrid();
    drawGrid();
}

function randomizeGrid() {
    stopGame();
    grid = createEmptyGrid();
    for (var col = 0; col < COLS; col++) {
        for (var row = 0; row < ROWS; row++) {
            if (Math.random() > 0.85) {
                grid[col][row] = 1;
            } else {
                grid[col][row] = 0;
            }
        }
    }
    drawGrid();
}

canvas.addEventListener('mousedown', function(e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var x = (e.clientX - rect.left) * scaleX;
    var y = (e.clientY - rect.top) * scaleY;
    var col = Math.floor(x / resolution);
    var row = Math.floor(y / resolution);
    if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
        if (grid[col][row] === 1) {
            grid[col][row] = 0;
        } else {
            grid[col][row] = 1;
        }
        drawGrid();
    }
});

clearGrid();