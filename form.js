let idol;

function preload() {
  // Load model with normalise parameter set to true
  idol = loadModel("assets/tiger.obj", true);
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  describe(
    "Vertically rotating 3-d ivory netsuke tiger, sitting on a shoot of bamboo."
  );
}

function draw() {
  background(255);
  translate(-350, 0,100);
  scale(1.8); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // No need for normalMaterial() as normalization is set in preload
  strokeWeight(.6);
  stroke(0); // Outline the model in black
  fill(255); // Fill the model with light gray
  model(idol);
}
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle sidebar visibility
});