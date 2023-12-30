'use strict'


//* GLOBALS 
const LASER_SPEED = 80
let gHero


function createHero(board) {
  gHero = {
    pos: { i: 12, j: 5 },
    isShoot: false
  }

  updateCell(gHero.pos, HERO)
}


function onKeyDown(eventKeyboard) {
  const nextPos = { i: gHero.pos.i, j: gHero.pos.j }

  switch (eventKeyboard.key) {
    case 'ArrowLeft':
      nextPos.j--
      break;

    case 'ArrowRight':
      nextPos.j++
      break;

    default: return null
  }
  return nextPos
}


function moveHero(ev) {
  console.log('hello')

  const nextPos = onKeyDown(ev)
  console.log('nextPos', nextPos)

  // const nextCell = gBoard[nextPos.i][nextPos.j]
  // gHero.pos = nextPos


}

