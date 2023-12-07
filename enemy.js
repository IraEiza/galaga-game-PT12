function Enemy(x, y, parent) {
  this.x = x
  this.y = y
  //this.speed = 5

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

  }
}

export { Enemy }