class Chain{


    constructor (body1,body2,offsetX,offsetY) {
    this.offsetX=offsetX;
    this.offsetY=offsetY;


    var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY},
    length:350,
    }
    //this.pointB=pointB;
    this.chain=Constraint.create (options)
    
    World.add (world,this.chain)
  
    }

    display () {
  if (this.chain.bodyA){
  var pointA=this.chain.bodyA.position;
  var pointB=this.chain.bodyB.position;
  push ()
  strokeWeight(5)
  line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)
  pop ()
  }  
    }
    }