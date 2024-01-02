'use strict'

//* GLOBALS 
const ALIEN_SPEED = 500
let gIntervalAliens
var gIsAlienFreeze = true


function createAliens(board) {

  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_ROW_LENGTH; j++) {

      updateCell({ i, j }, ALIEN)
    }
  }
}

// debugger
function shiftBoardRight(board, fromI, toI) {
  for (let i = 0; i < fromI; i++) {
    for (let j = 0; j < toI; j++) {
      let currCell = board[i][j]
      console.log('currCell', currCell)
      let toCell = board[i][j++]
      console.log('toCell', toCell)


      if (board[j] > 13) return
      if (currCell.gameObject === ALIEN) {
        // currCell.gameObject = null
        // toCell.gameObject = ALIEN
        updateCell(currCell, null)
        updateCell(toCell, ALIEN)

        //       }
      }

    }
  }
}