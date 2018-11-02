function Bird(flappy) {
  this.flappy = flappy ;
  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.width = 70;
  this.height = 100;
  this.speedX = 0;
  this.speedy = 0;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.x = 10;
  this.y = 250;
  

  // this.dx = 10;
}

Bird.prototype.birdDraw = function () {

  this.flappy.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.width,
    this.height

  )

}

Bird.prototype.move = function(){


}
