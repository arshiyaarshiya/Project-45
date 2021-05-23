var bg_1, basket1_i,life_i;
var life,form,game;
var playerCount=0;
var players;
var database,gameState=0;
var player;
var allPlayer;

function preload(){
  bg_1 = loadImage("bg1.png");
  basket1_i = loadImage("basket2.png");
  life_i = loadImage("life.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  database = firebase.database();

  game = new Game();
  game.getstate();
  game.start();

  basket1 = createSprite(400, 550, 50, 50);
  basket2 = createSprite(600, 550,50,50);
 
}


function draw() {
  background(bg_1);  

  if (playerCount===2){
    game.updateState(1);
  }

  if(gameState === 1){
    game.playLevel1();
  }
  if(gameState === 2){
    game.playLevel2();
  }
  if(gameState === 3){
    game.playLevel3();
  }
  if(gameState === 4){
    game.end();
  }
  drawSprites();
}

function spawnLife(){
  
}