var monkey, monkey_running;
var ground;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime = 0;

function preload(){  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  survivalTime = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);
  
  if (ground.x >= 0){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space") && monkey.y >= 310){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8; 
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if (frameCount % 80 === 0){
    var banana = createSprite(410,300,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 90;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(410,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -7;
    obstacle.scale = 0.2;
    obstacle.lifetime = 80;
    
    obstacleGroup.add(obstacle);
  }
}