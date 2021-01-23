const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stone,tree,ground,boy,mg1,mg2,mg3,mg4,mg5,mg6,mg7,gm8,mg9,mg10,mg11,mg12,mg13,mg14

function preload(){
tree=loadImage("tree.png")
boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	stone=new Stone(104,534,30)
 
	
	mg1=new Mango(820,200,35)
	mg2=new Mango(880,310,35)
	mg3=new Mango(840,390,40)
	mg4=new Mango(820,280,35)
	mg5=new Mango(780,340,40)
	mg6=new Mango(900,350,30)
	mg7=new Mango(700,255,35)
	mg8=new Mango(870,160,40)
	mg9=new Mango(710,330,40)
	mg10=new Mango(760,228,30)
	mg11=new Mango(870,218,40)
	mg12=new Mango(760,150,50)
	mg13=new Mango(925,268,40)
  mg14=new Mango(930,390,36)
  
  ground=new Ground(500,685,1000,25)

chain=new Attach(stone.body,{x:100,y:530})

	Engine.run(engine);



}


function draw() {
 // rectMode(CENTER);
 Engine.update(engine)
  background(118,233,255);
  
 text (mouseX+","+mouseY,mouseX,mouseY)
 
  image(boy,50,460,300,300)
  image(tree,650,110,360,600)
  stone.display()
  mg1.display()
  mg2.display()
  mg3.display()
  mg4.display()
  mg5.display()
  mg6.display()
  mg7.display()
  mg8.display()
  mg9.display()
  mg10.display()
  mg11.display()
  mg12.display()
  mg13.display()
  mg14.display()
  ground.display()
  chain.display()
 
  detectCollision(stone,mg1)
  detectCollision(stone,mg2)
  detectCollision(stone,mg3)
  detectCollision(stone,mg4)
  detectCollision(stone,mg5)
  detectCollision(stone,mg6)
  detectCollision(stone,mg7)
  detectCollision(stone,mg7)
  detectCollision(stone,mg8)
  detectCollision(stone,mg9)
  detectCollision(stone,mg10)
  detectCollision(stone,mg11)
  detectCollision(stone,mg12)
  detectCollision(stone,mg13)
  detectCollision(stone,mg14)
  
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
chain.fly()

}
function keyPressed(){

if(keyCode===32){
chain.join(stone.body)
}
}
function detectCollision(lstone,lmango){

stonePos=lstone.body.position
mangoPos=lmango.body.position

var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)

if(distance<=lmango.radius+lstone.radius){

  Matter.Body.setStatic(lmango.body,false)
}

}