'use strict'


//* GLOBALS 
const LASER_SPEED = 80
let gHero


function createHero(board) {
  gHero = {
    pos: { i: 12, j: 5 },
    isShoot: false
  }

  board[gHero.pos.i][gHero.pos.j].gameObject = HERO
}
