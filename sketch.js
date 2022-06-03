function preload() {
  backgroundImg= loadImage("snow3.jpg")
  snowImage= loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  if(frameCount%60===0) {
    spawnSnowflakes();
  }

  drawSprites();
}

function spawnSnowflakes(){
  snow=createSprite(random(20,380),10,10,10) 
  snow.addImage(snowImage)
  snow.scale=0.1
  snow.velocityY=5
  snow.lifetime= 125
}