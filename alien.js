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


function moveAliens() {
  gIntervalAliens = setInterval(() => shiftBoardRight(gBoard, 0, ALIEN_ROW_COUNT), 1000);

}

function shiftBoardRight(board, fromI, toI) {
  for (let i = fromI; i < toI; i++) {
    for (let j = board.length - 1; j >= 0; j--) {

      const nextPos = { i: i, j: j + 1 }
      const currPos = { i: i, j: j }
      if (board[currPos.i][currPos.j].gameObject === ALIEN && board[nextPos.i][nextPos.j].gameObject === null) {
        updateCell(currPos, null)
        updateCell(nextPos, ALIEN)
      }
    }
  }


}
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