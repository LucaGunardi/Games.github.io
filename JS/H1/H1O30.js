var rij = 0;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
    for (var kolom = 0;kolom < 450;kolom += 50) for (var rij = 0;rij < 450;rij += 50){
      rect(kolom,rij,50,50);
      if (rij == 100 && kolom == 300){
        fill('orange');
      } else {
        fill('white');
      }
    }
}