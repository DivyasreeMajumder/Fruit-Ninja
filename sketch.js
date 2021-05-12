var sword ,swordImage;
var PLAY=0;
var END=0;
var gameState=PLAY;
var gameState=END;
var score=0;
var fruit,fruit1,fruit2,fruit3,fruit4;
var r;
var fruitGroup;
var enemyGroup;
var monster,monsterImage;
var gameOver,gameOverImage;


function preload(){
  swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png")
  monsterImage=loadAnimation("alien1.png","alien2.png");
  gameOverImage=loadImage("gameOver.png")
  
  
 
}
function setup(){
 createCanvas(1600,1600)
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  fruitGroup=new Group();
  enemyGroup=new Group();
  
  
}

function draw(){
    background("lightblue");
  
    text("Score: "+ score, 500,50);
    
    drawSprites()
    if(gameState===PLAY){
        
        sword.x=World.mouseX;
      sword.y=World.mouseY;
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2
    }
    if(enemyGroup.isTouching(sword)){
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);
      fruitGroup.setLifetime(-1);
      enemyGroup.setLifetime(-1);
      sword.changeImage(gameOverImage);
      sword.x=200;
      sword.y=200;
        
        
        gameState=END;
        
        
        
        


    }
     
        
    
    
   
        
       
        
    

    }


    
    
    
     
    fruits();
    enemy();

}


function fruits(){
if(frameCount % 80 === 0){
  fruit=createSprite(400,200);
  fruit.shapeColor="lightblue"
  

  
  
  
var rand = Math.round(random(1,6));
  switch(rand) {
    case 1: fruit.addImage(fruit1);
            break;
    case 2: fruit.addImage(fruit2);
            break;
    case 3: fruit.addImage(fruit3);
            break;
    case 4: fruit.addImage(fruit4);
            break;
    
    default: break;
    
    
  }
fruit.scale = 0.1;
fruit.lifetime = 300;
fruit.y=Math.round(random (50,340));
  
fruit.velocityX=-7;
fruit.setLifetime=100;
  fruitGroup.add(fruit);
  
}
}

function enemy(){
if(World.frameCount%200===0){
monster=createSprite(400,200)
monster.addAnimation("moving",monsterImage);
monster.y=Math.round(random(100,300));
monster.velocityX=-8;
monster.setLifetime=50;
enemyGroup.add(monster)
}


}




