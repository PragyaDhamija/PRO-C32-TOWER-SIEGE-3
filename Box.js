class Box{
    constructor(x,y,color){
        var options = {
            restitution : 0.5,
            density : 0.5

        }

        this.vis = 255;
        this.body = Bodies.rectangle(x,y,50,70,color,options);
        this.color = color;
        this.width = 50;
        this.height = 70;
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;

        fill(this.color);
        strokeWeight(5);
        if(this.body.speed<5) {
            rect(pos.x,pos.y,this.width,this.height);
        }
        else{
            World.remove(world,this.body);
            push()
            this.vis = this.vis-5
            tint(255,this.vis);
            pop()

        }
        
      }

}