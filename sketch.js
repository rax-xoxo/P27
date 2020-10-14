
	const Engine = Matter.Engine;

	const World = Matter.World;

	const Bodies = Matter.Bodies;

	const Body = Matter.Body;

	const Constraint = Matter.Constraint;

	var bob1,bob2,bob3,bob4,bob5;

	var rope1,rope2,rope3,rope4,rope5;
	
	var ground; 

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Roof(375,200,320,25);
	bob1 = new Bob(230,410,50);
	bob2 = new Bob(320,410,50);
	bob3 = new Bob(370,410,50);
	bob4 = new Bob(420,410,50);
	bob5 = new Bob(470,410,50);

	rope1 = new Rope(bob1.body,ground.body,-50*2,0);
	rope2 = new Rope(bob2.body,ground.body,-50*1,0);
	rope3 = new Rope(bob3.body,ground.body,-50*0,0);
	rope4 = new Rope(bob4.body,ground.body,-50*-1,0);
	rope5 = new Rope(bob5.body,ground.body,-50*-2,0);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

  	ground.display();
  	bob1.display();
  	bob2.display();
  	bob3.display();
  	bob4.display();
  	bob5.display();
 
  	rope1.display();
  	rope2.display();
  	rope3.display();
  	rope4.display();
  	rope5.display();

  	drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:45});
	}
}
