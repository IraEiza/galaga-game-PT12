function Player(x, y, parent) {
  var self = this
  this.x = x
  this.y = y
  this.direction = 0
  this.speed = 5

  this.sprite

  this.insertPlayer = function() {
    var newPlayer = document.createElement('div')
    newPlayer.setAttribute('id', 'player')
    newPlayer.style.top = this.y + 'px'
    newPlayer.style.left = this.x + 'px'
    parent.appendChild(newPlayer)
    this.sprite = newPlayer
  }

  this.move = function() {
    var nextX = self.x + self.speed * self.direction
    if(nextX >= 0 && nextX <= 450) {
      self.x += self.speed * self.direction
      self.sprite.style.left = self.x + 'px'
    }
  }
}

export { Player }