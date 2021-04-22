class Keeper {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 1
        }
        this.width = 50;
        this.height = 80;
        this.body = bodies.rectangle(x, y, 50, 80, options);

        this.x = x;
        this.y = y;
        this.image = loadImage("Images/goalKeeper.png");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        push();
        translate(obstacle.x, obstacle.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        // rectMode(CENTER);
        // rect(0, 0, this.width, this.height);
        pop();
    }
}