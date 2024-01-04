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
  console.log('eventKeyboard', eventKeyboard)
  const nextPos = { i: gHero.pos.i, j: gHero.pos.j }

  switch (eventKeyboard.key) {
    case 'ArrowLeft':
      nextPos.j--
      break;

    case 'ArrowRight':
      nextPos.j++
      break;

    case ' ':
      shoot()
      break;

    case 'x':
      superShot()
      break;

    default: return null
  }
  return nextPos
}


function moveHero(ev) {
  if (!gGame.isOn) return
  // console.log('hello')

  const nextPos = onKeyDown(ev)
  if (nextPos.j < 0 || nextPos.j > 13) return


  // console.log('nextPos', nextPos)


  gHero.pos
  updateCell(gHero.pos, null)

  gHero.pos = nextPos
  updateCell(gHero.pos, HERO)



  // shoot(gHero.pos)
  // console.log('gLaser', gLaser)
  // console.log('gHero.isShoot', gHero.isShoot)
  // console.log('nextCell', nextCell)

}

// function onXShoot(ev) {
//   console.log('ev', ev)
// }


function createLaser(pos) {
  if (gHero.isShoot === true) return
  gLaser = {
    pos: { i: pos.i - 1, j: pos.j },
    speed: LASER_SPEED
  }
}

function blinkLaser(pos) {

  if (gLaser.pos.i < 0) {
    clearInterval(gLaserInterval)
    gHero.isShoot = false
    return
  }


  let nextCell = gBoard[gLaser.pos.i][gLaser.pos.j]
  if (nextCell.gameObject === ALIEN) {
    clearInterval(gLaserInterval)
    updateCell(gLaser.pos, null)
    gHero.isShoot = false
    gGame.alienCount++
    gGame.score += 10
    checkScore()
    checkWin()
    return
  }
  updateCell(gLaser.pos, LASER)

  setTimeout(() => {
    gHero.isShoot = true
    updateCell(gLaser.pos, null)
    gLaser.pos.i--
    // console.log('gLaser.pos', gLaser.pos)
    // console.log('nextCell', nextCell)



    // console.log('nextCell', nextCell)
    // if (nextCell.gameObject === ALIEN) return

  }, 200)

}

function shoot(pos) {
  if (!gGame.isOn) return
  createLaser(gHero.pos)
  clearInterval(gLaserInterval)

  gLaserInterval = setInterval(() => blinkLaser(gLaser.pos), 350);


}
function superShot(pos) {
  if (!gGame.isOn) return
  createLaser(gHero.pos)
  clearInterval(gLaserInterval)

  gLaserInterval = setInterval(() => blinkLaser(gLaser.pos), 100);


}






