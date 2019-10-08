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
    }
    print(player) {
       if(this.player1 === player) {
           return this.player1
       }
       else {
           return this.player2
       }
    }
    move(player, positionX, positionY) {
        if (this.grid[positionX][positionY] !== 0) {
            return "Posição já marcada, escolha outra posição!"
        }
        else {
            return this.grid[positionX][positionY] = player.symbol;
        }
        //condicional que determine se já houver símbolo, retornar notificacao


    }
    checkWinner(player) {

        if (player.symbol === this.grid[0][0] && player.symbol === this.grid[0][1] && player.symbol === this.grid[0][2]
            || player.symbol === this.grid[1][0] && player.symbol === this.grid[1][1] && player.symbol === this.grid[1][2]
            || player.symbol === this.grid[2][0] && player.symbol === this.grid[2][1] && player.symbol === this.grid[2][2]
            || player.symbol === this.grid[0][0] && player.symbol === this.grid[1][0] && player.symbol === this.grid[2][0]
            || player.symbol === this.grid[0][1] && player.symbol === this.grid[1][1] && player.symbol === this.grid[2][1]
            || player.symbol === this.grid[2][0] && player.symbol === this.grid[1][2] && player.symbol === this.grid[2][2]
            || player.symbol === this.grid[2][0] && player.symbol === this.grid[1][1] && player.symbol === this.grid[0][2]
            || player.symbol === this.grid[0][0] && player.symbol === this.grid[1][1] && player.symbol === this.grid[2][2]) {
            return `${player.name} ganhou!`
        }
        else {
            for (let i = 0; i < this.grid.length; i += 1) {
                if (this.grid[i] !== 0) {
                    return "Ninguém ganhou nesta rodada!";
                }
            }

        }
    }
}
let jogoDaVelha;
let player1;
let player2;

function startGame() {
    let name1 = document.getElementById("player1").value;
    let name2 = document.getElementById("player2").value;
    player1 = new Player(name1, "x");
    player2 = new Player(name2, "o");
    jogoDaVelha = new Game(player1, player2);
    const telaInicial = document.getElementById("tela-inicial");
    const telaJogo = document.getElementById("tela-jogo");
    if (name1 === '' || name2 === '') {
        alert("Por favor, insira os nomes dos jogadores para continuar");

    }
    else {
        telaInicial.classList.add("hidden-section"), telaJogo.classList.remove("hidden-section");
    }
}

const startButton = document.getElementById("start-game")
startButton.addEventListener("click", startGame);


let squares = document.querySelector('[data-js-game="board"]').querySelectorAll('td');

for(let i= 0; i < squares.length; i++) {
    squares[i].onclick = (event) => {
        let line = event.target.dataset.jsLine;
        let column = event.target.dataset.jsColumn;
        if(jogoDaVelha.grid[line][column] !== 0) {
            return alert("Posição já marcada, escolha outra posição!")
        }
        jogoDaVelha.grid[line][column] = jogoDaVelha.print(player1).symbol;
        squares[i].innerText = jogoDaVelha.print(player1).symbol
    }
}



