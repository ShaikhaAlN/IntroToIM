////////// Title page variables //////////
let titleYposition = 1;
let titleYspeed = 1;
let titlePageXandY = 0;
////////// Flour stage variables //////////
const flourXspeed = 0;
const flourYspeed = 4;
const flourxSize = 10;
const flourysize = 10;
let flourStageXandY = 0;
let transparencyFlour = 0;
////////// Egg stage variables //////////
let yolkYposition = 30;
let yolkYspeed = 4;
let transparencyYolk = 0;
let cartonNumber = 1;
let eggStageXandY = 0;
////////// Milk stage variables //////////
const milkXspeed = 0;
const milkYspeed = 4;
const milkxSize = 10;
const milkysize = 40;
let transparencyMilk = 0;
let milkStageXandY = 0;
////////// Chocolate stage variables //////////
let chocolateBitX;
let chocolateBitY;
let chocolateBitSpeed = 0;
let transparencyChocolateBit = 0;
let chocolateNumber = 1;
let chocolateXandY = 0;
////////// mixing stage variables //////////
let mixingXandY = 0;
////////// Oven stage variables //////////
let ovenXandY = 0;
let panTransparency = 0;

let endPageXandY = 0;

function preload() {
  backgroundPattern = loadImage("background.png");
  avatar = loadImage("avatar.png");
  counterTop = loadImage("counterTop.png");
  utensils = loadImage("utensils.png");
  gameTitle = loadImage("gameTitle.png");
  startButton = loadImage("startButton.png");
  bowlBack = loadImage("bowlBack.png");
  bowlFront = loadImage("bowl.png");
  flour1 = loadImage("flour.png");
  flour2 = loadImage("flour2.png");
  textBubble = loadImage("textBubble.png");
  nextButton = loadImage("nextButton.png");
  restartButton = loadImage("restartButton.png");
  egg1 = loadImage("egg1.png");
  egg2 = loadImage("egg2.png");
  eggYolk = loadImage("eggYolk.png");
  eggCarton = loadImage("eggCarton.png");
  eggCarton2 = loadImage("eggCarton2.png");
  eggCarton3 = loadImage("eggCarton3.png");
  eggCarton4 = loadImage("eggCarton4.png");
  eggCrack = loadSound('eggCrack.mp3');
  milk = loadImage("milk.png");
  pouringMilk = loadImage("pouringMilk.png");
  chocolateBit = loadImage("chocolateBit.png");
  chocolate = loadImage("chocolate.png");
  chocolate2 = loadImage("chocolate2.png");
  chocolate3 = loadImage("chocolate3.png");
  chocolate4 = loadImage("chocolate4.png");
  chocolate5 = loadImage("chocolate5.png");
  mixingSpoon = loadImage("mixingSpoon.png");
  mixingSpoon1 = loadImage("mixingSpoon.png");
  mixingSpoon2 = loadImage("mixingSpoon2.png");
  mixtureBowl = loadImage("mixtureBowl.png");
  ovenClosed = loadImage("ovenClosed.png");
  ovenClosed2 = loadImage("ovenClosed2.png");
  ovenOpen = loadImage("ovenOpen.png");
  pan = loadImage("pan2.png");
  finalCake = loadImage("finalCake.png");
}

////////// Flour Array //////////
class MovingFlour {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xspeed = flourXspeed;
    this.yspeed = flourYspeed;
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  checkLanding() {
    if (this.y > random(450, 600) && mouseX > 241 && mouseX < 398) {
      this.y = random(mouseY + 20, mouseY + 30);
      this.x = random(mouseX - 70, mouseX - 10);
    }
  }

  drawFlour() {
    noStroke();
    fill(231, 231, 231, transparencyFlour);
    rect(this.x, this.y, flourxSize, flourysize);
  }
}

// creating Flour array with 50 set as quantity

let myFlourArray = [];
let flourQuantity = 50;

class MovingMilk {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xspeed = milkXspeed;
    this.yspeed = milkYspeed;
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  checkLanding() {
    if (this.y > random(450, 600) && mouseX > 241 && mouseX < 456) {
      this.y = random(mouseY + 50, mouseY + 60);
      this.x = random(mouseX - 70, mouseX - 65);
    }
  }

  drawMilk() {
    noStroke();
    fill(231, 231, 231, transparencyMilk);
    rect(this.x, this.y, milkxSize, milkysize);
  }
}

