const cerealxspeed = 0;
const cerealyspeed = 4;
const cerealSize = 20;
const cerealStrokeWeight = 9;
const milkxspeed = 0;
const milkyspeed = 4;
const milkSizex = 40;
const milkSizey = 120;
const milkStrokeWeight = 9;
layerTransparency1 = 0;
layerTransparency2 = 0;
layerTransparency3 = 0;

//cookie cutter for the falling cereal
class MovingCereal {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xspeed = cerealxspeed;
    this.yspeed = cerealyspeed;
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  checkLanding() {
    if (this.y > random(450, 600)) {
      this.y = 120;
    }
  }

  drawCereal() {
    stroke(172, 139, 71, layerTransparency1);
    noFill();
    push();
    strokeWeight(cerealStrokeWeight);
    circle(this.x, this.y, cerealSize);
    pop();
  }
}

//cookie cutter for the pouring milk
class MovingMilk {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xspeed = milkxspeed;
    this.yspeed = milkyspeed;
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  checkLanding() {
    if (this.y > random(450, 600)) {
      this.y = random(200, 300);
    }
  }

  drawMilk() {
    noStroke();
    fill(250, 250, 250, layerTransparency2);
    push();
    strokeWeight(milkStrokeWeight);
    rect(this.x, this.y, milkSizex, milkSizey);
    pop();
  }
}

//arrays with quantities per loop
let myCerealArray = [];
let Cerealquantity = 20;
let myMilkArray = [];
let Milkquantity = 10;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < Cerealquantity; i++) {
    myCerealArray.push(new MovingCereal(random(225, 375), random(20, 70)));
  }
  for (let i = 0; i < Milkquantity; i++) {
    myMilkArray.push(new MovingMilk(random(270, 290), random(200, 300)));
  }
}

