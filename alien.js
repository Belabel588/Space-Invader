'use strict'

//* GLOBALS 
const ALIEN_SPEED = 500
let gIntervalAliens



function createAliens(board) {

  for (let i = 0; i < ALIEN_ROW_COUNT; i++) {
    for (let j = 0; j < ALIEN_ROW_LENGTH; j++) {

      updateCell({ i, j }, ALIEN)
    }
  }
}