var resolution = 15;
var canvasWidth = 600;
var canvasHeight = 450;

var COLS = canvasWidth / resolution;
var ROWS = canvasHeight / resolution;

var grid = createEmptyGrid();
var generation = 0;

function createEmptyGrid() {
    var result = [];
    for (var i = 0; i < COLS; i++) {
        var column = [];
        for (var j = 0; j < ROWS; j++) {
            column.push(0);
        }
        result.push(column);
    }
    return result;
}

function countNeighbors(col, row) {
    var total = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            var x = col + i;
            var y = row + j;
            if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
                total += grid[x][y];
            }
        }
    }
    return total;
}

function setCell(c, r) {
    if (c >= 0 && c < COLS && r >= 0 && r < ROWS) {
        grid[c][r] = 1;
    }
}