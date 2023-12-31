'use strict'


//* GLOBALS 
const LASER_SPEED = 80
let gHero
let gLaser
let gLaserInterval


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
  // console.log('hello')

  const nextPos = onKeyDown(ev)
  if (nextPos.j < 0 || nextPos.j > 13) return


  console.log('nextPos', nextPos)

  gHero.pos
  updateCell(gHero.pos, null)

  gHero.pos = nextPos
  updateCell(gHero.pos, HERO)

  blinkLaser(nextPos)
  console.log('gLaser', gLaser)




}



function createLaser(pos) {
  gLaser = {
    pos: { i: pos.i - 1, j: pos.j },
    speed: LASER_SPEED
  }
  return gLaser

}

function blinkLaser(pos) {
  if (gLaser) return
  else {
    createLaser(pos)
    updateCell(gLaser.pos, LASER)

    setTimeout(() => {
      updateCell(gLaser.pos, null)
    }, 3000)

  }
}

