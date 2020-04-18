class Enemy{
    constructor(y){
        this.x = 1066;
        this.y = y;
        this.w = 50;
        this.h = 40;
    }

    show(){
        image(ufo,this.x,this.y,this.w,this.h);
    }

    move(){
        if(this.x>=0){
            this.x = this.x - 5;
        }
      enemies.splice(1,i);
    }
}