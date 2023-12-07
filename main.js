import { Player } from "./player.js"

var board = document.querySelector('#main-board')

var player = new Player(225, 750, board)
player.insertPlayer()

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

var timerId = setInterval(player.move, 50)