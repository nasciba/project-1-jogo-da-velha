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

function startGame() {
    let name1 = document.getElementById("player1").value;
    let name2 = document.getElementById("player2").value;
    let player1 = new Player(name1, "x");
    let player2 = new Player(name2, "o");
    let jogoDaVelha = new Game(player1, player2);
    const telaInicial = document.getElementById("tela-inicial");
    const telaJogo = document.getElementById("tela-jogo");
    if (name1 === '' || name2 === '') {
        return alert("Por favor, insira os nomes dos jogadores para continuar");
        
    }
    else {
        
        return telaInicial.classList.add("hidden-section"), telaJogo.classList.remove("hidden-section");
    }
}

const startButton = document.getElementById("start-game")
startButton.addEventListener("click", startGame)

