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

  // console.log('gLaser', gLaser)
  // blinkLaser(gHero.pos)

  shoot(gHero.pos)
  console.log('gLaser', gLaser)
  console.log('gHero.isShoot', gHero.isShoot)


}

function createLaser(pos) {
  if (gHero.isShoot === true) return
  gLaser = {
    pos: { i: pos.i - 1, j: pos.j },
    speed: LASER_SPEED
  }
}

function shoot(pos) {
  clearInterval(gLaserInterval)
  gLaserInterval = setInterval(() => blinkLaser(pos), 1100);
}

function blinkLaser(pos) {
  createLaser(gHero.pos)
  updateCell(gLaser.pos, LASER)
  gHero.isShoot = true
  console.log('gLaser.pos', gLaser.pos)

  setTimeout(() => {
    updateCell(gLaser.pos, null)
    gLaser.pos.i--
    console.log('gLaser.pos', gLaser.pos)
  }, 1000)

}



