// Importaciones
import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Bullet } from "./bullet.js"

var backgroundMusic = new Audio("./sources/background-music.mp3")
backgroundMusic.volume = 0.1
backgroundMusic.play()

// Elementos del juego
var board = document.querySelector('#main-board')

var player = new Player(225, 750, board)
player.insertPlayer()

var enemies = []
var bullets = []

function createEnemy() {
  var randomX = Math.floor(Math.random() * 450)
  var enemy = new Enemy(randomX, 0, board, player, enemies)
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
    case ' ':
      var newBullet = new Bullet(player.x + 20, 735, board, enemies)
      newBullet.insertBullet()
      bullets.push(newBullet)
      console.log(newBullet)
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
    clearInterval(enemyGenTimer)
    enemies.forEach(function(enemy) {
      enemy.removeEnemy()
    })
  }
}