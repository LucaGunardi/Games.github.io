var spriteSheet;
var rij = 0;
var aantalSpriteRijen = 4;
var aantalSpriteKolommen = 12;

var schaal = 2.0;
var breedte; 
var hoogte; 
var sBr; 
var sHo; 
var br;
var ho; 
var x = 190; 
var y = 100;

function preload() {
  spriteSheet = loadImage("images/sprites/Pony.png");
}

function setup() {
  canvas = createCanvas(460,280);
  canvas.parent('processing');
  textFont("Georgia");
  textSize(18);
  noStroke();
  frameRate(10);
  breedte = spriteSheet.width;
  hoogte = spriteSheet.height;
  sBr = breedte / aantalSpriteKolommen;
  sHo = hoogte / aantalSpriteRijen;
  br = sBr*schaal;
  ho = sBr*schaal;
}

function draw() {
  background('lavender');
  image(spriteSheet,x,y,br,ho,(frameCount % aantalSpriteKolommen)*sBr,rij*sHo,sBr,sHo);

  if (keyIsDown(LEFT_ARROW)) {
    xJos -= celGrootte;
    nummer = 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJos += celGrootte;
    nummer = 1;
  }
  if (keyIsDown(UP_ARROW)) {
    yJos-=celGrootte;
    nummer = 4;
   
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += celGrootte;
    nummer = 5;
  }
  
  xJos = constrain(xJos,0,width - celGrootte);
  yJos = constrain(yJos,0,height - celGrootte);
}