class Bullets{
    constructor(y){
        this.x = 50;
        this.y = y;
        this.w = 10;
        this.h = 5;
    }

    show(){
        image(bullet,this.x,this.y,this.w,this.h);
    }

    move(){
        if(this.x>1000){
            shots.splice(1,i);
        }
        this.x = this.x + 5;
    }
}