let myMilkArray = [];
let milkQuantity = 50;

// inititating Flour array
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < flourQuantity; i++) {
    myFlourArray.push(new MovingFlour(random(212, 390), random(302, 505)));
  }
  for (let i = 0; i < milkQuantity; i++) {
    myMilkArray.push(
      new MovingMilk(
        random(mouseX - 10, mouseX),
        random(mouseY - 10, mouseY + 10)
      )
    );
  }
}

function mouseReleased() {
  ////// title page mousePressed actions //////
  if (
    mouseX > 233 &&
    mouseX < 380 &&
    mouseY > 502 &&
    mouseY < 575 &&
    titlePageXandY === 0
  ) {
    titlePageXandY = 1000;
    flourStageXandY = 0;
  }
  ////// Flour stage mousePressed actions //////
  if (
    mouseX > 241 &&
    mouseX < 398 &&
    titlePageXandY === 1000 &&
    flourStageXandY === 0
  ) {
    flour1 = flour2;
    transparencyFlour = 250;
    flourYposition = mouseY;
  } else {
    if (flourStageXandY === 0 && titlePageXandY === 1000) {
      flour1 = loadImage("flour.png");
      transparencyFlour = 0;
    }
  }
  ////// Next button from flour stage to egg stage //////
  if (
    mouseX > 517 &&
    mouseX < 592 &&
    mouseY > 8 &&
    mouseY < 35 &&
    flourStageXandY === 0 &&
    titlePageXandY === 1000
  ) {
    flourStageXandY = 1000;
    titlePageXandY = 1001;
    eggStageXandY = 0;
  }
  ////// Egg stage mousePressed actions //////
  if (mouseX > 195 && mouseX < 400 && flourStageXandY === 1000) {
    egg1 = loadImage("egg2.png");
    transparencyYolk = 255;
    yolkYposition = 30;
    eggCrack.play()
  } else {
    if (mouseX > 0 && mouseX < 133 && mouseY < 527 && mouseY > 421) {
      egg1 = loadImage("egg1.png");
      transparencyYolk = 0;
      cartonNumber += 1;
      eggCarton = loadImage("eggCarton" + cartonNumber + ".png");
    }
  }
  ////// Next button from egg stage to milk stage //////
  if (
    mouseX > 517 &&
    mouseX < 592 &&
    mouseY > 50 &&
    mouseY < 77 &&
    flourStageXandY === 1000 &&
    titlePageXandY === 1001 &&
    eggStageXandY === 0
  ) {
    flourStageXandY = 1000;
    titlePageXandY = 1002;
    eggStageXandY = 1000;
    milkStageXandY = 0;
  }
  ////// Milk stage mousePressed actions //////
  if (mouseX > 241 && mouseX < 456 && milkStageXandY === 0) {
    milk = pouringMilk;
    transparencyMilk = 250;
  } else {
    if (milkStageXandY === 0) {
      milk = loadImage("milk.png");
      transparencyMilk = 0;
    }
  }
  ////// Next button from milk stage to chocolate stage //////
  if (
    mouseX > 517 &&
    mouseX < 592 &&
    mouseY > 91 &&
    mouseY < 118 &&
    flourStageXandY === 1000 &&
    titlePageXandY === 1002 &&
    eggStageXandY === 1000
  ) {
    flourStageXandY = 1000;
    titlePageXandY = 1000;
    eggStageXandY = 1000;
    milkStageXandY = 1000;
    chocolateXandY = 0;
  }
  ////// Chocolate stage mousePressed actions //////
  if (
    mouseX > 30 &&
    mouseX < 129 &&
    mouseY > 402 &&
    mouseY < 550 &&
    milkStageXandY === 1000
  ) {
    egg1 = loadImage("egg2.png");
    transparencyChocolateBit = 255;
    chocolateNumber += 1;
    chocolate = loadImage("chocolate" + chocolateNumber + ".png");
  } else {
    if (mouseX > 195 && mouseX < 416 && chocolateXandY === 0)
      transparencyChocolateBit = 0;
  }
  ////// Next button from chocolate stage to mixing //////
  if (
    mouseX > 12 &&
    mouseX < 84 &&
    mouseY > 8 &&
    mouseY < 35 &&
    flourStageXandY === 1000 &&
    titlePageXandY === 1000 &&
    eggStageXandY === 1000 &&
    milkStageXandY === 1000 &&
    chocolateXandY === 0
  ) {
    flourStageXandY = 1000;
    titlePageXandY = 1000;
    eggStageXandY = 1000;
    milkStageXandY = 1000;
    chocolateXandY = 1000;
    mixingXandY = 0;
  }
  ////// Next button from chocolate stage to mixing //////
  if (
    mouseX > 12 &&
    mouseX < 84 &&
    mouseY > 50 &&
    mouseY < 77 &&
    flourStageXandY === 1000 &&
    titlePageXandY === 1000 &&
    eggStageXandY === 1000 &&
    milkStageXandY === 1000 &&
    chocolateXandY === 1000 &&
    mixingXandY === 0
  ) {
    flourStageXandY = 1000;
    titlePageXandY = 1000;
    eggStageXandY = 1000;
    milkStageXandY = 1000;
    chocolateXandY = 1000;
    mixingXandY = 1000;
    ovenXandY = 0;
  }
  ////// Oven stage mousePressed actions //////
  if (
    mouseX > 290 &&
    mouseX < 340 &&
    mouseY < 370 &&
    mouseY > 346 &&
    mixingXandY === 1000
  ) {
    ovenClosed = ovenOpen;
    panTransparency = 250;
  }
  if (
    mouseX > 51 &&
    mouseX < 295 &&
    mouseY < 515 &&
    mouseY > 391 &&
    mixingXandY === 1000
  ) {
    ovenClosed = ovenClosed2;
    panTransparency = 0;
  }
  ////// Next button from oven stage to end screen //////
  if (
    mouseX > 12 &&
    mouseX < 84 &&
    mouseY > 91 &&
    mouseY < 118 &&
    flourStageXandY === 1000 &&
    titlePageXandY === 1000 &&
    eggStageXandY === 1000 &&
    milkStageXandY === 1000 &&
    chocolateXandY === 1000 &&
    mixingXandY === 1000 &&
    ovenXandY === 0
  ) {
    flourStageXandY = 1000;
    titlePageXandY = 1000;
    eggStageXandY = 1000;
    milkStageXandY = 1000;
    chocolateXandY = 1000;
    mixingXandY = 1000;
    ovenXandY = 1000;
    endPageXandY = 0;
  }
  ////// Next button from end screen to title screen //////
  if (
    mouseX > 460 &&
    mouseX < 588 &&
    mouseY > 511 &&
    mouseY < 571 &&
    flourStageXandY === 1000 &&
    titlePageXandY === 1000 &&
    eggStageXandY === 1000 &&
    milkStageXandY === 1000 &&
    chocolateXandY === 1000 &&
    mixingXandY === 1000 &&
    ovenXandY === 1000 &&
    endPageXandY === 0
  ) {
    flourStageXandY = 0;
    titlePageXandY = 0;
    eggStageXandY = 0;
    milkStageXandY = 0;
    chocolateXandY = 0;
    mixingXandY = 0;
    ovenXandY = 0;
    endPageXandY = 0;
  }
}

