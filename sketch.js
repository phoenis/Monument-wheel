function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(12);
  background(30);
  strokeWeight(0.5);
}

function draw() {
  translate(width/2,height/2);
  stroke(lerpColor(color('#ff0000'),color('#ffed00'),(frameCount%90)/90));

  line(200,0,200*cos(frameCount*4),200*sin(frameCount*4))
}