var car,car1,car2,wall,wall1,wall2;
var speed,speed1,speed2,weight,weight1,weight2;


function setup() {
  createCanvas(1600,800);
  speed=random(55,90);
  speed1=random(55,90);
  weight=random(400,1500);
  weight1=random(400,1500);
  car=createSprite(50,100,50,50);
  wall=createSprite(1500,100,40,100);
  car1=createSprite(50,300,50,50);
  wall1=createSprite(1500,300,40,100);
  car2=createSprite(50,500,50,50);
  wall2=createSprite(1500,500,40,100);
  speed2=random(55,90);
  weight2=random(400,1500);
}

function draw() {
  background(255,255,255);  
  
 car.velocityX = speed;
 car1.velocityX = speed1;
 car2.velocityX = speed2
 //car.collide(wall);


 if(wall.x-car.x < (car.width+wall.width)/2)
 {
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     car.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color(230,230,0)
   }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0)
    }

 }  



 if(wall1.x-car1.x < (car1.width+wall1.width)/2)
 {
   car1.velocityX=0;
   var deformation=0.5 * weight1 * speed1* speed1/22509;
   if(deformation>180)
   {
     car1.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100)
   {
     car1.shapeColor=color(230,230,0)
   }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0)
    }

 }  


 if(wall2.x-car2.x < (car2.width+wall2.width)/2)
 {
   car2.velocityX=0;
   var deformation=0.5 * weight2 * speed2* speed2/22509;
   if(deformation>180)
   {
     car2.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100)
   {
     car2.shapeColor=color(230,230,0)
   }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0)
    }

 }  


  drawSprites();
}