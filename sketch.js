let notes = [];
let fontSize = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  stroke(0);
  textSize(fontSize);
}

function draw() {
  background(255);
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    note.display();
    if (
      mouseX > note.x &&
      mouseX < note.x + note.w &&
      mouseY > note.y &&
      mouseY < note.y + note.h
    ) {
      note.isChangeable();
    }
  }
}

function mouseClicked() {
  notes.push(new StickyNote("New", mouseX, mouseY));
}

function keyReleased() {
  console.log(key);
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];

    if (
      mouseX > note.x &&
      mouseX < note.x + note.w &&
      mouseY > note.y &&
      mouseY < note.y + note.h
    ) {
      note.changeText(key);
    }
  }
}

class StickyNote {
  constructor(txt, x, y) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.w = textWidth(txt);
    this.h = fontSize;
  }

  display() {
    text(this.txt, this.x, this.y);
  }
  changeText(txt) {
    this.txt = txt;
  }
}

let state = "";
