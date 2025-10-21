let img;

let TILES_X = 80;
let TILES_Y = 60;

let TILE_W, TILE_H;

let FONT

let CHARS = "#/-. ";

function preload() {
  img = loadImage("p.jpg");
}

function setup() {
  createCanvas(600, 600);
  
  img.resize(TILES_X, TILES_Y);

  FONT = loadFont("JetBrainsMonoNerdFont-Regular.ttf") 

  TILE_W = width / TILES_X;
  TILE_H = height / TILES_Y;
  
  textAlign(CENTER, CENTER);
  textSize(12);
  textFont(FONT)
}

function draw() {

  background("#f1f1f1");
  noStroke();
  
  translate(TILE_W / 2, TILE_H / 2);

  for (let x = 0; x < TILES_X; x++) {
    for (let y = 0; y < TILES_Y; y++) {

      let c = img.get(x, y);
      let b = brightness(c);
      
      let selector = int( map(b,0,100,0,CHARS.length) - 1 );

      fill(0);
      
      push();
      translate(x * TILE_W, y * TILE_H);
      text(CHARS.charAt(selector), 0, 0);
      pop();
    }
  }
}
