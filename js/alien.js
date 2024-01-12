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
function buildAliensArr(board) {
  const alienArr = []
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j].gameObject === ALIEN) {
        alienArr.push(board[i][j])
      }
    }
  }
  return alienArr
}

function moveAliens(shift) {
  clearInterval(gIntervalAliens)
  gIntervalAliens = setInterval(() => {
    shift(gBoard, gAliensTopRowIdx, gAliensBottomRowIdx)
  }, ALIEN_SPEED)
}

function shiftBoardRight(board, fromI, toI) {
  if (!gGame.isOn) return
  isShiftRight = true
  let allRowsReachedEnd = true

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
      }
    }
    allRowsReachedEnd = allRowsReachedEnd && rowReachedEnd
  }

  if (allRowsReachedEnd) {
    clearInterval(gIntervalAliens)
    shiftBoardDown(gBoard, gAliensTopRowIdx, gAliensBottomRowIdx)
    // isShiftRight = false
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
  gAliensBottomRowIdx++
  gAliensTopRowIdx++

  clearInterval(gIntervalAliens)
  if (isShiftRight) {
    moveAliens(shiftBoardLeft)
  } else {
    moveAliens(shiftBoardRight)
  }
}

function shiftBoardLeft(board, fromI, toI) {
  let allRowsReachedLeft = true

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
    allRowsReachedLeft = allRowsReachedLeft && rowReachedLeft
  }

  if (allRowsReachedLeft) {
    clearInterval(gIntervalAliens)
    shiftBoardDown(board, gAliensTopRowIdx, gAliensBottomRowIdx)
    isShiftRight = false
  }
}
