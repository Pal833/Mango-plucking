
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeObj;
var boyObj;



function preload()
{
	treeObj = loadImage("tree.png");
	boyObj = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	tree = createSprite(800, 600, 50, 50);
	tree.addImage(treeObj);
	tree.scale = 0.3;

	boy = createSprite(150, 735, 50, 50);
	boy.addImage(boyObj);
	boy.scale = 0.1;

	mango1 = new mango(800, 700, 10);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  mango1.display();
  
  
  drawSprites();
 
}



