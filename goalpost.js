class Goal {
  constructor(x, y) {
    var options = {
      isStatic: true
    }
    this.image = loadImage("Images/Goalpost.png");
    this.body = bodies.rectangle(x, y, 70, 100, options);
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 100;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position
    
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, this.x, this.y, 70, 100);
    pop();
  }
}