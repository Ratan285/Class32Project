class Goal {
  constructor(x, y) {
    var options = {
      isStatic: true
    }

    this.body = bodies.rectangle(x, y, 50,150, options);
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 200;
    this.image = loadImage("Images/Goalpost.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position

    push();
    translate(pos.x, pos.y);
    fill("red");
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 150);
    pop();

  }
}