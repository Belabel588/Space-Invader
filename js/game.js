'use strict'

//* GLOBALS

const BOARD_SIZE = 14
const ALIEN_ROW_LENGTH = 8
const ALIEN_ROW_COUNT = 3
const ALIEN_SPEED = 500

let gIntervalAliens


var gAliensLeftColIdx = BOARD_SIZE - ALIEN_ROW_LENGTH
var gAliensRightColIdx = BOARD_SIZE - 1
let gAliensTopRowIdx = 0
let gAliensBottomRowIdx = ALIEN_ROW_COUNT


let gIsAlienFreeze = false
const HERO = '<img class="space-ship" src="../img/space-ship.png">'
const ALIEN = '<img class="alien" src="../img/alien.png">'
const LASER = '<img class="missile" src="../img/missile.png">'

const EARTH = 'EARTH'
const SKY = 'SKY'

let gBoard = createBoard(BOARD_SIZE)

let gGame = {
  isOn: false,
  isWin: false,
  alienCount: 0,
  score: 0,
  winCount: ALIEN_ROW_LENGTH * ALIEN_ROW_COUNT,
}
console.log('gGame', gGame)

//* FLOW

function onInit() {
  renderBoard(gBoard)
  createHero()
  createAliens(gBoard)
  console.table(gBoard)
  moveAliens(gBoard)
  moveAliens(shiftBoardRight)
}



//* FUNCTION
function createBoard() {
  const board = []
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push([])
    for (let j = 0; j < BOARD_SIZE; j++) {
      const cell = board[i][j]
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
      // const cell = board[i][j]
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
  elScore.innerText = `score: ${gGame.score}`
}

function checkWin() {
  if (gGame.alienCount === gGame.winCount) {
    gGame.isWin = true
    gameOver()
  }
}

function gameOver() {
  let elWinModal = document.querySelector('.game-over-win-modal')
  elWinModal.style.display = 'block'
}

function onStartGame() {
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
