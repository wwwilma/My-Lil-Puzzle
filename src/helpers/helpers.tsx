/**
 * Caculation of board size given the number of columns and rows.
 * @param cols The number of columns.
 * @param rows The number of rows.
 * @returns The size of the board.
 */
export const getBoardSize = (cols: number, rows: number): number => cols * rows;

/**
 * Generating an array that represents the board, going from 1.
 * @param cols The number of columns.
 * @param rows The number of rows.
 * @returns An array that represents the board.
 */
export const generateArray = (cols: number, rows: number): number[] => {
    const size = getBoardSize(cols, rows); // Calculate size of board
    const array: number [] = [];
    for (let i = 0; i < size; i++) {
        array.push(i + 1); // Generate an array from 1 to size
    }
    return array;
};

/**
 * Counting the number of inversions in given array to determine if solvable.
 * @param arr The array that represents the board.
 * @returns The inversions as a number.
 */
const countInversions = (arr: number []) => {
    let inversions = 0;

    inversions = arr.reduce((count, currentTile, currentIndex) => {
        return (
            count +
            arr.slice(currentIndex + 1).filter((tile) => tile && tile < currentTile)
                .length // Count the number of tiles smaller than current tile
        );
    }, 0);
    return inversions;
};

/**
 * Checking if board is solvable given the number of columns and rows.
 * @param cols The number of columns.
 * @param rows The number of rows.
 * @param arr The array that represents the board.
 * @returns True if solvable, otherwise false.
 */
const isSolvable = (cols: number, rows: number, arr:number[]): boolean => {
    const inversions = countInversions(arr);
    const blankIndex = arr.findIndex((e) => e === arr.length); // Find index of the blank tile, i.e. tile represented by the highest number
    const blankRowNumber = Math.floor(blankIndex / cols) + 1;

    if (cols % 2 === 1) { // If odd number of columns
        return inversions % 2 === 0; // Board is solvable if even number of inversions
    }
    if (cols === rows) { 
        return (
            (inversions % 2 === 1 && (rows - blankRowNumber) % 2 === 1) || // Board is solvable if sum of inversions and blank tile row number is odd
            (inversions % 2 === 0 && (rows - blankRowNumber) % 2 === 0) // Board is sovlable if sum of inversions and blank tile row number is even  
        );
    }
    if (cols % 2 === 0 && rows % 2 === 0) { // If both number of columns and rows are even
        return (inversions + blankRowNumber) % 2 === 0; // Board is solvable if sum of inversions and blank tile row number is even
    }
    return (inversions + blankRowNumber) % 2 === 1; // In other case, board is solvable if sum of inversions and blank tile row number is odd
};

/**
 * Shuffles the elements in the array.
 * @param arr The array that is shuffled.
 * @returns The shuffled array.
 */
const shuffle = (arr: number []) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1)); // Generate random index withing range
        [arr[i], arr[rand]] = [arr[rand], arr[i]]; // Swap current element with random one
    }
    return arr; //
};

/**
 * Generating a solvable board given the number of columns and rows.
 * @param cols The number of columns.
 * @param rows The number of rows.
 * @returns An array representing the board.
 */
export const generateBoard = (cols: number, rows: number): number[] => {
    const arr = shuffle(generateArray(cols, rows)); // Generate shuffled array that represents the board
    if (isSolvable(cols, rows, arr)) { // Check if solvable
        return arr; // Return if solvable
    }
    return generateBoard(cols, rows); // If not solvable, generate a new one until it is solvable
};

/**
 * Checking if the board is solved, i.e. if it is in the correct order.
 * @param arr The array representing the board.
 * @returns True if solved, otherwise false.
 */
export const isSolved = (arr: number[]): boolean => arr.every((e, i) => e === i +1); 

/**
 * Moving a tile given its index and the number of columns.
 * @param index The index of the tiled that is moved.
 * @param cols The number of columns.
 * @param arr The array representing the board.
 * @returns The updated board after the tiled has moved.
 */
export const moveTile = (index: number, cols: number, arr: number[]): number[] => {
    const newArr = [...arr];
    const blankIndex = newArr.findIndex((e) => e === arr.length); // Find index of the blank tile, i.e. tile represented by the highest number
    const isSameRow = Math.floor(index / cols) === Math.floor(blankIndex / cols); // Check if tile to be moved is in the same row as the blank tile
    const isSameColumn = index % cols === blankIndex % cols; // Check if tile to be moved is in the same column as the blank tile

    if (isSameRow || isSameColumn) { // If tile to be moved is in the same row or column as the blank tile
        let distance = index - blankIndex; // Calculate the distance between the tile to be moved and the blank tile
        const direction = index > blankIndex ? 1 : -1; // Detemine direction of movement
        const step = direction * (isSameRow ? 1 : cols); // Calculate the size of step based on the direction and if it is a row or column movement

        while (distance !== 0 ) { // Iteration until the tile to be moved reaches the blank tile position
            [newArr[index - distance], newArr[index - distance + step]] = [ // Swapping positions of the tile to be moved and the blank tile
                newArr[index - distance + step],
                newArr[index - distance],
            ];
            distance -= step; // Update the distance
        }
    }
    return newArr;
};