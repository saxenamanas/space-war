class Bullets{
    constructor(y){
        this.x = 0;
        this.y = y;
        this.w = 10;
        this.h = 5;
    }

    show(){
        rect(this.x,this.y,this.w,this.h);
    }

    move(){
        if(this.x>1000){
            shots.splice(1,i);
        }
        this.x = this.x + 5;
    }
}