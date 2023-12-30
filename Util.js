'use strict'


//* GLOBALS 
const SKY = 'SKY'



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


function createCell(gameObject = '') {
  return {
    type: SKY,
    gameObject: gameObject
  }
}



function renderBoard(board) {
  let strHTML = ``
  for (let i = 0; i < board.length; i++) {
    strHTML += `<tr>\n`
    for (let j = 0; j < board[0].length; j++) {


      const cell = board[i][j]
      const className = `cell cell-${i}-${j}`

      strHTML += `\t<td class = "${className}">${cell.gameObject}</td>`
    }
    strHTML += `</tr>\n`
  }
  const elContainer = document.querySelector(`.board`)
  elContainer.innerHTML = strHTML
  // console.log('strHTML', strHTML)
}
