let timer = 240;
var ps;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;
var b13;
var b14;
function setup() { 
  createCanvas(400, 400);
  //buttons
  b1=createButton("10sec");
  b2=createButton("20sec");
  b3=createButton("30sec");
  b4=createButton("40sec");
  b5=createButton("50sec");
  b6=createButton("1min");
  b7=createButton("2min");
  b8=createButton("5min");
  b9=createButton("10min");
  b10=createButton("30min");
  b11=createButton("1hr");
  //mousepressed in setup to increase only by specific number (draw repeats)
  b12=createButton("+1min"); 
  b12.mousePressed(t12);
  b12.position(155,430);
  b13=createButton("+5min"); 
  b13.mousePressed(t13);
  b13.position(210,430);
  b13=createButton("+10min"); 
  b13.mousePressed(t14);
  b13.position(265,430);
} 
function preload(){
  ps=loadSound("a.mp3");
}
function draw() { 
   background(random(0,255),random(0,255),random(0,255));
  frameRate(1);
  textSize(100);
  text(timer, width/2-75, height/2);
  timer-=1;
   b1.mousePressed(t1);
  b1.position(5,400);
   b2.mousePressed(t2);
    b2.position(60,400);
   b3.mousePressed(t3);
  b3.position(115,400);
   b4.mousePressed(t4);
  b4.position(170,400);
   b5.mousePressed(t5);
  b5.position(225,400);
   b6.mousePressed(t6);
  b6.position(280,400);
   b7.mousePressed(t7);
  b7.position(330,400);
    b8.mousePressed(t8);
  b8.position(380,400);
   b9.mousePressed(t9);
  b9.position(5,430);
   b10.mousePressed(t10);
  b10.position(60,430);
   b11.mousePressed(t11);
  b11.position(115,430);

  if (timer == -1) {
    text("over", 200, 150);
    timer+=1
    noLoop();
    ps.play();
  }
  text(timer/60+0.01667,35,300);
  textSize(50);
  text("min",150,350);
  text("sec",150,50);
}
function t1(){
  timer=10;
}
function t2(){
  timer=20;
}
function t3(){
  timer=30;
}
function t4(){
  timer=40;
}
function t5(){
  timer=50;
}
function t6(){
  timer=60;
}
function t7(){
  timer=120;
}
function t8(){
  timer=300;
}
function t9(){
  timer=600;
}
function t10(){
  timer=1800;
}
function t11(){
 timer=3600; 
}
function t12(){
 timer = timer + 60; 
}
function t13(){
 timer = timer + 300; 
}
function t14(){
 timer = timer + 600; 
}
