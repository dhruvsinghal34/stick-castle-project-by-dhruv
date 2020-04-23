const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var box9,box10,box11,box12,box13,box14,box15,box16;
var triangle1,triangle2,triangle3;
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
     box1=new Box(320,200,90,40);
     box2=new Box(320,150,80,40);
     box3=new Box(320,100,40,40);
     box4=new Box(320,50,40,40);
     box5=new Box (320,30,40,40);
     box6=new Box(320,20,40,40);
     box7=new Box (320,10,40,40)
     box9= new Box (900,200,90,40);
     box10=new Box(900,150,80,40);
     box11=new Box(900,100,40,40);
     box12=new Box(900,50,40,40);
     box13=new Box(900,30,40,40);
     box14=new Box(900,20,40,40);
     box15=new Box (900,10,40,40);
     box16=new Box(620,100,400,200);
     triangle1=new Triangle(900,0,3,19);
     triangle2=new Triangle(320,0,3,19);
     triangle3=new Triangle(650,0,3,200);
    ground = new Ground(600,600,1200,20);
}

function draw(){
    background("blue,yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display ();
    box16.display();
   
    triangle1.display();
    triangle2.display();
    triangle3.display();
    ground.display();
}