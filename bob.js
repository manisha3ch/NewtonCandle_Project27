class Bob{
    constructor(x,y,rad){
        var options = {
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.r = rad;
        this.x = x;
        this.y = y;
        this.image = loadImage("bob.png");
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill('green');
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image,0,0,this.r*6,this.r*6);
        pop();
    }
}
