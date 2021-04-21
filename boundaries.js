class Boundary {
  constructor(width) {
    var options = {
      isStatic: true,
      restitution:2
    }
    this.x = 400;
    this.y = 400;
    this.height = 20;
    this.width = width;
    this.bottomBody = bodies.rectangle(this.x, this.y, this.width, this.height, options);
    this.topBody = bodies.rectangle(this.x, this.y - 400, this.width, this.height,options);
    World.add(world, this.topBody);
    World.add(world, this.bottomBody);
  }
  display() {
   var pos1 = this.topBody.position
    var pos2 = this.bottomBody.position
    push();
    translate(pos2.x, pos2.y)
    rectMode(CENTER)
    fill("black");
    rect(0, 0, this.width, this.height);
    pop();

    push();
    translate(pos1.x, pos1.y)
    rectMode(CENTER)
    fill("black");
    rect(0,0, this.width, this.height);
    pop();
  }
}
