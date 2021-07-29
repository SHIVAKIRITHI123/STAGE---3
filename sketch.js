const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var arrows=[];
var arrow;

function preload(){
  backgroundImg = loadImage("assets/background.gif")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300,random(350,height-300),180,150);
  player = new Player(285,playerBase.body.position.y-153,50,180);
  playerArcher = new PlayerArcher(325,playerBase.body.position.y-190,120,120);

  computerBase = new ComputerBase(width-300,random(350,height-300),180,150);
  computer = new Computer(width - 280,computerBase.body.position.y-153,50,180);
  computerArcher = new ComputerArcher(width - 320,computerBase.body.position.y - 190,120,120);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  fill("#FFFF");
  textAlign("center");
  textSize(12);
  text("Press Up Arrow to moveup", width / 2, 150);

  fill("#FFFF");
  textAlign("center");
  textSize(12);
  text("Press Down Arrow to movedown", width / 2, 170);

  playerBase.display();
  player.display();
  computerBase.display();
  computer.display();
  playerArcher.display();
  computerArcher.display()

 for (var i = 0; i < arrows.length; i++) {
  showArrows(i, arrows);
 }
}
function keyPressed() {
  if(keyCode === 32){
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;

    var arrow = new Arrow(posX, posY, 100, 10);

    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    arrows.push(arrow);
  }
}
function keyReleased () {
  if(keyCode === 32){
    if (arrows.length) {
      var angle = playerArcher.body.angle+PI/2;
      arrows[arrows.length-1].shoot(angle);
    }
  }
}
//Display arrow and Tranjectory
function showArrows(index, arrows) {
  arrows[index].display();
}