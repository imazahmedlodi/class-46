var space , blueShip, redShip, edges, bullets
var database ;
var gamestate ="serve"
var astroid = []
var astroids,maxAstroid = 100
var bulletarry
function preload() {
space =loadImage("images/background.gif")  
blueship = loadImage("images/blueship.png")
redship = loadImage("images/redship.png")
bulleti = loadImage("images/lazer beam.png")


}
function setup() {
  createCanvas(displayWidth,displayHeight-120);
blueShip = createSprite (displayWidth - 100, displayHeight/2);
blueShip.addImage(blueship);
blueShip.scale = 0.3

redShip = createSprite (90, displayHeight/2);
redShip.addImage(redship);
redShip.scale = 0.3
for (var i=0;i<9;i++){
  bullets = createSprite (displayWidth+100,displayHeight/2);
  bullets.addImage(bulleti);
  bullets.scale = 0.05
}


edges = createEdgeSprites ();
  //database = firebase.database()
}

function draw() {
  background(space); 
  if (gamestate === "serve"){
    strokeWeight(5)
    stroke ("red")
    fill ("white")
    textSize(30)
    text ("player 1 press space to shoot ",200,100)
    text ("player 2 press ? to shoot" ,displayWidth-500,100)
  }

 
   
  
    if (keyWentDown("space")&&gamestate=="serve") {
      
      bullets.velocityX = 69
      bullets.y=redShip.y
      bullets.x=redShip.x
      gamestate = "play"
    }
    if(bullets.x > displayWidth&&keyWentDown("space")&&gamestate==="play"){
      bullets.y=redShip.y
      bullets.x=redShip.x
      bullets.velocityX = 69
    }
  if (keyDown("w")) {
    redShip.y=redShip.y-2
  }

  if (keyDown("s")) {
    redShip.y=redShip.y+2
  }

  if (keyDown("up")) {
    blueShip.y=blueShip.y-2
  }

  if (keyDown("down")) {
    blueShip.y=blueShip.y+2
  }



  redship.depth=bullets.depth
  bullets.depth=bullets.depth-1
  blueShip.bounceOff(edges)
  redShip.bounceOff(edges)
spawnAstroid()
  drawSprites();
}
function spawnAstroid(){
  if (frameCount%280===0){
    astroids=createSprite(displayWidth-20,50)
    astroids.x=Math.round(random(displayWidth,50))
    astroids.y=Math.round(random(50,300))
    astroids.velocityX=Math.round(random
    astroids.velocityY=
    astroids.lifetime=displayWidth/10
  }
}