function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10)
  stroke(0)
}

function mouseDragged() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}
