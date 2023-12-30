'use strict'


//* GLOBALS 

const BOARD_SIZE = 14
const ALIEN_ROW_LENGTH = 8
const ALIEN_ROW_COUNT = 3

const HERO = '🛸'
const ALIEN = '👾'
const LASER = '⬆'


const EARTH = 'EARTH'

let gBoard
let gGame


//* FLOW 

function onInit() {
  gGame = {
    isOn: false,
    alienCount: 0
  }
  console.log('gGame', gGame)

  gBoard = createBoard(BOARD_SIZE)
  renderBoard(gBoard)
  createHero(gBoard)
  createAliens(gBoard)
  console.table(gBoard)
}








function createBoard() {
  const board = []
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push([])
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (i === BOARD_SIZE - 1) {
        board[i][j] = {
          type: EARTH,
          gameObject: null
        }
      } else {
        board[i][j] = createCell()
        // console.log('board[i][j]', board[i][j])

        // console.log('i', i)
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




function updateCell(pos, gameObject = null) {

  gBoard[pos.i][pos.j].gameObject = gameObject

  let elCell = getElCell(pos)

  elCell.innerHTML = gameObject || ''

}















