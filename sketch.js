const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball;


function setup() {
  var canvas = createCanvas(400,400);
  engine =  Engine.create();
  world = engine.world; 
  var ground_options={
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,30,ground_options);
  World.add(world,ground);
  
  var ball_options={
    restitution: 1
  }
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}