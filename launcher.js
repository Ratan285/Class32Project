class Launcher {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.09,
      length: 5
    }
    this.image = loadImage("Images/catapult.png");
    this.pointB = pointB
    this.imageBody = bodies.rectangle(200,325,20,20);
    this.body = Matter.Constraint.create(options);
    World.add(world, this.body);
  }
  fly() {
    this.body.bodyA = null;
  }

  display() {

    imageMode(CENTER);
    image(this.image, 200, 325, 70, 150);

    if (this.body.bodyA) {
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB
      stroke(0);
      push();
      strokeWeight(5);
      line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y)
      line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y -10)

    }
    pop();
  }
}