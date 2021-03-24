const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var chain;
var polygon, polygonImg;
var mGround, ground1, ground2;
var backgroundImg;
function preload(){
    getTime();
    polygonImg = loadImage("polygon.png");
 

}

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    
    box1 = new Box(650,250,rgb(255,255,255));
    
    box2 = new Box(650,320,rgb(255,255,0));
    box3 = new Box(700,320,rgb(255,255,0));
    box4 = new Box(600,320,rgb(255,255,0));
    
    box5 = new Box(650,390,rgb(255,69,0));
    box6 = new Box(700,390,rgb(255,69,0));
    box7 = new Box(600,390,rgb(255,69,0));
    box8 = new Box(750,390,rgb(255,69,0));
    box9 = new Box(550,390,rgb(255,69,0));
    
    box10 = new Box(650,460,rgb(255,0,0));
    box11 = new Box(700,460,rgb(255,0,0));
    box12 = new Box(750,460,rgb(255,0,0));
    box13 = new Box(600,460,rgb(255,0,0));
    box14 = new Box(550,460,rgb(255,0,0));
    box15 = new Box(500,460,rgb(255,0,0));
    box16 = new Box(800,460,rgb(255,0,0));

    
    box17 = new Box(1140,100,rgb(255,192,203));
    
    box18 = new Box(1140,170,rgb(255,105,180));
    box19 = new Box(1190,170,rgb(255,105,180));
    box20 = new Box(1090,170,rgb(255,105,180));
    
    box21 = new Box(1140,240,rgb(255,20,147));
    box22 = new Box(1190,240,rgb(255,20,147));
    box23 = new Box(1090,240,rgb(255,20,147));
    box24 = new Box(1240,240,rgb(255,20,147));
    box25 = new Box(1040,240,rgb(255,20,147));

    mGround = new Ground(width/2,height,width,20);
    
    ground1 = new Ground(650,505,390,20);
    ground2 = new Ground(1140,285,290,20);

    polygon = Bodies.circle(150,300,40);
    World.add(world,polygon);

    chain = new Chain(this.polygon,{x : 150, y : 300});
    
}

function draw(){
    Engine.update(engine);
    if(backgroundImg)
    background(backgroundImg);
    
    rectMode(CENTER);
    imageMode(CENTER);

    chain.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    mGround.display();

    ground1.display();
    ground2.display();
  
    image(polygonImg,polygon.position.x,polygon.position.y,60,60);

    textSize(22);
    textFont("Berlin Sans FB Demi")
    fill("white")
    text("Drag the HEXAGONAL STONE and release it, to hit it towards the blocks...",80,100)

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

async function getTime() {
    var res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var resjson = await res.json();
    var dt = resjson.datetime;
    var hour = dt.slice(11,13);
    console.log(hour + "text");

    if(hour>=6 && hour<=18) 
        bg = "bg.png"

    else 
        bg = "bg2.jpg"
    
    backgroundImg = loadImage(bg)
}