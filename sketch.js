var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;
var form, player, game;
var car1,car2,car3,car4;
var cars;
var car1_ing, car2_ing,car3_ing,car4_ing;
var ground1;
var track_1;


function preload(){
track_1 = loadImage("images/track.png");
car1_ing= loadImage("images/car1.png");
car2_ing = loadImage("images/car2.png");
car3_ing = loadImage("images/car3.png");
car4_ing = loadImage("images/car4.png");
ground1 = loadImage("images/ground.png");






}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  


}


function draw(){
  if(playerCount === 4){
    console.log("playerCount"+playerCount);
    game.update(1);
    
  }
  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }


}
