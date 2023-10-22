var diameter = 300;
var heightGREEN = 0;
var heightBLUE = 450;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  ellipse(width / 2,height / 2,diameter);

  fill(0,255,0,0.5);
  ellipse(width / 2,heightGREEN,diameter);

  fill(0,0,255,0.5);
  ellipse(width / 2,heightBLUE,diameter);

  heightGREEN += 1;
  heightBLUE -= 1;


}