const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const bodies = Matter.Bodies;


function preload() {
  backGroundImage = loadImage("Images/ground.png")

}
function setup() {
  createCanvas(800, 400);

  engine = Matter.Engine.create();
  world = engine.world;

  ball = new Ball(200, 290);
  boundary = new Boundary(800);
  launcher = new Launcher(ball.body, { x: 200, y: 290 });
  goal = new Goal(600, 200);


}

function draw() {
  background(195);
  background(backGroundImage);
  drawSprites();

  Engine.update(engine);

  boundary.display();

  ball.return();
  ball.display();
  launcher.display();
  goal.display();

  console.log(mouseX, mouseY)
}
function mouseDragged() {
  Matter.Body.setStatic(ball.body, false);
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
  launcher.fly();
}