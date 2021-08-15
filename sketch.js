var mrect,frect

function setup() {
  createCanvas(1200,800);
mrect=createSprite(400,200,80,30)
mrect.shapeColor="green"
frect=createSprite(200,200,80,50)
frect.shapeColor="green"
}

function draw() {

  background(255,255,255);  
  mrect.x=World.mouseX
  mrect.y=World.mouseY
  if(mrect.x -frect.x<= mrect.width/2 +frect.width/2
    && frect.x -mrect.x<= mrect.width/2 +frect.width/2
    && mrect.y -frect.y<= mrect.height/2 +frect.height/2
      && frect.y -mrect.y<= mrect.height/2 +frect.height/2){
    mrect.shapeColor="red"
    frect.shapeColor="red"

  }
  else{
    mrect.shapeColor="green"
    frect.shapeColor="green"

  }
  drawSprites();
}