function draw() {
  /////////// end page ///////////
  image(backgroundPattern, 300, 300, 600, 600);
  image(utensils, 300, 300, 600, 600);
  image(avatar, 290, 300, 500, 500);
  imageMode(CENTER);
  image(counterTop, 300, 300, 600, 600);
  image(textBubble, 300, 300, 600, 600);
  image(finalCake, 300, 450, 300, 300);
  fill(156, 116, 43);
  textSize(20);
  text("Congrats!", 250, 50);
  text("You finished baking your cake!", 160, 75);
  image(restartButton, 525, 545, 150, 150);
  /////////// oven stage ///////////
  image(backgroundPattern, 300 + ovenXandY, 300 + ovenXandY, 600, 600);
  image(utensils, 300 + ovenXandY, 300 + ovenXandY, 600, 600);
  image(avatar, 400 + ovenXandY, 300 + ovenXandY, 500, 500);
  image(counterTop, 300 + ovenXandY, 300 + ovenXandY, 600, 600);
  image(ovenClosed, 200 + ovenXandY, 350 + ovenXandY, 600, 600);
  push();
  tint(255, panTransparency);
  image(pan, mouseX + ovenXandY, mouseY + ovenXandY, 250, 250);
  pop();
  image(textBubble, 300 + ovenXandY, 300 + ovenXandY, 600, 600);
  fill(156, 116, 43);
  textSize(20);
  text(
    "click the red button to open the oven.",
    140 + ovenXandY,
    50 + ovenXandY
  );
  text("put in the cake!", 240 + ovenXandY, 75 + ovenXandY);
  imageMode(CENTER);
  image(nextButton, 43 + ovenXandY, 105 + ovenXandY, 100, 75);
  /////////// mixing stage ///////////
  image(backgroundPattern, 300 + mixingXandY, 300 + mixingXandY, 600, 600);
  image(counterTop, 300 + mixingXandY, 150 + mixingXandY, 1000, 1000);
  image(counterTop, 300 + mixingXandY, -30 + mixingXandY, 1000, 1000);
  image(mixtureBowl, 290 + mixingXandY, 310 + mixingXandY, 600, 600);
  image(
    mixingSpoon,
    mouseX - 35 + mixingXandY,
    mouseY + 20 + mixingXandY,
    400,
    400
  );
  if (
    mouseIsPressed === true &&
    mouseX > 156 &&
    mouseX < 507 &&
    mouseY > 110 &&
    mouseY < 347
  ) {
    mixingSpoon = mixingSpoon2;
  } else {
    mixingSpoon = mixingSpoon1;
  }
  image(textBubble, 300 + mixingXandY, 300 + mixingXandY, 600, 600);
  fill(156, 116, 43);
  textSize(20);
  text(
    "Press to mix the batter with the spoon!",
    130 + mixingXandY,
    65 + mixingXandY
  );
  image(nextButton, 43 + mixingXandY, 65 + mixingXandY, 100, 75);
  /////////// chocolate stage ///////////
  chocolateBitSpeed += chocolateBitSpeed;
  image(
    backgroundPattern,
    300 + chocolateXandY,
    300 + chocolateXandY,
    600,
    600
  );
  image(utensils, 300 + chocolateXandY, 300 + chocolateXandY, 600, 600);
  image(avatar, 200 + chocolateXandY, 300 + chocolateXandY, 500, 500);
  imageMode(CENTER);
  image(bowlBack, 300 + chocolateXandY, 450 + chocolateXandY, 400, 400);
  image(nextButton, 43 + chocolateXandY, 25 + chocolateXandY, 100, 75);
  push();
  tint(255, transparencyChocolateBit);
  image(
    chocolateBit,
    mouseX + chocolateXandY,
    mouseY + chocolateXandY,
    200,
    200
  );
  pop();
  fill(200);
  noStroke();
  image(counterTop, 300 + chocolateXandY, 300 + chocolateXandY, 600, 600);
  image(chocolate, 75 + chocolateXandY, 470 + chocolateXandY, 250, 250);
  image(bowlFront, 300 + chocolateXandY, 450 + chocolateXandY, 400, 400);
  image(textBubble, 300 + chocolateXandY, 300 + chocolateXandY, 600, 600);
  fill(156, 116, 43);
  textSize(20);
  text("click on the chocolate and", 190 + chocolateXandY, 50 + chocolateXandY);
  text(
    "click to drop the bits into the bowl!",
    150 + chocolateXandY,
    75 + chocolateXandY
  );
  /////////// milk stage ///////////
  image(
    backgroundPattern,
    300 + milkStageXandY,
    300 + milkStageXandY,
    600,
    600
  );
  image(utensils, 300 + milkStageXandY, 300 + milkStageXandY, 600, 600);
  image(avatar, 290 + milkStageXandY, 300 + milkStageXandY, 500, 500);
  imageMode(CENTER);
  image(bowlBack, 300 + milkStageXandY, 450 + milkStageXandY, 400, 400);
  for (let i = 0; i < myMilkArray.length; i++) {
    myMilkArray[i].update();
    myMilkArray[i].checkLanding();
    myMilkArray[i].drawMilk();
  }
  image(counterTop, 300 + milkStageXandY, 300 + milkStageXandY, 600, 600);
  image(milk, mouseX + milkStageXandY, mouseY + milkStageXandY, 300, 300);
  image(nextButton, 550 + milkStageXandY, 105 + milkStageXandY, 100, 75);
  image(bowlFront, 300 + milkStageXandY, 450 + milkStageXandY, 400, 400);
  image(textBubble, 300 + milkStageXandY, 300 + milkStageXandY, 600, 600);
  fill(156, 116, 43);
  textSize(20);
  text(
    "click above the bowl to pour in the milk!",
    120 + milkStageXandY,
    50 + milkStageXandY
  );
  text(
    "click again outside to stop.",
    180 + milkStageXandY,
    75 + milkStageXandY
  );

  /////////// egg stage ///////////
  yolkYposition += yolkYspeed;
  image(backgroundPattern, 300 + eggStageXandY, 300 + eggStageXandY, 600, 600);
  image(utensils, 300 + eggStageXandY, 300 + eggStageXandY, 600, 600);
  image(avatar, 200 + eggStageXandY, 300 + eggStageXandY, 500, 500);
  imageMode(CENTER);
  image(bowlBack, 300 + eggStageXandY, 450 + eggStageXandY, 400, 400);
  push();
  tint(255, transparencyYolk);
  image(
    eggYolk,
    mouseX + eggStageXandY,
    mouseY + yolkYposition + eggStageXandY,
    200,
    200
  );
  pop();
  if (yolkYposition > 200 && yolkYposition < 600) {
    transparencyYolk = 0;
  }
  image(counterTop, 300 + eggStageXandY, 300 + eggStageXandY, 600, 600);
  image(eggCarton, 50 + eggStageXandY, 490 + eggStageXandY, 250, 250);
  image(nextButton, 550 + eggStageXandY, 65 + eggStageXandY, 100, 75);
  image(egg1, mouseX + eggStageXandY, mouseY + 30 + eggStageXandY, 200, 200);
  image(bowlFront, 300 + eggStageXandY, 450 + eggStageXandY, 400, 400);
  image(textBubble, 300 + eggStageXandY, 300 + eggStageXandY, 600, 600);
  fill(156, 116, 43);
  textSize(20);
  text("Grab and egg from the carton", 170 + eggStageXandY, 50 + eggStageXandY);
  text("and crack it into the bowl!", 190 + eggStageXandY, 75 + eggStageXandY);
  /////////// flour stage ///////////
  imageMode(CENTER);
  image(
    backgroundPattern,
    300 + flourStageXandY,
    300 + flourStageXandY,
    600,
    600
  );
  image(utensils, 300 + flourStageXandY, 300 + flourStageXandY, 600, 600);
  image(avatar, 290 + flourStageXandY, 300 + flourStageXandY, 500, 500);
  image(bowlBack, 300 + flourStageXandY, 450 + flourStageXandY, 400, 400);
  for (let i = 0; i < myFlourArray.length; i++) {
    myFlourArray[i].update();
    myFlourArray[i].checkLanding();
    myFlourArray[i].drawFlour();
  }
  image(counterTop, 300 + flourStageXandY, 300 + flourStageXandY, 600, 600);
  image(flour1, mouseX + flourStageXandY, mouseY + flourStageXandY, 300, 300);
  image(nextButton, 550 + flourStageXandY, 25 + flourStageXandY, 100, 75);
  image(bowlFront, 300 + flourStageXandY, 450 + flourStageXandY, 400, 400);
  image(textBubble, 300 + flourStageXandY, 300 + flourStageXandY, 600, 600);
  fill(156, 116, 43);
  textSize(20);
  text(
    "click above the bowl to sprinkle in the flour!",
    110 + flourStageXandY,
    50 + flourStageXandY
  );
  text(
    "click again outside to stop.",
    180 + flourStageXandY,
    75 + flourStageXandY
  );
  /////////// title page ///////////
  titleYspeed += 0.125;
  image(
    backgroundPattern,
    300 + titlePageXandY,
    300 + titlePageXandY,
    600,
    600
  );
  image(utensils, 300 + titlePageXandY, 300 + titlePageXandY, 600, 600);
  image(avatar, 290 + titlePageXandY, 300 + titlePageXandY, 500, 500);
  imageMode(CENTER);
  image(counterTop, 300 + titlePageXandY, 300 + titlePageXandY, 600, 600);
  image(
    gameTitle,
    300 + titlePageXandY,
    120 + titleYspeed + titlePageXandY,
    500,
    500
  );
  image(startButton, 300 + titlePageXandY, 545 + titlePageXandY, 200, 175);
  if (titleYspeed === 10) {
    titleYspeed += -10;
  }
}
