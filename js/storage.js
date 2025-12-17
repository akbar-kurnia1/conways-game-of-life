function showToast(message) {
    var x = document.getElementById("toast");
    if (!x) return;
    x.innerText = message;
    x.className = "toast-notification show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function openSaveModal() {

    if (typeof stopGame === "function") stopGame(); 
    
    var isEmpty = true;
    outer_loop:
    for (var col = 0; col < COLS; col++) {
        for (var row = 0; row < ROWS; row++) {
            if (grid[col][row] === 1) {
                isEmpty = false; 
                break outer_loop;
            }
        }
    }

    if (isEmpty) {
        showToast("Grid is empty! Draw something first.");
        return;
    }

    document.getElementById('inputTitle').value = "";
    document.getElementById('inputDesc').value = "";
    document.getElementById('saveModal').style.display = "flex";
    document.getElementById('inputTitle').focus();
}

function closeModal() {
    document.getElementById('saveModal').style.display = "none";
}

function confirmSave() {
    var title = document.getElementById('inputTitle').value;
    var desc = document.getElementById('inputDesc').value;

    if (!title) {
        showToast("Please enter a pattern name!");
        return;
    }

    var liveCells = [];
    for (var col = 0; col < COLS; col++) {
        for (var row = 0; row < ROWS; row++) {
            if (grid[col][row] === 1) liveCells.push([col, row]);
        }
    }

    var patternData = {
        title: title,
        description: desc || "Custom Pattern",
        coords: liveCells
    };

    var storageKey = "gol_" + title.replace(/\s+/g, '_');
    localStorage.setItem(storageKey, JSON.stringify(patternData));

    closeModal();
    loadUserPresets();
    showToast("Pattern '" + title + "' saved successfully!");
    
    var scrollArea = document.querySelector('.sidebar-scroll-area');
    if(scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
}

function loadUserPresets() {
    var container = document.getElementById('userPresetList');
    if (!container) return;
    
    container.innerHTML = ""; 

    if (localStorage.length === 0) {
        container.innerHTML = "<p style='color:#666; font-size:12px; font-style:italic;'>No saved patterns yet.</p>";
        return;
    }

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith("gol_")) {
            try {
                var rawData = localStorage.getItem(key);
                var data = JSON.parse(rawData);
                
                var displayTitle = data.title || key.replace("gol_", "");
                var displayDesc = data.description || "Custom";
                var coordsData = data.coords || data;

                var wrapper = document.createElement('div');
                wrapper.className = "user-preset-wrapper";

                var btnLoad = document.createElement('button');
                btnLoad.className = "preset-btn";
                btnLoad.innerHTML = "<strong>" + displayTitle + "</strong><span>" + displayDesc + "</span>";
                
                btnLoad.onclick = (function(c) {
                    return function() {
                        if (typeof loadFromCoordinates === "function") {
                            loadFromCoordinates(c);
                            showToast("Pattern loaded!");
                        }
                    };
                })(coordsData);

                var btnDel = document.createElement('button');
                btnDel.className = "del-btn";
                btnDel.innerHTML = "&times;";
                btnDel.onclick = (function(k, t) {
                    return function() {
                        if(confirm("Delete '" + t + "'?")) {
                            localStorage.removeItem(k);
                            loadUserPresets();
                            showToast("Pattern deleted.");
                        }
                    };
                })(key, displayTitle);

                wrapper.appendChild(btnLoad);
                wrapper.appendChild(btnDel);
                container.appendChild(wrapper);
            } catch (e) { console.error(e); }
        }
    }
}

loadUserPresets();