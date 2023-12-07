// Importaciones
import { Player } from "./player.js"
import { Enemy } from "./enemy.js"

// Elementos del juego
var board = document.querySelector('#main-board')

var player = new Player(225, 750, board)
player.insertPlayer()

var enemies = []

function createEnemy() {
  var randomX = Math.floor(Math.random() * 450)
  console.log(randomX)
  var enemy = new Enemy(randomX, 0, board, player)
  enemy.insertEnemy()
  enemies.push(enemy)
}

var enemyGenTimer = setInterval(createEnemy, 2000)

// Controles
window.addEventListener( 'keydown', function(e) {
  switch(e.key) {
    case 'a':
      player.direction = -1
      break
    case 'd':
      player.direction = +1
      break
  }
})

window.addEventListener('keyup', function(e) {
  if(e.key === 'a' || e.key === 'd') {
    player.direction = 0
  }
})

// Movimiento
var timerId = setInterval(playerMovement, 50)

function playerMovement() {
  player.move()
  if(player.isDead === true) {
    alert('GAME OVER')
    clearInterval(timerId)
    clearInterval(enemy.timerId)
    enemy.removeEnemy()
  }
}