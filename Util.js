'use strict'


//* GLOBALS 
const SKY = ''






//* UTIL FUNCTIONS

function createBoard() {
  const board = []
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push([])
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = createCell()
      // console.log('board[i][j]', board[i][j])
    }

  }
  return board
}


function createCell(gameObject = null) {
  return {
    type: SKY,
    gameObject: gameObject
  }
}

