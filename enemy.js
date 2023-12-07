function Enemy(x, y, parent, player) {
  var self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.speed = 10

  this.sprite

  this.insertEnemy = function() {
    var newEnemy = document.createElement('div')
    newEnemy.classList.add('enemy')
    newEnemy.style.top = this.y + 'px'
    newEnemy.style.left = this.x + 'px'
    parent.appendChild(newEnemy)
    this.sprite = newEnemy
  }

  this.move = function() {
    self.y += self.speed
    self.sprite.style.top = self.y + 'px'
    self.checkCollision()
    if(self.y >= 850) {
      self.removeEnemy()
    }
  }

  this.removeEnemy = function() {
    parent.removeChild(this.sprite)
    clearInterval(this.timerId )
  }

  this.checkCollision = function() {
    if ( this.x < (player.x + player.width) &&
      this.y < player.y + player.height &&
      this.x + this.width > player.x &&
      this.y + this.height > player.y) {
        player.isDead = true        
      }
  }

  this.timerId = setInterval(this.move, 100)
}

export { Enemy }