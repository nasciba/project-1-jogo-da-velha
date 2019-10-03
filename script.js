class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;

    }
}



class Game {
    constructor() {
        this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        // this.position = "positionX", "positionY";
    }
    move(player, positionX, positionY) {

        this.grid[positionX][positionY] = player.symbol;


    }
    checkWinner(symbol) {
        switch (symbol) {
            case player.symbol === this.grid[0][0] && player.symbol === this.grid[0][1] && player.symbol === this.grid[0][2]:
            case player.symbol === this.grid[1][0] && player.symbol === this.grid[1][1] && player.symbol === this.grid[1][2]:
            case player.symbol === this.grid[2][0] && player.symbol === this.grid[2][1] && player.symbol === this.grid[2][2]:
            case player.symbol === this.grid[0][0] && player.symbol === this.grid[1][0] && player.symbol === this.grid[2][0]:
            case player.symbol === this.grid[0][1] && player.symbol === this.grid[1][1] && player.symbol === this.grid[2][1]:
            case player.symbol === this.grid[2][0] && player.symbol === this.grid[1][2] && player.symbol === this.grid[2][2]:
            case player.symbol === this.grid[2][0] && player.symbol === this.grid[1][1] && player.symbol === this.grid[0][2]:
            case player.symbol === this.grid[0][0] && player.symbol === this.grid[1][1] && player.symbol === this.grid[2][2]:
                 `${this.player} ganhou!`
            break;
            default: //definir condicao para checar se todas posicoes já foram clicadas
                "Velha! Ninguém ganhou nesta rodada!"
                break;
        }
    }

}

let playerUm = new Player1("Amanda", "X")
let newGame = new Game()
console.log(newGame.move(playerUm, 0, 2))
console.log(newGame.grid)
