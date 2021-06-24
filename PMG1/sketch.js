var ship, shipImg;
var bg, bgImg;
var obstacle, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5, obstacleGroup;
var invisibleGround;

function preload(){
  bgImg = loadImage("Background.jpg");
  
  shipImg = loadImage("Spaceship.png");
  
  obstacle1 = loadImage("Obstacle1.png");
  obstacle2 = loadImage("Obstacle2.png");
  obstacle3 = loadImage("Obstacle3.png");
  obstacle4 = loadImage("Obstacle4.png");
  obstacle5 = loadImage("Obstacle5.png");
}

function setup(){
  createCanvas(600,600);
  
  bg=createSprite(300,300,20,20);
  bg.addImage("bg",bgImg);
  bg.velocityY = 4;
  
 ship = createSprite(200,200,50,50);
 ship.addImage("ship",shipImg);
 ship.scale = 0.3;
  
  obstacleGroup = new Group();
  
}















