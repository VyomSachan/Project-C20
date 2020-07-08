var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(200, 200, 50, 50);
  car.shapeColor = "lightblue";

  wall = createSprite(1500, 200, 20, height/2);
  wall.shapeColor = 80,80,80;

  speed = random (55, 100);
  weight = random (400, 1500);
}

function draw() {
  background("black");
  
  car.velocityX = speed; 
  
  if(car.x - wall.x <= 100 && wall.x - car.x <= 100){
    if(0.5* weight* speed* speed/ 22500 <= 100){
      car.shapeColor = "green";
    }
    if(0.5* weight* speed* speed/ 22500 > 100 && 0.5* weight* speed* speed/ 22500 < 180){
      car.shapeColor = "yellow";
    }
    if(0.5* weight* speed* speed/ 22500 >= 180){
      car.shapeColor = "red";
    }

    car.velocityX = 0;
  }

  drawSprites();
}