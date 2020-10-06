var car;
var wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(0);
  weight = random(400,1500);

  speed1= random(0);
  weight1= random(400,1500);

  speed2= random(0);
  weight2= random(400,1500);

  speed3= random(20,35);
  weight3= random(400,1500);

  car = createSprite(50,50,60,70);
  car.velocityX = speed;
  car.shapeColor = ("pink");

  car1 = createSprite(50,150,60,70);
  car1.velocityX = speed1;
  car1.shapeColor = ("pink");

  car2 = createSprite(50,250,60,70);
  car2.velocityX = speed2;
  car2.shapeColor = ("pink");

  car3 = createSprite(50,350,60,70);
  car3.velocityX = speed3;
  car3.shapeColor = ("pink");


  wall = createSprite(1500,50,70,70);
  wall.shapeColor = ("grey");

  wall1 = createSprite(1500,150,70,70);
  wall1.shapeColor = ("grey");

  wall2 = createSprite(1500,250,70,70);
  wall2.shapeColor = ("grey");

  wall3 = createSprite(1500,350,70,70);
  wall3.shapeColor = ("grey");
}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x < (car.width+wall.width)/2){
    var deformation = 0.5 * width * speed * speed/22509

    if(deformation>180){
      car.shapeColor=("red");
      car.velocityX=0;
      car.x=50;
      wall.x=1500;
    }
    
    if(deformation<100){
      car.shapeColor=("yellow");
      car.velocityX=0;
      car.x=50;
      wall.x=1500;
    }}
    
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    var deformation1 = 0.5 * width1 * speed1 * speed1/22509

    if(deformation1>180){
      car1.shapeColor=("red");
      car1.velocityX=0;
      car1.x=50;
      wall.x=1500;
    }
    
    if(deformation1<100){
      car1.shapeColor=("yellow");
      car1.velocityX=0;
      car1.x=50;
      wall1.x=1500;
    }}
    

  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    var deformation2= 0.5 * width2 * speed2 * speed2/22509

    if(deformation2>180){
      car2.shapeColor=("red");
      car2.velocityX=0;
      car2.x=50;
      wall2.x=1500;
    }
    
    if(deformation2<100){
      car2.shapeColor=("yellow");
      car2.velocityX=0;
      car2.x=50;
      wall2.x=1500;
    }}
    

  if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    var deformation3 = 0.5 * width3 * speed3 * speed3/22509

    if(deformation3>180){
      car3.shapeColor=("red");
      car3.velocityX=0;
      car3.x=50;
      wall3.x=1500;
    }
    
    if(deformation3<100){
      car3.shapeColor=("yellow");
      car3.velocityX=0;
      car3.x=50;
      wall3.x=1500;
    }}
    
  drawSprites();

}