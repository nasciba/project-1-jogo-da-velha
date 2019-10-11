class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}
class Game {
    constructor(player1, player2) {
        this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.player1 = player1;
        this.player2 = player2;
        this.turn = this.player1;
    }
    turnPlayer() {
        if (this.turn === this.player1) {
            this.turn = this.player2;
        }
        else {
            this.turn = this.player1;
        }
    }

    checkWinner(player) {
        let firstLine = (
            player.symbol === this.grid[0][0]
            && player.symbol === this.grid[0][1]
            && player.symbol === this.grid[0][2]
        )

        let secondLine = (
            player.symbol === this.grid[1][0]
            && player.symbol === this.grid[1][1]
            && player.symbol === this.grid[1][2]
        )
        let thirdLine = (
            player.symbol === this.grid[2][0]
            && player.symbol === this.grid[2][1]
            && player.symbol === this.grid[2][2]

        )
        let firstColumn = (
            player.symbol === this.grid[0][0]
            && player.symbol === this.grid[1][0]
            && player.symbol === this.grid[2][0]
        )
        let secondColumn = (
            player.symbol === this.grid[0][1]
            && player.symbol === this.grid[1][1]
            && player.symbol === this.grid[2][1]
        )
        let thirdColumn = (
            player.symbol === this.grid[0][2]
            && player.symbol === this.grid[1][2]
            && player.symbol === this.grid[2][2]
        )
        let leftDiagonal = (
            player.symbol === this.grid[0][0]
            && player.symbol === this.grid[1][1]
            && player.symbol === this.grid[2][2]
        )
        let rightDiagonal = (
            player.symbol === this.grid[0][2]
            && player.symbol === this.grid[1][1]
            && player.symbol === this.grid[2][0]
        )

        if (firstLine || secondLine || thirdLine
            || firstColumn || secondColumn || thirdColumn
            || leftDiagonal || rightDiagonal) {
            setTimeout(function () {
                let winMessage = document.getElementsByTagName('h1')[2];
                telaJogo.classList.add("hidden-section"),
                    telaWin.classList.remove("hidden-section"),
                    winMessage.innerText = `${player.name} ganhou!`;
            }, 500);
        }
    }
    checkIfNobodyWins() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === 0) {
                    return false;
                }
            }
        }
        return setTimeout(function () {
            const telaNobodywins = document.getElementById("tela-nobody-wins");
            let nobodyWinsMsg = document.getElementsByTagName('h1')[3];
            return telaJogo.classList.add("hidden-section"),
                telaNobodywins.classList.remove("hidden-section"),
                nobodyWinsMsg.innerText = "Ninguém ganhou nesta rodada";
        }, 500);
    }
}


let jogoDaVelha;
let player1;
let player2;
let name1;
let name2;
const squares = document.querySelector('[data-js-game="board"]').querySelectorAll('td');
const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaWin = document.getElementById("tela-win");
const telaNobodyWins = document.getElementById("tela-nobody-wins");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const timesSymbol = new Image(50, 50);
timesSymbol.src="./img/times.svg";

function goToGame() {
    name1 = document.getElementById("player1").value;
    name2 = document.getElementById("player2").value;
    player1 = new Player(name1, "x");
    player2 = new Player(name2, "o");
    jogoDaVelha = new Game(player1, player2);

    if (name1 === '' || name2 === '') {
        alert("Insira os nomes dos jogadores para continuar");

    }
    else {
        telaInicial.classList.add("hidden-section");
        telaJogo.classList.remove("hidden-section");
        startGame();
    }
}

const startButton = document.getElementById("start-game")
startButton.addEventListener("click", goToGame);

function startGame() {
    display1.innerText = jogoDaVelha.player1.name;
    display2.innerText = jogoDaVelha.player2.name;
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = (event) => {
            event.preventDefault()
            let player = jogoDaVelha.turn;
            let line = event.target.dataset.jsLine;
            let column = event.target.dataset.jsColumn;
            if (jogoDaVelha.grid[line][column] !== 0) {
                return alert("Posição já marcada, escolha outra posição!");
            }
            jogoDaVelha.grid[line][column] = player.symbol;
            
            if (player == jogoDaVelha.player1) {
                squares[i].appendChild(timesSymbol);
              
            }
            if (player === jogoDaVelha.player2) {
                squares[i].classList.add = ("far fa-circle");
            }
            jogoDaVelha.turnPlayer();
            jogoDaVelha.checkWinner(player);
            if (jogoDaVelha.checkWinner === false) {
                return jogoDaVelha.checkIfNobodyWins();
            }
        }
    }
}

function playAgain() {
    location.reload();
}

const playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener("click", playAgain)


