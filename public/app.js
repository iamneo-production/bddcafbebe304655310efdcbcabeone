// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var b0,b1,b2,b3,b4,b5,b6,b7,b8;
b0 = btns[0];
b1 = btns[1];
b2 = btns[2];
b3 = btns[3];
b4 = btns[4];
b5 = btns[5];
b6 = btns[6];
b7 = btns[7];
b8 = btns[8];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here
    
    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    // Your code to update the 'result' element
    // ...
    result.textContent = `Player ${currentPlayer} turn`;

    // Your code to re-enable buttons
    // ...
    btns.forEach(btn => {
        btn.innerHTML = "";
    })
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
