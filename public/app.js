// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let currentPlayer = x;
let running = false;
const result = document.querySelector('.result');
const btns = document.querySelectorAll('.btn');
const btnReset = document.querySelector('#reset');
const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

initial();


function initial(){
    btns.forEach(btn => btn.addEventListener('click', btnClick));
    btnReset.addEventListener('click',resetGame);
    result.textContent = `Player ${player} turn`;
    running = true;
}

function btnClick(){
    const index = this.dataset.index;
    if(cells[index] != "" || !running){
        return;
    }
    updateBtn(this,index);
    checkWinner();
}

function updateBtn(btn,index){
    cells[index] = player;
    btn.innerHTML = currentPlayer;
}

function changePlayer(){
    player = (player == 'X') ? "O" : "X";
    currentPlayer = (currentPlayer == x) ? o : x;
    result.textContent = `Player ${player} turn`;
}

function checkWinner(){
    let isWon = false;
    for(let i=0; i<conditions.length; i++){
        const condition = conditions[i];
        const btn1 = cells[condition[0]];
        const btn2 = cells[condition[1]];
        const btn3 = cells[condition[2]];
        if(btn1 == btn2 && btn2 == btn3){
            isWon = true;
        }
    }
    if(isWon){
        result.textContent = `Player ${player} Won`;
        running = false;
    }else if(!cells.includes("")){
        result.textContent = `Game Drawn`;
        running = false;
    }else{
        changePlayer();
    }
}

const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    player = 'X';
    currentPlayer = x;
    running = true;
    result.textContent = `Player ${currentPlayer} turn`;

    btns.forEach(btn => {
        btn.innerHTML = "";
    })
};

