
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world,boyimage;

function preload()
{
	boyimage=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(650,690,1300,15);
tree=new Tree(1000,380,300,500);
stone=new Stone(370,430,30);
slingShot=new SlingShot(stone.body,{x:370,y:430})
mango1=new Mango(870,310,40);
mango2=new Mango(960,210,40);
mango3=new Mango(1000,290,40);
mango4=new Mango(1138,190,40);
mango5=new Mango(1050,370,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(18)
  text("PRESS SPACE FOR SECOND CHANCE",50,50);
  

  image(boyimage,200,340,200,300);
  ground.display();
  tree.display();
  stone.display();
  slingShot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  console.log("x position"+mouseX);
  console.log("y position"+mouseY);

  detectcollision(mango1,stone);
  detectcollision(mango2,stone);
  detectcollision(mango3,stone);
  detectcollision(mango4,stone);
  detectcollision(mango5,stone);

  drawSprites();
 
}



function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingShot.fly();
    
    
}
function detectcollision(a,b){
	mangoBodyPosition=a.body.position;
	stoneBodyPosition=b.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=a.radius+b.radius){
		Matter.Body.setStatic(a.body,false);
	}
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x: 370 , y: 430});
       slingShot.attach(stone.body);
    }
}