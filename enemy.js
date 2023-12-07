function Enemy(x, y, parent) {
  var self = this
  this.x = x
  this.y = y
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
    if(self.y >= 850) {
      console.log('YA ESTOY ABAJO!!')
      self.removeEnemy()
    }
  }

  this.removeEnemy = function() {
    parent.removeChild(this.sprite)
    clearInterval(this.timerId )
  }

  this.timerId = setInterval(this.move, 100)
}

export { Enemy }