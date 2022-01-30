function setup() {
  
  //background and canvas size
  createCanvas(700, 700);
  background(230);
  
  //hijab
  fill(50)
  ellipse(354,350,400,500)
  
  //body
  noStroke()
  ellipse(354,750,480,500)
  
  //face shape
  fill(210,188,164)
  noStroke();
  ellipse(350,339,300,400)
  
  //hair
  fill(50)
  ellipse(270,180,60,60)
  ellipse(430,180,60,60)
  triangle(348,102,348,185,187,251)
  triangle(352,102,352,185,513,251)
  stroke(210,188,164)
  noFill()
  ellipse(350,339,300,400)
  
  //eyebrows
  fill(50)
  noStroke()
  ellipse(430,311,55,25)
  ellipse(270,311,55,25)
  
  //eyes
  noFill();
  stroke(50)
  //eyelids
  arc(433,376,80,70,3.4,5.5);
  arc(267,376,80,70,3.9,6);
  arc(433,377,80,70,3.4,5.5);
  arc(267,377,80,70,3.9,6);
  //eyelashes
  line(245,363,237,368)
  line(248,367,242,374)
  line(455,363,463,368)
  line(452,367,458,374)
  //pupils
  fill(50)
  ellipse(280,365,40,40)
  ellipse(420,365,40,40)
  
  //nose
  noStroke()
  fill(210,174,161)
  ellipse(350,447,30,30)
  fill(194,169,144)
  ellipse(350,450,25,20)
  
  //lips
  fill(151,98,90)
  ellipse(350,490,50,20)
  stroke(108,66,56)
  line(320,489,380,489)
  line(320,490,380,490)
  line(320,491,380,491)
  
  //blush
  noStroke()
  fill(210,174,161)
  ellipse(255,417,70,70)
  ellipse(445,417,70,70)
  
  //heart
  fill(172,85,84)
  triangle(350,90,381,47,319,47)
  arc(365,48,31,31,3,6.2);
  arc(335,48,31,31,3,6.2);
}
function draw() {
  //mouse guide
  print(mouseX,mouseY)
}
