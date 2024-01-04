'use strict'

//* GLOBALS 
const ALIEN_SPEED = 1600
let gIntervalAliens
let gIsAlienFreeze = true
let gAliensTopRowIdx = 0
let shiftRight
let gAliensBottomRowIdx



function createAliens(board) {

  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_ROW_LENGTH; j++) {

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
  shiftRight = true

  for (let i = fromI; i < toI; i++) {
    for (let j = board.length - 1; j >= 0; j--) {

      const nextPos = { i: i, j: j + 1 }
      const currPos = { i: i, j: j }


      if (board[currPos.i][currPos.j].gameObject === ALIEN &&
        board[nextPos.i][nextPos.j].gameObject === null) {

        updateCell(currPos, null)
        updateCell(nextPos, ALIEN)


        if (nextPos.j === board[i].length - 1) {
          clearInterval(gIntervalAliens)
          moveAliens(shiftBoardDown)
          shiftRight = false



          // clearInterval(gIntervalAliens)
        }
      }
    }
  }
  console.log('shiftRight', shiftRight)
}


function shiftBoardDown(board, fromI, toI) {
  for (let i = fromI; i < toI; i++) {
    for (let j = board.length - 1; j >= 0; j--) {
      const nextPos = { i: i + 1, j: j }
      const currPos = { i: i, j: j }
      if (board[currPos.i][currPos.j].gameObject === ALIEN &&
        board[nextPos.i][nextPos.j].gameObject === null) {
        updateCell(currPos, null)
        updateCell(nextPos, ALIEN)

      }
    }
  }

  let rightOLeft
  if (shiftRight === true) rightOLeft = shiftBoardRight
  else if (shiftRight === false) rightOLeft = shiftBoardLeft
  // clearInterval(gIntervalAliens)
  moveAliens(rightOLeft)
  // gAliensBottomRowIdx
  // gAliensTopRowIdx 


}


function shiftBoardLeft(board, fromI, toI) {
  console.log('shifting left')
  // clearInterval(gIntervalAliensDown)
  for (let i = fromI + 1; i < toI + 1; i++) {
    for (let j = 0; j < board[i].length; j++) {

      const nextPos = { i: i, j: j - 1 }
      const currPos = { i: i, j: j }



      if (nextPos.j < 0) {
        // shiftRight = true
        console.log('its happening')

        clearInterval(gIntervalAliens)
        moveAliens(shiftBoardDown)
      }
      else if (board[currPos.i][currPos.j].gameObject === ALIEN && board[nextPos.i][nextPos.j].gameObject === null) {
        updateCell(currPos, null)
        updateCell(nextPos, ALIEN)
      }
    }

  }
}

