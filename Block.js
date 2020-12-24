class Block{
    constructor(x,y,width,height){
        var options = {
            'restitution' :0,
            'friction' :0,
            'density' :1.0
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        Matter.Body.setStatic(this.body,false);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}