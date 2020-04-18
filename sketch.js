let shipX = 1;
let shipY = 1;
let shipW = 80;
let shipH = 50;
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
    //print('hi');
    if(random()<0.01){
      enemies.push(new Enemy(random(600)));
    }
    for(i=0;i<enemies.length;i++){
      enemies[i].show();
      enemies[i].move();
      enemies[i].checkCollision(i);
    }

    for(i = 0;i<shots.length;i++){
      shots[i].show();
      shots[i].move(i);
    }
    if(keyIsDown(DOWN_ARROW))
    {
      if(shipY+shipH+5<=600)
        shipY += 5;
    }
    if(keyIsDown(UP_ARROW)){
      if(shipY-5>=0)
        shipY -=5;
    }
}
  
function checkit(x, y, w, h, x2, y2, w2, h2){
  if (x + w >= x2 &&    // r1 right edge past r2 left
x <= x2 + w2 &&    // r1 left edge past r2 right
y + h >= y2 &&    // r1 top edge past r2 bottom
y <= y2 + h2) {    // r1 bottom edge past r2 top
  return true;
}
return false;
}