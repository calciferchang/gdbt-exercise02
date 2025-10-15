function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10)
  stroke(0)
}

function mouseClicked() {
  switch (state) {
    case "text_hover":
      // add class to the highest level element?
      // as long as the cursor is over an element, the highest level element will have a class applied to it, which will allow actions to be applied to it.
      break;
    default:
      addText();
      break;
  }
}

function addText() {
  stickyNote = createDiv('Note');
  stickyNote.position(mouseX, mouseY);
  stickyNote.size(80, 20);
  stickyNote.style('font-size', '16px');
  stickyNote.style('font-family', 'Comic Sans MS');
  stickyNote.style('padding', '5px');
  stickyNote.draggable();
  stickyNote.elt.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Button clicked');
  });
  // Remember which note was clicked (this text)
  // Key inputs now will affect this text (how do select an element to have its innerHTML changed?)
}

let state = ""
