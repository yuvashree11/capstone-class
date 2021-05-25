class Rope {
    constructor(bodyA,pointB){

        var option = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250,
        }
        this.pointB = pointB;
        this.rope =  Constraint.create(option);
        World.add(world,this.rope);
    }

    attach(bodyA){
        this.rope.bodyA = bodyA;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
       if(this.rope.bodyA){
           var pointA = this.rope.bodyA.position;
           var pointB =this.pointB;
           push();
           fill("brown");
           strokeWeight(4);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
           pop();
       }
    }
}