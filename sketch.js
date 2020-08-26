function setup() {
  createCanvas(800,400);
  fixedr = createSprite(400, 200, 50, 50);
  fixedr.shapeColor = ("green")

  fixed2 = createSprite(300, 150, 10, 50);
  fixed2.shapeColor = ("red")
  fixed2.velocityX = -4;

  fixed3 = createSprite(90, 125, 80, 100);
  fixed3.shapeColor = ("pink")

  movingr = createSprite(90,350,40,40);
  movingr.shapeColor = ("green")
  movingr.velocityY = -5;
}

function draw() {
  background("black");  
  if(isTouching(movingr,fixed3)){
    fixed3.shapeColor = "blue"
    movingr.shapeColor = "blue"
  }
  else{
    fixed3.shapeColor = "green"
    movingr.shapeColor = "green"
  }

  bounceoff(fixed3,movingr);
  
  //movingr.x = World.mouseX;
  //movingr.y = World.mouseY;
  drawSprites();
}

