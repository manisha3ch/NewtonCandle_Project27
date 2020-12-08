class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.wd = width;
        this.ht = height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        noFill();
        rect(pos.x,pos.y,this.wd,this.ht);
    }
}