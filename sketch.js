const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(200,100);
    rubber= new Rubber (900,450,70);
    stone = new stone(700,320,120,100);
    iron=new iron(410,210,80, PI/2);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   
 rubber.display();
 stone.display();
 iron.display();
}