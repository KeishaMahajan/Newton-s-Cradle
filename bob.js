class Bob {

    constructor (x,y,diameter) {
    var options={
        isStatic:false,
        restitution:1.0,
        friction:0,
        density:0.1
    }
    this.body=Bodies.circle (x,y,diameter/2,options)
    this.diameter=diameter;
    World.add (world,this.body)
    }
    
    display(){
    push();
    fill ("magenta")
    translate(this.body.position.x,this.body.position.y);
    //ellipseMode (RADIUS)
    rectMode (CENTER)
    ellipse (0,0,this.diameter,this.diameter);
    pop();
    }
    }