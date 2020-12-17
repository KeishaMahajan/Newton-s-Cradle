
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;
var ground;



function setup() {
	
	createCanvas(1000,800);

	engine = Engine.create();
	world = engine.world;

	roof= new Roof (500,100,1000,20)


bob1=new Bob (290,450,70)
bob2=new Bob (420,450,70)
bob3=new Bob (500,450,70)
bob4=new Bob (580,450,70)
bob5=new Bob (660,450,70)

chain1= new Chain (bob1.body,roof.body,-70*2,0)
chain2= new Chain (bob2.body,roof.body,-70*1,0)
chain3= new Chain (bob3.body,roof.body,-70*0,0)
chain4= new Chain (bob4.body,roof.body,+70*1,0)
chain5= new Chain (bob5.body,roof.body,+70*2,0)



Engine.run (engine)

	
  
}


function draw() {

  background("GREY");



roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

  drawSprites();
 
}




function keyPressed() {
	if (keyCode===UP_ARROW) 
	Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-10,y:-5})
}

