var box;
var edges;

function setup() {
  createCanvas(400,400);
  background("yellow");
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "blue";
  edges = createEdgeSprites();
}

function draw() {
  box.collide(edges);
  if(keyDown("right")) {
    box.x = box.x + 10;
    background("red");
  }
  if(keyDown("left")) {
    box.x = box.x - 10;
    background("orange");
  }
  if(keyDown("up")) {
    box.y = box.y - 10;
    background("lime");
  }
  if(keyDown("down")) {
    box.y = box.y + 10;
    background("purple");
  }
  drawSprites();
}