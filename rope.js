class Rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
	var options={
		bodyA: body1,
        bodyB: body2,
        pointA:{x:0,y:-15},
        pointB:{x:this.offsetX, y:this.offsetY},
		stiffness : 1
	}

	this.rope=Constraint.create(options);
    World.add(myWorld,this.rope);
    }

    display(){

       // console.log(this.rope.bodyA.position);
       // console.log(this.rope.bodyB.position);

        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        strokeWeight(2);
        stroke('#f80404');

        var Anchor1X=posA.x
        var Anchor1Y=posA.y-20
    
        var Anchor2X=posB.x+this.offsetX
        var Anchor2Y=posB.y+this.offsetY
        /*
        For thread coming from one position
        var Anchor2X=posB.x
        var Anchor2Y=posB.y*/
        //console.log("Line Values"+Anchor1X+","+Anchor1Y+","+Anchor2X+","+Anchor2Y);
    
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }

}
