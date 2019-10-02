class Player1 {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol
    }
}
class Player2 extends Player1 {
    constructor(name, symbol) {
        super(name)
        this.symbol = symbol
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
   


let playerUm = new Player1("Amanda", "X")
let newGame = new Game()
console.log(newGame.move(playerUm, 0, 2))
console.log(newGame.grid)
