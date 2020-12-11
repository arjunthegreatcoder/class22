// Matter.Body, Matter.World , Matter.Engine -> NAME SPACING -> SHORTCUT
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// GOD
var world, object, engine;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
  object = Bodies.rectangle(200, 380, 600, 30, options);
  World.add (world, object);

  console.log (object)

  var balloptions = {
    restitution: 0.8
  }
ball =Bodies.circle(100,100,30,balloptions);
World.add(world,ball);
}

function draw() {
  background("black");  
  rectMode (CENTER);
  Engine.update (engine);
  rect(object.position.x, object.position.y,600,30)
  ellipseMode (RADIUS);
  ellipse (ball.position.x,ball.position.y,30)

}