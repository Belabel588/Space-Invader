'use strict'

//* GLOBALS

const HERO = '<img class="space-ship" src="space-ship.png">'
const ALIEN = '<img class="alien" src="alien.png">'
const LASER = '<img class="missile" src="missile.png">'

const EARTH = 'EARTH'

let gBoard
let gGame

//* FLOW

function onInit() {
  gGame = {
    isOn: false,
    isWin: false,
    alienCount: 0,
    score: 0,
    winCount: ALIEN_ROW_LENGTH * ALIEN_ROW_COUNT,
  }

  console.log('gGame', gGame)
  gBoard = createBoard(BOARD_SIZE)
  renderBoard(gBoard)
  createHero(gBoard)
  createAliens(gBoard)
  const alienArr = buildAliensArr(gBoard)
  console.table(gBoard)
  // shiftBoardRight(gBoard, 0, ALIEN_ROW_COUNT)
  moveAliens(shiftBoardRight)

  // gLaserInterval = setInterval(() => shiftBoardRight(gBoard), 300);
}

//* FUNCTION
function createBoard() {
  const board = []
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push([])
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (i === BOARD_SIZE - 1) {
        board[i][j] = {
          type: EARTH,
          gameObject: null,
        }
      } else {
        board[i][j] = createCell()
      }
    }
  }
  return board
}

function renderBoard(board) {
  let strHTML = ``
  for (let i = 0; i < board.length; i++) {
    strHTML += `<tr>\n`
    for (let j = 0; j < board[0].length; j++) {
      const cell = board[i][j]
      const className = `cell cell-${i}-${j}`

      strHTML += `\t<td class = "${className}" data-i="${i}" data-j="${j}"></td>`
    }
    strHTML += `</tr>\n`
  }
  const elContainer = document.querySelector(`.board`)
  elContainer.innerHTML = strHTML
  // console.log('strHTML', strHTML)
}

function checkScore() {
  let elScore = document.querySelector('.score')
  // console.log('elScore', elScore)
  let strHTML = ''

  strHTML += `score: ${gGame.score}`
  // console.log('strHTML', strHTML)

  elScore.innerHTML = strHTML
}

function checkWin() {
  if (gGame.alienCount === gGame.winCount) {
    gGame.isWin = true
    gameOver()
  }
}

function gameOver() {
  let elGameOverWinModal = document.querySelector('.game-over-win-modal')
  elGameOverWinModal.style.display = 'block'
}

function onStartGame() {
  let elGameStartRestart = document.querySelector('.Start-Restart')
  gGame.isOn = true
}

function onRestart() {
  // console.log('supposed to restart')
  let elGameOverWinModal = document.querySelector('.game-over-win-modal')
  elGameOverWinModal.style.display = 'none'
  onInit()
  checkScore()
}

function onDismiss() {
  let elDismissBtn = document.querySelector('.instructions-modal')
  elDismissBtn.style.display = 'none'
}

function updateCell(pos, gameObject = null) {
  gBoard[pos.i][pos.j].gameObject = gameObject

  let elCell = getElCell(pos)

  elCell.innerHTML = gameObject || ''
}
