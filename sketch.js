let shipX = 1;
let shipY = 1;
let shipW = 60;
let shipH = 40;
let bg;
var shots = [];
let bullet;
let ufo;
var enemies = [];

function setup() {
  createCanvas(1066, 600);
  
}

function preload(){
  bg = loadImage('space.jpg');
  ship = loadImage('edited-ship.png');
  bullet = loadImage('edited-bullet.png');
  ufo = loadImage('ufo.png');
}

function keyPressed(){
  if(keyCode==SHIFT){
    shots.push(new Bullets(((shipY+30)+shipY)/2));
  }
}


function draw() {
    background(bg);
    image(ship,shipX,shipY,shipW,shipH);
    if(keyIsDown(DOWN_ARROW))
      {
        if(shipY+shipH+5<=600)
          shipY += 5;
      }
    if(keyIsDown(UP_ARROW)){
      if(shipY-5>=0)
        shipY -=5;
    }
    for(i = 0;i<shots.length;i++){
      shots[i].show();
      shots[i].move();
    }
    if(random()<=0.08){
      enemies.push(new Enemy(random(600)));
    }
    for(i=0;i<enemies.length;i++){
      enemies[i].show();
      enemies[i].move();
    }
  print(enemies.length);
}
  
