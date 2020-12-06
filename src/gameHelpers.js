export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
	return Array.from(Array(STAGE_HEIGHT), () => {
		return new Array(STAGE_WIDTH).fill([0, 'clear']);
	});
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
	for (let y = 0; y < player.tetromino.length; y += 1) {
		for (let x = 0; x < player.tetromino[y].length; x += 1) {
			//check if on an actual cell
			if (player.tetromino[y][x] !== 0) {
				if (
					//check if move is in area of the game height (y)
					!stage[y + player.pos.y + moveY] ||
					//check if move is in are of the game width (x)
					!stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
					//check the cell moving to isnt set to clear
					stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
						'clear'
				) {
					return true;
				}
			}
		}
	}
};
