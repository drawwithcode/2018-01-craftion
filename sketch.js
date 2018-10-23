var x, y;
var angle1 = 0.0;
var angle2 = 0.0;
var segLength = 100;



function setup() {
  // define artboard size
  createCanvas(500, 500);
  // Set here the values that are not changing all over the sketch

}

function draw() {
  background('#E5E281');


  angle1 = (mouseX / float(width) - 0.5) * -TWO_PI;
  angle2 = (mouseY / float(height) - 0.5) * PI;

  noStroke();
  //Neck
	push();
	fill('#B26800')
  rect(240, 250, 20, 100);
	pop();
	push();
	fill('#FFBC5E')
  rect(242, 250,4, 100);
	pop();


//middle wheel
  push();
  fill('#002952');
  ellipse(250, 410, 70, 70);
  pop();
	push();
	fill('#004285');
	ellipse(250, 410, 50, 50);
	pop();
	push();
	fill('#002952');
	rect(240, 410, 35, 20);
	pop();



  //Body
	push();
  fill('#006CB2')
  rect(200, 310, 100, 100);
  pop();
  push();
  fill('#009AFF')
  rect(210, 320, 80, 80);
  pop();
  push();
  fill('#85CFFF')
  rect(220, 310, 15, 100);
  pop();

  //Head
	push();
  fill('#006CB2')
  ellipse(250, 250, 120, 90);
	pop();
	push();
	fill('#009AFF')
	ellipse(250, 250, 100, 70);
	pop();
	push();
	fill('#B26800')
	ellipse(230, 245, 30, 30);
	pop();
	push();
	fill('#B26800')
	ellipse(270, 245, 30, 30);
	pop();
	push();
	fill('#FFBC5E')
	translate(270,245);
  rotate(frameCount/20);
	ellipse(5,5, 15, 15);
	pop();
	push();
	fill('#FFBC5E')
	translate(230,245);
	rotate(frameCount/20);
	ellipse(5,5, 15, 15);
	pop();
	push();
	fill('#D77241')
	ellipse(250, 270, 25, 25);
	pop();
	push();
	fill('#B2004E')
	ellipse(250, 270, 20, 20);
	pop();



  //wheel
  push();
  fill('black');
  ellipse(220, 480, 30, 30);
  ellipse(280, 480, 30, 30);
  pop();
	push();
  fill('#002952');
  ellipse(220, 480, 20, 20);
  ellipse(280, 480, 20, 20);
  pop();
	//bottom
  push();
    fill('#006CB2')
  rect(200, 430, 100, 50);
  pop();
	push();
	fill('#009AFF')
	rect(210, 440, 80, 30);
	pop();
	push();
	fill('#85CFFF')
	rect(220, 430, 15, 50);
	pop();
	push();
	translate(300, 325);
	strokeWeight(20);
	stroke(178,104,0,200);
	segment(x, y, angle1);
	segment(segLength, 0, angle2);
	pop();
	push();
	translate(200, 325)
	strokeWeight(20);
	stroke(178,104,0,200);
	segment(x, y, angle1);
	segment(segLength, 0, angle2);

	pop();

}

function segment(x, y, a) {
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
}
