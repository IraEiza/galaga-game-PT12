// Importaciones
import { Player } from "./player.js"
import { Enemy } from "./enemy.js"

// Elementos del juego
var board = document.querySelector('#main-board')

var player = new Player(225, 750, board)
player.insertPlayer()

var enemy = new Enemy(50, 0, board)
enemy.insertEnemy()

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
var timerId = setInterval(player.move, 50)