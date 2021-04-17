function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function snow(){
  snow.image("snow1.png")
  density=5
  friction=2
}