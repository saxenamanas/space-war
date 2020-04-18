let shipX = 1;
let shipY = 1;
let shipW = 50;
let shipH = 30;

var shots = [];

function setup() {
  createCanvas(1000, 600);
  
}

function keyPressed(){
  if(keyCode==ENTER){
    shots.push(new Bullets((shipY+30)/2));
  }
}


function draw() {
    background(200);
    rect(shipX,shipY,shipW,shipH);
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
    print(shots.length);
}
  
