function Background(flappy) {
  this.flappy = flappy ;

  this.img = new Image();
  this.img.src = "./images/bg.png";

  this.x = 0;
  this.y = 0;
  

  this.dx = 10;
}

Background.prototype.draw = function () {
  
  this.flappy.ctx.drawImage(this.img,this.x,this.y,this.flappy.canvas.width,this.flappy.canvas.height);
  this.flappy.ctx.drawImage(this.img,this.x + this.flappy.canvas.width, this.y, this.flappy.canvas.width,this.flappy.canvas.height);
}
Background.prototype.move = function(){
  this.x -= this.dx;

  if(this.x < -this.flappy.canvas.width) this.x = 0;

}
