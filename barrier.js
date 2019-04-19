function barrier() {
      this.x = w;
      this.y = 50;
      this.gravity = -5; //the force of gravity
      this.lift = -10; //opposing the force of gravity
      this.velocity = 0; //player velocity
      
      this.show = function() {
       /* fill(color('green')); */
        image(candy1, this.x, this.y,300,300);
       /* rect(this.x,this.y,100,200); */
       
      }

       this.update= function() {
         this.velocity += this.gravity; //applied when not jumping
         this.x += this.velocity; //position on the y axis
         this.velocity *= 0.2; //air resistance when the ball drops down
         
         if(this.x< 0-50) {
           this.y = Math.floor(Math.random()*h-50);
           
           this.velocity = 0; //gravity
           this.x = w;
           this.gravity--;
             if(this.gravity<-5){
               this.gravity=-5;
             }
           score++;
             if((score>5)&&(score<10)){
               
             }
         }
       }
}



function barrier2() {
       this.x= w;
       this.y= 100;
       this.gravity= -1; //force of gravity
       this.lift= -10; //opposite
       this.velocity= 0; //velocity of player
      
       this.show= function() {
        /* fill(color('green')); */
         image(candy2, this.x, this.y,200,200);
         /* rect(this.x, this.y, 100, 200); */
         strokeWeight(0);
       }
      
       this.update= function() {
         this.velocity += this.gravity; //gravity when not jumping
         this.x += this.velocity; //changing the position on the y axis
         this.velocity *= 0.8; //air resistance when the ball drops down
         
         if(this.x<5) {
           this.y = Math.floor(Math.random()*h-40);
           this.velocity = 0;
           this.x = w;
           score++;
         }
       }
}


    
    function keyPressed() {
      if (keyCode === 32) {
        jumper.up();
      }
    }
