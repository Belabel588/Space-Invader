'use strict'

//* GLOBALS 
const ALIEN_SPEED = 500
let gIntervalAliens
let gIsAlienFreeze = true
let gAliensTopRowIdx = 0
let shiftRight
var gAliensBottomRowIdx



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
    shift(gBoard, gAliensTopRowIdx, ALIEN_ROW_COUNT)
  }, ALIEN_SPEED)

  //   gIntervalAliens = setInterval(() => {
  //     shiftBoardRight(gBoard, gAlienRow, ALIEN_ROW_COUNT)
  //   }, ALIEN_SPEED)


  //   setTimeout(() => {
  //     clearInterval(gIntervalAliens)
  //     shiftBoardDown(gBoard, 0, ALIEN_ROW_COUNT)
  //   }, 3200)

  //   setTimeout(() => {

  //     // clearInterval(gIntervalAliens)

  //     gIntervalAliensLeft = setInterval(() => {
  //       shiftBoardLeft(gBoard, gAlienRow, ALIEN_ROW_COUNT)
  //     }, 2000)
  //   })
}


//   shiftBoardDown(gBoard, 0, ALIEN_ROW_COUNT)
// }, ALIEN_SPEED);
// setTimeout(() => {
//   shiftBoardLeft(gBoard, 0, ALIEN_ROW_COUNT)
// }, ALIEN_SPEED);
// shiftBoardDown(gBoard, 0, ALIEN_ROW_COUNT),
// shiftBoardLeft(gBoard, 0, ALIEN_ROW_COUNT), ALIEN_SPEED)



function shiftBoardRight(board, fromI, toI) {
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
}


// if (shiftRight === false && shiftDown === true && shiftLeft === true) {
//   moveAliens(shiftBoardLeft)
// }

// if (shiftRight === false && shiftDown === true && shiftLeft === false) {
//   clearInterval(gIntervalAliens)
//   moveAliens(shiftBoardLeft)
// }


// if (shiftLeft === true && shiftDown === false && shiftRight === false) {
//   clearInterval(gIntervalAliens)
//   moveAliens(shiftBoardLeft)
// }



function shiftBoardDown(board, fromI, toI) {
  for (let i = fromI; i < toI; i++) {
    for (let j = board.length - 1; j >= 0; j--) {
      const nextPos = { i: i + 1, j: j }
      const currPos = { i: i, j: j }
      if (board[currPos.i][currPos.j].gameObject === ALIEN && board[nextPos.i][nextPos.j].gameObject === null) {
        updateCell(currPos, null)
        updateCell(nextPos, ALIEN)
        // clearInterval(gIntervalAliens)
      }
    }
  }

  let rightOLeft
  if (shiftRight === true) rightOLeft = shiftBoardRight
  else if (shiftRight === false) rightOLeft = shiftBoardLeft
  // clearInterval(gIntervalAliens)
  moveAliens(rightOLeft)

  // console.log('ALIEN_ROW_COUNT', ALIEN_ROW_COUNT)
  // console.log('gAlienRow', gAlienRow)
}


function shiftBoardLeft(board, fromI, toI) {
  // clearInterval(gIntervalAliensDown)
  for (let i = fromI + 1; i < toI + 1; i++) {
    for (let j = 0; j < board[i].length; j++) {

      const nextPos = { i: i, j: j - 1 }
      const currPos = { i: i, j: j }



      if (board[currPos.i][currPos.j].gameObject === ALIEN && board[nextPos.i][nextPos.j].gameObject === null) {
        updateCell(currPos, null)
        updateCell(nextPos, ALIEN)
      }
      if (nextPos.j < 0) {
        clearInterval(gIntervalAliens)
        // shiftRight = true
        moveAliens(shiftBoardDown)
      }
    }

  }
}


// function shiftBoardLeft(board, fromI, toI) {
//   for (let i = fromI; i < toI; i++) {
//     for (let j = board.length - 1; j > ALIEN_ROW_LENGTH; j--) {

//       const nextPos = { i: i, j: j - 1 }
//       const currPos = { i: i, j: j }
//       if (board[nextPos.j < 13]) clearInterval(gIntervalAliens)
//       if (board[currPos.i][currPos.j].gameObject === ALIEN && board[nextPos.i][nextPos.j].gameObject === null) {
//         updateCell(currPos, null)
//         updateCell(nextPos, ALIEN)
//       }
//     }
//   }
// }


  // }
  // const currCell = arr[i]
  // console.log('currCell', currCell)
  // const right = 1
  // const nextPos = arr[i[i][j]]

  // console.log('nextPos', nextPos)
  // updateCell(currCell, null)
  // updateCell(nextPos, ALIEN)









// }



//   const right = 1
//   for (let i = 0; i < fromI; i++) {
//     for (let j = 0; j < toI; j++) {
//       const nextPos = board[i][j + right]
//       updateCell(nextPos, ALIEN)



//     }
//   }
// }





  // for (let i = 0; i < fromI; i++) {
    //   for (let j = 0; j < toI; j++) {
      //     let currCell = board[i][j]
  //     console.log('currCell', currCell)
  //     let toCell = board[i][j++]
  //     console.log('toCell', toCell)


  //     if (board[j] > 13) return
  //     if (currCell.gameObject === ALIEN) {
  //       currCell.gameObject = null
  //       toCell.gameObject = ALIEN
  // updateCell(currCell, null)
  // updateCell(toCell, ALIEN)

  //       }
// }

    // }
  // }
// }