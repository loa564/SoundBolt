(function(){
  if(typeof Snowballs === "undefined"){
    window.SnowBalls = {};
  }

  SnowBall = SnowBalls.SnowBall = function(xCord, yCord, radius, speed){
    this.xCord = xCord;
    this.yCord = yCord;
    this.radius = radius;
    this.speed = speed;
  }

  SnowBall.randomSnowBall = function(maxX, maxY, numSnowBalls){
    return new SnowBall(
      maxX * Math.random(),
      0,
      SnowBall.radius(maxX, maxY, numSnowBalls),
      SnowBall.speed(maxX, maxY, numSnowBalls)
    );
  }

  SnowBall.radius = function(){
    return 7 * Math.random();
  }

  SnowBall.speed = function(maxX, maxY, numSnowBalls){
    rand = Math.random();
    if(rand <= 0.33){
      return (maxY / 100);
    }else if(rand > 0.33 && rand < 0.66){
      return (maxY / 150);
    }else{
      return (maxY/ 200);
    }
  }

  SnowBall.prototype.move = function(yMax){
    newYCord = this.yCord + this.speed;
    if(newYCord > yMax){
      newYCord = yMax;
    }
    this.yCord = newYCord;
  }

  SnowBall.prototype.render = function (ctx) {
    colors = ["red", "blue", "white", "yellow", "green"];
    ctx.fillStyle = colors[Math.floor(Math.random() * 4)];
    ctx.beginPath();

    ctx.arc(
      this.xCord,
      this.yCord,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };
})();