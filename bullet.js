function Bullet(x, y, parent, enemies) {
  var self = this
  this.x = x
  this.y = y
  this.width = 10
  this.height = 10
  this.speed = 20

  this.sprite

  this.insertBullet = function() {
    var newBullet = document.createElement('div')
    newBullet.classList.add('bullet')
    newBullet.style.top = this.y + 'px'
    newBullet.style.left = this.x + 'px'
    parent.appendChild(newBullet)
    this.sprite = newBullet
  }

  this.move = function() {
    self.y -= self.speed
    self.sprite.style.top = self.y + 'px'
    self.checkCollision()
    if(self.y <= -10) {
      self.removeBullet()
    }
  }

  this.removeBullet = function() {
    parent.removeChild(this.sprite)
    clearInterval(this.timerId )
  }

  this.checkCollision = function() {
    console.log(enemies)
    enemies.forEach(function(enemy, i) {
      if (  self.x < (enemy.x + enemy.width) &&
            self.y < enemy.y + enemy.height &&
            self.x + self.width > enemy.x &&
            self.y + self.height > enemy.y) {
        self.removeBullet()
        enemy.removeEnemy()
        enemies.splice(i, 1)
      }

      if(enemy.y >= 850) {
        enemy.removeEnemy()
        enemies.splice(i, 1)
      }
    })
  }

  this.timerId = setInterval(this.move, 100)
}

export { Bullet }