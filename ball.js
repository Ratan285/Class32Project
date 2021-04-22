class Ball {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution: 0.5,
      density: 1.5,
      friction:1
    }

    this.radius = 40;
    this.image = loadImage("Images/football.png");
    this.body = bodies.circle(x, y, 20, options);
    this.x = x;
    this.y = y;
    World.add(world, this.body);

  }
  return() {
    if (this.body.position.x > 800) {
      Matter.Body.setPosition(this.body, { x: 0, y: this.body.position.y })
    }
    if (this.body.position.x < 0) {
      Matter.Body.setPosition(this.body, { x: 800, y: this.body.position.y })
    }
    if(this.body.speed>5){
      this.body.speed = 1
    }
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, 40, 40);
    pop();

  }
}