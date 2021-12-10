var sudoku = new Sudoku();

function sudokuGridToTable(grid) {
    for (i = 0; i < grid.length; i++) {
        row = Math.floor(i / 9);
        column = i % 9;

        document.querySelector(`#r${row} #c${column}`).innerText = grid[i];
    }
}

const gridTableTds = document.querySelectorAll("#grid td");
activeGridElement = null;

const optionTableTds = document.querySelectorAll("#options td");
activeOptionElement = null;

function toggleActiveEl(activeEl) {
    if (activeEl) {
        activeEl.classList.toggle('selected');
    }
}

function tryTofillCellAndGrid() {
    if (activeGridElement && activeOptionElement) {
        cell = parseInt(activeGridElement.id[1]);
        row = parseInt(activeGridElement.parentElement.id[1]);
        option = parseInt(activeOptionElement.id[1]);

        activeGridElement.innerText = option;
        sudoku.setGridValue(row, cell, option);
    }
}

for (gridTableTd of gridTableTds) {
    gridTableTd.addEventListener('click', event => {
        selectedCell = event.target;

        toggleActiveEl(activeGridElement);

        if (activeGridElement == selectedCell) {
            activeGridElement = null;
        } else {
            selectedCell.classList.toggle('selected');
            activeGridElement = selectedCell;
        }

        tryTofillCellAndGrid();
    });
}

for (optionTableTd of optionTableTds) {
    optionTableTd.addEventListener('click', event => {
        selectedCell = event.target;
        toggleActiveEl(activeOptionElement);

        if (activeOptionElement == selectedCell) {
            activeOptionElement = null;
        } else {
            selectedCell.classList.toggle('selected');
            activeOptionElement = selectedCell;
        }

        tryTofillCellAndGrid();
    });
};
