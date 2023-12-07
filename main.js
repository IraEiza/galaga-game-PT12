var board = document.querySelector('#main-board')

function Player(x, y) {
  this.x = x
  this.y = y
  this.direction = 0

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
    this.x += 10 * this.direction
    this.sprite.style.left = this.x + 'px'
  }
}

var player = new Player(225, 750)
player.insertPlayer()

window.addEventListener( 'keydown', function(e) {
  console.log(e.key)
  switch(e.key) {
    case 'a':
      player.direction = -1
      break
    case 'd':
      player.direction = +1
      break
  }
  player.move()
})