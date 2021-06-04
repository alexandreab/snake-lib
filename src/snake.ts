class Snake {
	_snake: number[][];
	_lines = 24;
	_columns = 32;
	constructor(lines = 24, columns = 32) {
		this._lines = lines;
		this._columns = columns;
		const mid_i = Math.floor(lines/2);
		const mid_j = Math.floor(columns/2);
		this._snake = [[mid_i, mid_j]];
	}

	stringBoard() : string {
		const board = new Array(this._lines).fill(" ").map(
			()=> new Array(this._columns).fill(" ")
		);
		this._snake.forEach(piece => {
			board[piece[0]][piece[1]] = "■";
		});
		return board.map((line) => line.join(" ")).join("|\n");
	}

	move(direction: string) : void {
		const allowedDirections = [
			"up",
			"down",
			"left",
			"right",
		];
		const head = JSON.parse(JSON.stringify(this._snake[0]));
		if (direction === "up") head[0]--;
		else if (direction === "down") head[0]++;
		else if (direction === "left") head[1]--;
		else if (direction === "right") head[1]++;

		// TODO validate position
		this._snake.unshift(head);
		console.log(`moving ${JSON.stringify(this._snake)}`);
		this._snake.pop();
	}
}

export default Snake;
