var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
function preload() {
img1 = loadImage("traffic.jpg");
img2 = loadImage("red car.png");
img3 = loadImage("cyclist.png");
img4 = loadImage("traffic emoji.png");
img5 = loadImage("pandora.png");
img6 = loadImage("galaxy.jpg");
}
function setup() {
  createCanvas(1500, 1400);
  fill("traffic emoji.png");
background("traffic.jpg");
}

function draw() {
image(img1,400, 400);
  image(img2,mouseY,170);
  image(img3,mouseX, 350);
 image(img4, mouseX, mouseY, 63, 63);

}
 function mousePressed(){
   background(img6);

 }
  function mouseReleased(){
    background(img1);
  }
