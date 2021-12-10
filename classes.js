class Sudoku {
    constructor(grid = Array(81).fill(0)) {
        this.grid = grid;
    }

    setGridValue(row, column, value) {
        this.grid[row * 9 + column] = value;
    }

    getSudokuString() { // for saving later on
        return this.grid.join('');
    }
}