function draw() {
  background(200);
  background(200, 200, 200, layerTransparency1);

  //option1 'start!'
  fill(250, 250, 250);
  stroke(0);
  rect(500, 60, 50, 50);

  //cereal box
  fill(14, 76, 169);
  quad(100, 100, 100, 500, 50, 470, 50, 70);
  quad(50, 70, 100, 100, 420, 100, 370, 70);
  fill(20, 100, 220);
  rect(100, 100, 320, 400);
  fill(250, 250, 250);
  rect(100, 240, 320, 100);
  quad(100, 240, 100, 340, 50, 320, 50, 220);

  //text 'Start!'
  fill(0);
  textSize(20);
  text("Start!", 500, 90);
  textSize(30);
  text("Cereal Simulator", 150, 300);

  //layer 1 (cereal pouring)
  background(230, 230, 230, layerTransparency1);

  //table
  stroke(0, 0, 0, layerTransparency1);
  fill(216, 135, 104, layerTransparency1);
  quad(100, 500, 500, 500, 800, 700, -190, 700);
  fill(14, 76, 169, layerTransparency1);

  //cereal box opening
  quad(297, 30, 211, 264, 238, 250, 325, 15);
  for (let i = 0; i < myCerealArray.length; i++) {
    myCerealArray[i].update();
    myCerealArray[i].checkLanding();
    myCerealArray[i].drawCereal();
  }

  //cereal box
  stroke(0, 0, 0, layerTransparency1);
  fill(20, 100, 220, layerTransparency1);
  push();
  rotate(radians(20));
  rectMode(CENTER);
  rect(100, 50, 380, 250);
  fill(250, 250, 250, layerTransparency1);
  rect(100, 50, 100, 250);
  pop();
  push();
  fill(0, 0, 0, layerTransparency1);
  textSize(40);
  rotate(radians(110));
  text("Cereal", 10, -90);
  pop();
  fill(14, 76, 169, layerTransparency1);
  quad(297, 30, 325, 15, 257, -12, 221, 0);

  //option2 'Milk!'
  fill(250, 250, 250, layerTransparency1);
  stroke(0, 0, 0, layerTransparency1);
  rect(500, 120, 50, 50);

  //text 'Milk!'
  fill(0, 0, 0, layerTransparency1);
  textSize(20);
  text("Milk!", 505, 150);

  //spoon
  fill(207, 208, 207, layerTransparency1);
  rect(mouseX - 70, mouseY, 150, 5);
  arc(mouseX - 120, mouseY, 125, 50, 6.28, 3.14);
  ellipse(mouseX - 120, mouseY, 125, 10);

  //bowl
  fill(114, 137, 114, layerTransparency1);
  arc(300, 450, 350, 300, 6.28, 3.14);

  //layer2 (milk)
  background(230, 230, 230, layerTransparency2);
  stroke(0, 0, 0, layerTransparency2);
  fill(216, 135, 104, layerTransparency2);
  quad(100, 500, 500, 500, 800, 700, -190, 700);
  fill(14, 76, 169, layerTransparency2);
  for (let i = 0; i < myMilkArray.length; i++) {
    myMilkArray[i].update();
    myMilkArray[i].checkLanding();
    myMilkArray[i].drawMilk();

    //milk box
    stroke(0, 0, 0, layerTransparency2);
    fill(235, 199, 185, layerTransparency2);
    quad(225, 232, 287, 62, 324, 48, 260, 218);
    quad(287, 62, 324, 48, 196, 0, 117, 0);
    push();
    rotate(radians(20));
    rectMode(CENTER);
    rect(100, 50, 380, 180);
    fill(250, 250, 250, layerTransparency2);
    rect(100, 50, 100, 180);
    ellipse(310, 90, 25, 50);
    fill(170, 170, 170, layerTransparency2);
    ellipse(315, 90, 15, 45);
    pop();
    push();
    fill(0, 0, 0, layerTransparency2);
    textSize(40);
    rotate(radians(110));
    text("Milk", 10, -90);
    pop();

    //option3 'Done!'
    fill(250, 250, 250, layerTransparency2);
    stroke(0, 0, 0, layerTransparency2);
    rect(500, 180, 50, 50);

    //text 'Done!'
    fill(0, 0, 0, layerTransparency2);
    textSize(18);
    text("Done!", 500.5, 210);

    //spoon
    fill(207, 208, 207, layerTransparency2);
    rect(mouseX - 70, mouseY, 150, 5);
    arc(mouseX - 120, mouseY, 125, 50, 6.28, 3.14);
    ellipse(mouseX - 120, mouseY, 125, 10);

    //bowl
    fill(114, 137, 114, layerTransparency2);
    arc(300, 450, 350, 300, 6.28, 3.14);

    //layer3 (Done!)
    background(230, 230, 230, layerTransparency3);
    stroke(0, 0, 0, layerTransparency3);
    fill(114, 137, 114, layerTransparency3);
    arc(300, 370, 450, 400, 6.28, 3.14);
    arc(300, 370, 450, 250, 3.14, 6.28);
    ellipse(300, 350, 400, 170);
    fill(250, 250, 250, layerTransparency3);
    ellipse(300, 360, 400, 150);
    push();
    stroke(172, 139, 71, layerTransparency3);
    noFill();
    strokeWeight(11);
    //variation 1
    circle(213, 336, 30);
    circle(170, 331, 30);
    circle(300, 290, 30);
    circle(393, 343, 30);
    circle(344, 353, 30);
    circle(312, 364, 30);
    circle(257, 372, 30);
    circle(266, 321, 30);
    circle(283, 342, 30);
    circle(224, 384, 30);
    circle(254, 396, 30);
    circle(408, 381, 30);
    circle(330, 315, 30);
    circle(453, 354, 30);
    circle(166, 375, 30);
    circle(155, 350, 30);
    circle(181, 368, 30);
    circle(191, 392, 30);
    circle(286, 382, 30);
    circle(237, 325, 30);
    circle(243, 346, 30);
    circle(301, 318, 30);
    circle(343, 389, 30);
    circle(320, 408, 30);
    circle(375, 372, 30);
    circle(379, 319, 30);
    circle(428, 330, 30);
    circle(425, 368, 30);
    pop();

    //text 'Enjoy!'
    fill(0, 0, 0, layerTransparency3);
    textSize(50);
    text("Enjoy!", 230, 220);

    //text 'click anywhere to restart'
    textSize(15);
    text("click anywhere to restart :)", 410, 590);

    //spoon
    fill(207, 208, 207, layerTransparency3);
    rect(mouseX - 70, mouseY, 150, 5);
    arc(mouseX - 120, mouseY, 125, 50, 6.28, 3.14);
    ellipse(mouseX - 120, mouseY, 125, 10);
    fill(250, 250, 250, layerTransparency3);
    ellipse(mouseX - 120, mouseY + 2, 125, 5);
    push();
    stroke(172, 139, 71, layerTransparency3);
    noFill();
    strokeWeight(9);
    circle(mouseX - 120, mouseY - 5, 20);
    circle(mouseX - 135, mouseY - 9, 20);
    pop();
    print(mouseX, mouseY);
  }
}

//creating a button by setting boundaries between the mouse coordinates and rectangle shape
function mouseIsWithinRect(x, y, sizeX, sizeY) {
  if (mouseX > x && mouseX < x + sizeX && mouseY > y && mouseY < y + sizeY) {
    return true;
  }
  return false;
}

//activating or deactivating layers by manipulating transparency values set in fill() or stroke() variables
function mouseClicked() {
  if (mouseIsWithinRect(500, 60, 50, 50)) {
    layerTransparency1 = 500;
  } else {
    layerTransparency1 = 0;
  }
  if (mouseIsWithinRect(500, 120, 50, 50)) {
    layerTransparency2 = 500;
  } else {
    layerTransparency2 = 0;
  }
  if (mouseIsWithinRect(500, 180, 50, 50)) {
    layerTransparency3 = 500;
  } else {
    layerTransparency3 = 0;
  }
}
