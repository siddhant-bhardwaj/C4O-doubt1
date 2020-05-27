class Game {
  constructor(){}
  
play(){
  form.hide();
   
   Player.getPlayerInfo();
   player.getCarsAtEnd();
   console.log(player.rank+"players rank ");
   
   
   if(allPlayers!==undefined){
     background("#C68767");
     image(track_1,0,-displayHeight*4,displayWidth,displayHeight*5);
     console.log(displayHeight);

     var display_position= 130;
     //index for the array
     var index = 0;
     var x_position = 200;
     var y_position;


   for(var plr in allPlayers){
       
         index = index+1;
         x_position = x_position+200;
         y_position = displayHeight-allPlayers[plr].distance;
         /*console.log("cars array "+cars);
         console.log("index is  "+index);
         */
         cars[index-1].x= x_position;
         cars[index-1].y = y_position;
         //console.log("index is "+index + "player.index: "+player.index);
         if(index===player.index){
          stroke(10);
          fill("red");
          ellipse(x_position,y_position,60,60);
           cars[index-1].shapeColor= "red";
           camera.position.x = displayWidth/2;
           camera.position.y = cars[index-1].y;
           //console.log("cam pos X "+camera.position.x + "cam pos Y "+camera.position.y);
           //console.log("car pos X "+cars[index-1].x + "car pos Y "+cars[index-1].y);
         }
          


   }

  }
   
  if(keyIsDown(UP_ARROW)&&player.index!==null&& gameState===1){
   player.distance+=20;
   player.update();
  }
if(player.distance>3900 && gameState===1){
  gameState=2;
  player.rank= player.rank+1;
  player.updateCarsAtEnd(player.rank);
  console.log(player.rank);

}
drawSprites();

}



  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
        }
      
     
      form = new Form();
      form.display();

    }
  
car1 = createSprite(100,200,50,20);
//console.log(car1.position.y);
car1.addImage(car1_ing);
car2 = createSprite(300,200,50,20);
car2.addImage(car2_ing);
car3 = createSprite(500,200,50,20);
car3.addImage(car3_ing);
car4 = createSprite(700,200,50,20);
car4.addImage(car4_ing);
cars = [car1, car2, car3, car4];


  }

end(){
console.log("game ended");
game.update(2);

}



}
