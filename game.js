'use strict'


//* GLOBALS 

const BOARD_SIZE = 14
const ALIEN_ROW_LENGTH = 8
const ALIEN_ROW_COUNT = 3

const HERO = '🛸'
const ALIEN = '👾'
const LASER = '⬆'


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
  createHero(gBoard)
  createAliens(gBoard)
  console.table(gBoard)

}













