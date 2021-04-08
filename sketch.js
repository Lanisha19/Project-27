
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin;
var leftRect,rightRect,bottomRect;
var myWorld,myEngine;

function setup() {
	createCanvas(1000, 400);

  myEngine = Engine.create();
	myWorld = myEngine.world;
 
  dustbin = new Rect(760,280,170,200);
  leftRect = new Rect3(690,280,20,170);
  rightRect = new Rect3(830,280,20,170);
  bottomRect = new Rect3(760,370,150,20);
  ball = new Ball(200,355,70);

	ground = new Ground(500,380,1000,20);
	
  
  
}


function draw() {
  background("black");
  Engine.update(myEngine);
  

  drawSprites();
  ground.display();
  
  ball.display();
  leftRect.display();
  rightRect.display();
  bottomRect.display();
  dustbin.display();

  
  
}

function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-600});
   }
    

}
