class Enemy{
    constructor(y){
        this.x = 1066;
        this.y = y;
        this.w = 80;
        this.h = 40;
    }

    show(){
        image(ufo,this.x,this.y,this.w,this.h);
    }

    move(i){
        if(this.x>0){
            this.x = this.x - 5;
        }
         else{
             enemies.splice(i,1);
         }
    }
    
    

     checkCollision(j){
         try{
            print("Trying to check");
         for(let i = 0;i<shots.length;i++){
             if(checkit(this.x,this.y,this.w,this.h,shots[i].x,shots[i].y,shots[i].w,shots[i].h)==true){
                 print('target hit');
                 shots.splice(i,1);
                 enemies.splice(j,1);
             }
         }
         }catch(e){
             
         }
         
     }
}