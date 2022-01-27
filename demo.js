function setup() {
  createCanvas(500,500);
  background(204,204,255);
  
  //draw two circles of two different shades of purple
  fill(204,175,255);
  stroke(204,175,255);
  circle(100,100,150);
  fill(104,75,155);
  stroke(104,75,155);
  circle(200,200,150);
  
  //draw a rectangle and an ellipse
  rect(380,80,80,20)
  ellipse(100,280,80,120)
  
  //use 'let' to shortcut radians command
  let x = radians(100)
  print(x)
  
  //draw a line and an arc
  stroke(204,175,255);
  line(0,100,500,500);
  fill(204,204,255)
  arc(50, 50, 100, 100, 0,//x-axis
      x);
}
