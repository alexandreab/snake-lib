import Snake from "./src/snake";

const snake = new Snake(5, 5);
async function gameLoop () {
	const moves = [
		"right",
		"up",
		"left",
		"down",
		"down",
		"right",
		"right",
		"up",
	];
	for (const direction of moves) {
		console.log(`moving to ${direction}`);
		snake.move(direction);
		console.log(snake.stringBoard());
	}
}

console.log(snake.stringBoard());
gameLoop();
