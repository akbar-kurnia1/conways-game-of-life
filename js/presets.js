function setCell(c, r) {
    if (c >= 0 && c < COLS && r >= 0 && r < ROWS) {
        grid[c][r] = 1;
    }
}

function spawnGlider() {
    clearGrid();
    var cx = 2; var cy = 2;
    setCell(cx + 1, cy);
    setCell(cx + 2, cy + 1);
    setCell(cx, cy + 2);
    setCell(cx + 1, cy + 2);
    setCell(cx + 2, cy + 2);
    drawGrid();
}

function spawnPulsar() {
    clearGrid();
    var cx = 15; var cy = 10;

    // Baris atas
    setCell(cx + 2, cy); setCell(cx + 3, cy); setCell(cx + 4, cy);
    setCell(cx + 8, cy); setCell(cx + 9, cy); setCell(cx + 10, cy);
    
    // Baris bawah
    var cy2 = cy + 12;
    setCell(cx + 2, cy2); setCell(cx + 3, cy2); setCell(cx + 4, cy2);
    setCell(cx + 8, cy2); setCell(cx + 9, cy2); setCell(cx + 10, cy2);

    // Sisi Kiri
    setCell(cx, cy + 2); setCell(cx, cy + 3); setCell(cx, cy + 4);
    setCell(cx, cy + 8); setCell(cx, cy + 9); setCell(cx, cy + 10);

    // Sisi Kanan
    var cx2 = cx + 12;
    setCell(cx2, cy + 2); setCell(cx2, cy + 3); setCell(cx2, cy + 4);
    setCell(cx2, cy + 8); setCell(cx2, cy + 9); setCell(cx2, cy + 10);
    
    // Isi Kotak Dalam
    setCell(cx + 5, cy + 2); setCell(cx + 5, cy + 3); setCell(cx + 5, cy + 4);
    setCell(cx + 7, cy + 2); setCell(cx + 7, cy + 3); setCell(cx + 7, cy + 4);
    
    setCell(cx + 5, cy + 8); setCell(cx + 5, cy + 9); setCell(cx + 5, cy + 10);
    setCell(cx + 7, cy + 8); setCell(cx + 7, cy + 9); setCell(cx + 7, cy + 10);
    
    // Horizontal Dalam
    setCell(cx + 2, cy + 5); setCell(cx + 3, cy + 5); setCell(cx + 4, cy + 5);
    setCell(cx + 8, cy + 5); setCell(cx + 9, cy + 5); setCell(cx + 10, cy + 5);
    
    setCell(cx + 2, cy + 7); setCell(cx + 3, cy + 7); setCell(cx + 4, cy + 7);
    setCell(cx + 8, cy + 7); setCell(cx + 9, cy + 7); setCell(cx + 10, cy + 7);

    drawGrid();
}

function spawnGosperGun() {
    clearGrid();
    var cx = 1; var cy = 5;
    
    // Left Square
    setCell(cx + 0, cy + 4); setCell(cx + 1, cy + 4);
    setCell(cx + 0, cy + 5); setCell(cx + 1, cy + 5);

    // Left "C" shape
    setCell(cx + 10, cy + 4); setCell(cx + 10, cy + 5); setCell(cx + 10, cy + 6);
    setCell(cx + 11, cy + 3); setCell(cx + 11, cy + 7);
    setCell(cx + 12, cy + 2); setCell(cx + 12, cy + 8);
    setCell(cx + 13, cy + 2); setCell(cx + 13, cy + 8);
    setCell(cx + 14, cy + 5);
    setCell(cx + 15, cy + 3); setCell(cx + 15, cy + 7);
    setCell(cx + 16, cy + 4); setCell(cx + 16, cy + 5); setCell(cx + 16, cy + 6);
    setCell(cx + 17, cy + 5);

    // Right Arrow
    setCell(cx + 20, cy + 2); setCell(cx + 20, cy + 3); setCell(cx + 20, cy + 4);
    setCell(cx + 21, cy + 2); setCell(cx + 21, cy + 3); setCell(cx + 21, cy + 4);
    setCell(cx + 22, cy + 1); setCell(cx + 22, cy + 5);
    setCell(cx + 24, cy + 0); setCell(cx + 24, cy + 1); 
    setCell(cx + 24, cy + 5); setCell(cx + 24, cy + 6);

    // Right Square
    setCell(cx + 34, cy + 2); setCell(cx + 34, cy + 3);
    setCell(cx + 35, cy + 2); setCell(cx + 35, cy + 3);

    drawGrid();
}