
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(75, 350, 50);

  ground = new Ground(400, 390, 800, 10);

  dustbin1 = new Dustbin(700, 370, 100, 15);
  dustbin2 = new Dustbin(650, 340, 15, 75);
  dustbin3 = new Dustbin(745, 340, 15, 75);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW && paper.body.position.x <400){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:2, y:-6});
  }
}