window.onload = function() {
  
  document.getElementById("start-button").onclick = function() {
    var flappy = new Flappy("myCanvas");
    flappy.startGame();
  }
    function Flappy (id) {
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.h = 500;
      this.w = 800;
      this.fps = 60
      this.background = new Background(this);
      this.bird = new Bird(this);
     }
  

    Flappy.prototype.cleanAndDraw = function() {
      this.background.draw();
      this.bird.birdDraw();
    
   
   }

   
   Flappy.prototype.startGame = function(){
        this.cleanAndDraw();
        this.interval = setInterval(function(){
          this.moveAll();
          this.cleanAndDraw();
        }.bind(this),1000 / this.fps)
    }

  Flappy.prototype.moveAll = function() {
    this.background.move();

  }


  

};