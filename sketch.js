let color = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  color = map(mouseX, 0, 600, 0, 255);
  background(color);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 50, 50);
}
