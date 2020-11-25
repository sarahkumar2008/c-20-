function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(300,250,70,90);
  fixrect.shapeColor="blue"
  movingrect.shapeColor="blue"

fixrect.debug=true
movingrect.debug=true
  
}

function draw() {
  background(0);  
movingrect.y=World.mouseY;
movingrect.x=World.mouseX;
if (movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2
  && fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2
  && fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2
  && movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2)


{
  fixrect.shapeColor="red"
  movingrect.shapeColor="red"


}
else{
  fixrect.shapeColor="blue"
  movingrect.shapeColor="blue"

}
  drawSprites();
}