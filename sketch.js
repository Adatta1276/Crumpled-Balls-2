

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var PAPER1,DP1,DP2,DP3,GROUND;

 /*function preload()
{
	
} */

function setup() {
	createCanvas(800, 700);  //midpoint of canvas is 400x,350y


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  
	
	GROUND = new Ground(400,697,803,10);
	DP1 = new D1(562,607,4.5,168);
	DP2 = new D2(649,690,170,4.5);
	DP3 = new D3(732,607,4.5,168);
	PAPER1 = new paper(70,650,10);



	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
	/* console.log(World.mouseX);
	console.log(World.mouseY); */

	console.log(PAPER1.x);
	console.log(PAPER1.y);
	//console.open();

  keyPressed();
  
  drawSprites();
 
 
  GROUND.display();
  DP1.display();
  DP2.display();
  DP3.display();
  
  PAPER1.display();

  //if(keyWentUp(uparrow) : gamestate === end)
}

function keyPressed() {
	if(keyWentDown(UP_ARROW)) {
        Matter.Body.applyForce(PAPER1.body,PAPER1.body.position,{x:43,y:-33});
	}

	
}
