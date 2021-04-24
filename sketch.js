const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const bodies = Matter.Bodies;

var score = 0;

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
  //obstacle.velocityY = -10;
  obstacle.visible = false;


  ball = new Ball(200, 290);
  boundary = new Boundary(800);
  launcher = new Launcher(ball.body, { x: 200, y: 290 });
  goal = new Goal(773, 200);
  goalKeeper = new Keeper(obstacle.x, obstacle.y);



  //console.log(goal);
  //console.log(ball.radius / 2 + goal.height / 2)

}

function draw() {
  background(195);
  background(backGroundImage);
  Engine.update(engine);

  // if (goal.body.position.x - ball.body.position.x <= ball.body.height / 2 + goal.body.height / 2) {
  //    score = score + 1;
  // }else{

  // }

  // goal.debug = true;
  if (Matter.Detector.canCollide(ball.body, goal.body)) {
    score = score + 10
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
  text("score: " + score, 650, 50);
  text("position: " + mouseX + ", " + mouseY, 470, 50);
  text("sum: " + Math.round((ball.body.position.x - goal.body.position.x)), 350, 50)
  pop();
  // console.log(goal.body.speed);
}
function mouseDragged() {
  Matter.Body.setStatic(ball.body, false);
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
  launcher.fly();
}