var board = document.querySelector('#main-board')

function Player(x, y) {
  var self = this
  this.x = x
  this.y = y
  this.direction = 0
  this.speed = 10

  this.sprite

  this.insertPlayer = function() {
    var newPlayer = document.createElement('div')
    newPlayer.setAttribute('id', 'player')
    newPlayer.style.top = this.y + 'px'
    newPlayer.style.left = this.x + 'px'
    board.appendChild(newPlayer)
    this.sprite = newPlayer
  }

  this.move = function() {
    self.x += self.speed * self.direction
    self.sprite.style.left = self.x + 'px'
  }
}

var player = new Player(225, 750)
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