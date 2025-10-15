function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10)
  stroke(0)
}

function mouseClicked() {
  stickyNote = createDiv('Note');
  stickyNote.position(5, 5);
  stickyNote.size(80, 20);
  stickyNote.style('font-size', '16px');
  stickyNote.style('font-family', 'Comic Sans MS');
  stickyNote.style('padding', '5px');
  stickyNote.draggable();
  stickyNote.mouseClicked()
}

