
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var egg, eggImage;
var magicDoor,magicDoorImage;
function preload()
{
eggImage=loadImage("egg.png")
magicDoorImage=loadImage("Magic door.png")
}

function setup() {
	createCanvas(800, 600);

	
	for(var i=50; i<800;i=i+200){
	
	egg=createSprite(i,100,20,20)
	egg.addImage(eggImage);
	egg.scale=0.2
	
	}
	magicDoor=createSprite(150,300,20,20)
	magicDoor.addImage(magicDoorImage);
	magicDoor.scale=0.3
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
}



