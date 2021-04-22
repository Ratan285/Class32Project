const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const bodies = Matter.Bodies;

var score;


function preload() {
  backGroundImage = loadImage("Images/ground.png");
  goalImage = loadImage("Images/GoalRing.png");

}
function setup() {
  createCanvas(800, 400);

  engine = Matter.Engine.create();
  world = engine.world;

  goalSprite = createSprite(760, 200, 20, 20);
  goalSprite.addImage(goalImage);
  goalSprite.scale = 0.3;

  edges = createSprite(600, 80, 50, 20);
  edges.visible = false;
  edges1 = createSprite(600, 320, 50, 20);
  edges1.visible = false;

  obstacle = createSprite(600, 200, 20, 50);
  obstacle.velocityY = -10;
  obstacle.visible = false;


  ball = new Ball(200, 290);
  boundary = new Boundary(800);
  launcher = new Launcher(ball.body, { x: 200, y: 290 });
  goal = new Goal(773, 200);
  goalKeeper = new Keeper(obstacle.x, obstacle.y);

  score = 0;

  

}

function draw() {
  background(195);
  background(backGroundImage);
  Engine.update(engine);

  if (ball.body.position.x - goal.body.position.x < (ball.width - goal.width) / 2) {
    score = score + 1;
  }

  obstacle.bounceOff(edges);
  obstacle.bounceOff(edges1);

  drawSprites();

  boundary.display();
  ball.return();
  ball.display();
  launcher.display();
  goal.display();
  goalKeeper.display();

  Engine.update(engine);

  push();
  fill("black");
  textSize(20);
  text("score: " + score, 700, 50);
  text("position: " + mouseX + ", " + mouseY, 500, 50)
  text("sum: " +(ball.width - goal.width)+""+Math.round((ball.body.position.x - goal.body.position.x)), 300, 50)
  pop();
  text(mouseX + mouseY, 500, 50)
}
function mouseDragged() {
  Matter.Body.setStatic(ball.body, false);
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
  launcher.fly();
}