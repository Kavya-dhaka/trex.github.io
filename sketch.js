var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacles;
var obstacles1, obstacles2, obstacles3, obstacles4, obstacles5, obstacles6;
var cloudImage;

var score;


function preload() {
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");

  obstacles1 = loadImage("obstacle1.png");
  obstacles2 = loadImage("obstacle2.png");
  obstacles3 = loadImage("obstacle3.png");

  obstacles4 = loadImage("obstacle4.png");
  obstacles5 = loadImage("obstacle5.png");
  obstacles6 = loadImage("obstacle6.png");

  cloudImage = loadImage("cloud.png");

}

function setup() {

  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //creating invisible ground
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  //generate random numbers
  var rand = Math.round(random(1, 100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);

  console.log(trex.y)



  // jump when the space key is pressed
  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //stop trex from falling down
  trex.collide(invisibleGround);

  //Spawn Clouds
  spawnClouds()

  drawSprites();
}

//function to spawn the clouds
function spawnClouds() {
  // write your code here 
  if (frameCount % 100 == 0) {
    clouds = createSprite(600, 70, 10, 20);
    clouds.velocityX = -4;
    clouds.addImage("cloud",cloudImage)
    clouds.y = Math.round(random(50,100));
    clouds.scale = 0.7;


  }






}



