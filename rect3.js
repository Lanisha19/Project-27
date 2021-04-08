class Rect3 {
    constructor(x, y, width, height) {
      var option={
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height,option);
      this.width = width;
      this.height = height;
      World.add(myWorld,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }