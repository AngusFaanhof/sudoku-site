var grid = Array(81).fill(0);

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
        grid[row * 9 + cell] = option;
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
