var p;
var boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fullscreen(true)
  p = new Player(0, 0, 20);
  for(let i = 0; i < 50; i++){
    boxes.push(new Box(random(-1000, 1000),
                       random(-1000, 1000),
                       random(-1000, 1000),
                       50));
  }
}

function draw() {
  background(64);
  camera(0, 150, 50,
    mouseX - width / 2, 100, height / 2 - mouseY,
    0, 0, -1);
  
  for(let i = boxes.length - 1; i>-1; i--){
    boxes[i].show();
  }
}

class Player {
  constructor(x, y, height) {
    this.pos = createVector(x, y);
    this.height = height;
  }

  update(t) {
    camera(this.pos.x, this.pos.y, this.height,
      t, this.pos.y - 5, 0,
      0, 1, 0);
  }
}


class Box {
  constructor(x, y, z, l) {
    this.pos = createVector(x, y, z);
    this.l = l;
    this.t = random(0, 10);
  }

  show() {
    normalMaterial();
    push();
    translate(this.pos);
    rotateX(this.t);
    rotateY(-this.t);
    box(this.l);
    pop();
    this.t += 0.01;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}
