var backgroundImg;

var snow1Img,snow2Img;

function preload(){

backgroundImg = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  Snow1.display();
  Snow2.display();
  drawSprites();
}