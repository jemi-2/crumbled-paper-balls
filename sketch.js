
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;

function preload() {
	
}

function setup() {
createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		retitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(250,100,50,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	ground = new Ground(width/2,670,width,20)
    leftSide = new Ground(1100,600,20,120);
	middleSide = new Ground (700,600,20,120)
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball, ball.position,{x:100, y:-505})
	}
}
function draw() {
  rectMode(CENTER);
  background(0);
	ground.display()
	leftSide.display()
	middleSide.display()
	ellipse(ball.position.x, ball.position.y,30,30)
  drawSprites();
 
}




