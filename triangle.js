class Triangle  {
    constructor(x, y,sides,radius ) {
      var options = {
          'restitution':0.1,
          'friction':100,
          'density':2.0
      }
      this.body = Bodies.polygon(x, y,sides , radius, options);
      this.sides = sides;
      this.radius = radius;
       World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      var vertex=this.body.vertices;
      console.log (this.body.vertices);
      push();
     
      fill(255);
      triangle(vertex[0].x,vertex[0].y,vertex[1].x,vertex[1].y,vertex[2].x,vertex[2].y)
      pop();
    }
  };
