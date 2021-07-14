var ship1
function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_moving = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(230,200,30,30)
  sea.addAnimation("moving",sea_moving)
  sea.scale = 0.2
  ship=createSprite(200,200,20,20)
  ship.addAnimation("running",ship_running)
  ship.scale = 0.3
  
}

function draw() {
  background("white");
  sea.velocityX=-2
  if(sea.x<150){
  sea.x = width/2
  sea.velocityX=-2
  }
 drawSprites();
}