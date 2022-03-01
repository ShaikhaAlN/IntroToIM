//global variables that will help create and control the egg yolk
let YolkYposition=30
let YolkYspeed=4
let Transparency=0

//preloading images used (egg, egg crack, egg yolk, and bowl)
function preload() {
  Egg1 = loadImage("IMG_0809 (1).png");
  // not used because it had the yolk attached to the egg: Egg2 = loadImage("IMG_0808 (1).png");
  Egg3 = loadImage("IMG_0810 (1).png");
  Egg4 = loadImage("IMG_0811 (1).png");
  bowlFront = loadImage("IMG_0812 (1).png")
}

//allowing users to crack egg when in parameters of the bowl by replacing it with another image. 
//also controls visibility of yolk and respawining next to the egg to be only when the mouse is released.
//allows users to grab another egg outside paramaters by reseting to default egg shape
function mouseReleased() {
    if (mouseX>133 && mouseX<284) {
  Egg1 = loadImage("IMG_0810 (1).png"); //Egg3
    Transparency=255
      YolkYposition=30
        }
  else {
  Egg1 = loadImage("IMG_0809 (1).png"); //Egg1
    Transparency=0
  }
}

//Drawing the images on the canvas, and assigning a speed to the yolk. 
//used push() and pop() to assign tint() transparency only to the yolk
function draw() {
  createCanvas(400, 400);
  YolkYposition+=YolkYspeed
  background(255);
  imageMode(CENTER)
  push()
  tint(255, Transparency)
  image(Egg4, mouseX, mouseY+YolkYposition,200,200)
  pop()
  fill(200)
  noStroke()
  rect(0,338,400,100)
  image(Egg1, mouseX, mouseY+30,200,200); 
  image(bowlFront, 200, 300,300,300)
  print(mouseX,mouseY)
}
