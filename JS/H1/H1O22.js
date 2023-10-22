var kleur = 'indianred';
var afstand = 150;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  fill('black');  
  
  mouseX=constrain(mouseX,25,width - 25);
  mouseY=constrain(mouseY,25,height - 25);

  
  if (mouseX >= width - 30 || mouseX <= width - 420 || mouseY >= height - 30 || mouseY <= height - 420 || afstand <= 75) {
    kleur='red';
  }
  else {
    kleur='indianred';
  }

  if (mouseX >= width -225) {
    background('white');
  }
  else {
    background('yellow');
  }
  
  ellipse(width / 2,height / 2,100);
  tekenJos(mouseX,mouseY,kleur);
  afstand = dist(mouseX,mouseY,225,225);
  text("Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY),10,20);
  
  text("Afstand = " + afstand,10,40);
}

function tekenJos(x,y,kleur) {
  push();
  translate(x,y);
  scale(1); 
  noStroke();
  fill(kleur);
  ellipse(0,0,50);
  fill('slategray');
  ellipse(-7,-10,17);
  ellipse(7,-10,17);
  fill('white');
  ellipse(-7,-8,7,13);
  ellipse(7,-8,7,13);
  fill('orange');
  ellipse(0,3,17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}