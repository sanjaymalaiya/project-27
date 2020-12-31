class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.seatY=seatY;
        var options={
            bodyA=body1,
            bodyB=body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.Rope);
}

    display(){
        var point1=this.Rope.bodyA.position;
        var point2=this.Rope.bodyB.position;
        strokeweight(3)
        var Anhor1X=point1.x;
        var Anhor1Y=point1.y;
        var Anhor2X=point2.x+this.offsetX;
        var Anhor2Y=point2.y+this.offsetY;

        Line(Anhor1X,anhor1Y,Anhor2X,Anhor2Y);

    }





}