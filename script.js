window.onload = function() {
    let canvas = document.getElementById("canvas");
    let clearBtn = document.getElementById("clear-btn");
    let randomBtn = document.getElementById("random-btn");
    let colorPicker = document.getElementById("color-picker");

    let isDrawing = false;
    let isRandomMode = false;

    for (let i = 0; i < 400; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        canvas.appendChild(cell);
    }

    let cells = document.querySelectorAll(".cell");

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function paintCell(cell) {
        if (isRandomMode) {
            cell.style.backgroundColor = getRandomColor();
        } else {
            cell.style.backgroundColor = colorPicker.value;
        }
    }

    canvas.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("cell")) {
            isDrawing = true;
            paintCell(e.target);
        }
    });

    canvas.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("cell")) {
            paintCell(e.target);
        }
    });

    window.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    clearBtn.addEventListener("click", () => {
        cells.forEach(cell => cell.style.backgroundColor = "white");
    });

    randomBtn.addEventListener("click", () => {
        isRandomMode = !isRandomMode;
        randomBtn.innerText = isRandomMode ? "Random color mode: ON" : "Random color mode: OFF";
    });
};