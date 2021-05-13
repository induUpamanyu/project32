class Block {

    constructor(x, y, width, height) {

        var options={
          'restitution' : 0.7,
          'friction' : 0.6,
          'isStatic' : false
          
        }

        this.visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display(){
        console.log(this.body.speed);

        if (this.body.speed < 4){
          var pos = this.body.position;
          var angle = this.body.angle; 
          push();
          translate(pos.x,pos.y)
          rotate(angle)
          rectMode(CENTER);
          rect(0,0, this.width, this.height);
          pop();
        } else {
            World.remove(world,this.body)
            if(this.remove===true){
              score = score+50;
            }
            push();
            this.visibility = false
            pop();
        }
      }


}


