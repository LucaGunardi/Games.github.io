var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
  xJos=400;
  yJos=300;
}

function draw() {
  image (brug,0,0,901,601);
  image (spriteJos,xJos,yJos);
  tekenRaster();
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0;rij < aantalRijenRaster;rij++) {
    for (var kolom = 0;kolom < aantalKolommenRaster;kolom++) {
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);
    }
  }
  
      rect(4*celGrootte,2*celGrootte,celGrootte,celGrootte);

  /*
  Maak hieronder een dubbele herhaling om een raster te maken.
  HINT: je kunt terugkijken naar het raster dat je in H1 hebt gemaakt.
  Maak gebruik van de variabelen die bovenaan zijn gedeclareerd.
  */
  
      rect(4*celGrootte,2*celGrootte,celGrootte,celGrootte);

  pop();
}
