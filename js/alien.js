'use strict'

//* GLOBALS
let isShiftRight = false
let isShiftDown = false


function createAliens(board) {
  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_ROW_LENGTH; j++) {
      const cell = board[i][j]
      updateCell({ i, j }, ALIEN)
    }
  }
}


function moveAliens(shift) {
  if (gIsAlienFreeze) return
  clearInterval(gIntervalAliens)
  gIntervalAliens = setInterval(() => {
    shift(gBoard, gAliensTopRowIdx, gAliensBottomRowIdx)
  }, ALIEN_SPEED)

}

function shiftBoardRight(board, fromI, toI) {
  if (!gGame.isOn) return
  isShiftRight = true

  for (let i = fromI; i < toI; i++) {
    let rowReachedEnd = false
    for (let j = board[i].length - 1; j >= 0; j--) {
      const nextPos = { i: i, j: j + 1 }
      const currPos = { i: i, j: j }

      if (board[currPos.i][currPos.j].gameObject === ALIEN) {
        if (nextPos.j < board[i].length) {
          if (board[nextPos.i][nextPos.j].gameObject === null) {
            updateCell(currPos, null)
            updateCell(nextPos, ALIEN)
          }
        } else {
          rowReachedEnd = true
        }


        let elCell = document.querySelector(`.cell-${i}-${j}`)
        let cell = board[i][j]
        if (elCell.style.backgroundColor === 'red')
          updateCell(currPos, null)
        console.log('works')
      }
    }

    if (rowReachedEnd) {
      clearInterval(gIntervalAliens)
      shiftBoardDown(gBoard, gAliensTopRowIdx, gAliensBottomRowIdx)
      return


    }
  }
}



function shiftBoardDown(board, fromI, toI) {
  for (let i = toI; i >= fromI; i--) {
    for (let j = 0; j < board[0].length; j++) {
      let currPos = { i: i, j: j }
      let nextPos = { i: i + 1, j: j }

      if (board[currPos.i][currPos.j].gameObject === ALIEN) {
        if (nextPos.i < board.length && board[nextPos.i][nextPos.j].gameObject === null) {
          updateCell(currPos, null)
          updateCell(nextPos, ALIEN)
        }
      }
    }
  }

  clearInterval(gIntervalAliens)
  if (isShiftRight) {
    moveAliens(shiftBoardLeft)
  } else {
    moveAliens(shiftBoardRight)
  }
  gAliensTopRowIdx++
  gAliensBottomRowIdx++
}

function shiftBoardLeft(board, fromI, toI) {
  for (let i = fromI; i < toI; i++) {
    let rowReachedLeft = true
    for (let j = 0; j < board[i].length; j++) {
      const nextPos = { i: i, j: j - 1 }
      const currPos = { i: i, j: j }

      if (board[currPos.i][currPos.j].gameObject === ALIEN) {
        if (nextPos.j >= 0 && board[nextPos.i][nextPos.j].gameObject === null) {
          updateCell(currPos, null)
          updateCell(nextPos, ALIEN)
          rowReachedLeft = false
        }
      }
    }

    if (rowReachedLeft) {
      clearInterval(gIntervalAliens)
      isShiftRight = false
      shiftBoardDown(board, gAliensTopRowIdx, gAliensBottomRowIdx)
      return
    }
  }

}
