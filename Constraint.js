class Constraint{
    constructor(a, b){
        var options = {
            bodyA: a,
            bodyB:b,
            length:10,
            stiffness:0.1,
        }
    
      this.c =  Matter.Constraint.create(options) 
      World.add(world, this.c);
console.log(this.c);

    }
    display(){
        line (this.c.bodyA.position.x, this.c.bodyA.position.y, this.c.bodyB.position.x, this.c.bodyB.position.y )
    }
}