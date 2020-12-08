
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hook, mBob;

function preload(){
	backgroundImage = loadImage("wall2.jpg");
}
function setup() {
	createCanvas(800, 400);

	// Create Our Engine and Our World
	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create a roof
	hook = new Roof(width/2, height-390,width,height/10);

	//Create a paper ball
	mBob = new Bob(width/2, height/4+100,15);
	mBob1 = new Bob(width/2-30, height/4+100,15);
	mBob2 = new Bob(width/2+30, height/4+100,15);
	mBob3 = new Bob(width/2-60, height/4+100,15);
	mBob4 = new Bob(width/2+60, height/4+100,15);


	rp = new Rope(mBob.body,hook.body,0,0);

/*	For thread coming from one position
	rp1 = new Rope(mBob1.body,hook.body,0,0);
	rp2 = new Rope(mBob2.body,hook.body,0,0);
	rp3 = new Rope(mBob3.body,hook.body,0,0);
	rp4 = new Rope(mBob4.body,hook.body,0,0);*/

	rp1 = new Rope(mBob1.body,hook.body,-30,0);
	rp2 = new Rope(mBob2.body,hook.body,30,0);
	rp3 = new Rope(mBob3.body,hook.body,-60,0);
	rp4 = new Rope(mBob4.body,hook.body,60,0);

	console.log(hook.body.position);
	console.log(mBob.body.position);

/*	var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 800,
		  height: 400,
		  wireframes: false
		}
	  });
	Render.run(render);*/

	Engine.run(myEngine);


  
}

function draw() {

  background(backgroundImage);
  mBob.display();
  mBob1.display();
  mBob2.display();
  mBob3.display();
  mBob4.display();
  hook.display();
  rp.display();
  rp1.display();
  rp2.display();
  rp3.display();
  rp4.display();
 
}

function keyPressed(){
 //console.log("Inside KeyPressed Function");
	if (keyCode === UP_ARROW){
		//console.log("key: Up Arrow");
		Matter.Body.applyForce(mBob3.body,mBob3.body.position,{x:-30,y:-35});
	}
}

/*function mouseDragged(){
	//Matter.Body.setPosition(mBob3.body, {x: mouseX , y: mouseY});
	Matter.Body.applyForce(mBob3.body,mBob3.body.position,{x:-5,y:-5});
}*/






