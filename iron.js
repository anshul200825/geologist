class iron {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction': 3,
          'density': 30
      }
      this.body = Bodies.rectangle(x, y, 40, height, options);
      this.width = 40;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("brown");
      fill("red")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };