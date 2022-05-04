let lightSensor = 0;
let potVal = 0;
let buttonVal = 0;
let left = 0;
let right = 0;
let degree = 0
let rotateKnob = 0
let redLight = 255
let greenLight = 0
let circleD = 100
let rectLength = 80
let startingScreenPosition = 0

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
  rectMode(CENTER)
  ellipseMode(CENTER)
  textSize(18);
  // create a button
    userButton = createButton('submit'); // create button, give it some text
    // make an input box
    userInput = createInput('type password here');
    // position the input
    userInput.position(200, 300);
    // position the button
    userButton.position(205 + userInput.width, 300);

    // what is the callback for the button?
    userButton.mousePressed(storePassword);

    userPassword = '';
  setUpSerial();
}

function draw() {
  degree += +1
  background(200);
  fill(250)
  rect(325,325,350,350)
  ellipse(250,350,150,150)
  rect(250,350,150,1)
  rect(250,350,1,150)
  quad(80,120,430,120,500,150,150,150)
  quad(80,120,150,150,150,500,80,470)
  //strokeWeight()
  line(200,300,300,400)
  line(300,300,200,400)
  ellipse(250,350,circleD,circleD)
  fill(redLight,greenLight,0)
  ellipse(370,270,20,20)
  fill(250,250,250,250)
  translate(250,350); 
  push()
  rotate(map(potVal, 0, 1023, 0, 180))
  rect(0,0,1,rectLength)
  pop()
  if (lightSensor < 500) {
    greenLight = 255
    redLight = 0
    rectLength = 65
    circleD = 85
  } else {
    greenLight = 0
    redLight = 255
    rectLength = 80
    circleD = 100
  }
  print(mouseX,mouseY)
//print(potVal, lightSensor, buttonVal)
  if (!serialActive) {
    text("Press Space Bar to select Serial Port", -250, -330);
  } else {
    text("Connected", -250, -330);
  }
  fill(250,250,250)
rect(50+startingScreenPosition,-50,500,500)
  fill(0)
  passwordValidity = text(userPassword, -25+startingScreenPosition,0);
  if (userPassword > 180) {
    passwordValidity = text(userPassword + ' is not a valid password, try again.',-25+startingScreenPosition,0);
  } else {
    passwordValidity = text(userPassword, -25+startingScreenPosition,0);
  }
}

function keyPressed() {
  if (key == " ") {
    // important to have in order to start the serial connection!!
    setUpSerial();
  }
}

function mousePressed() {
  if (mouseX >353 && mouseX<406 && mouseY>300 && mouseY<322 && userPassword < 180) {
    startingScreenPosition = 300
  }
}

function readSerial(data) {
  ////////////////////////////////////
  //READ FROM ARDUINO HERE
  ////////////////////////////////////

  if (data != null) {
    // make sure there is actually a message
    // split the message
    let fromArduino = split(trim(data), ",");
    // if the right length, then proceed
    if (fromArduino.length == 3) {
      // only store values here
      // do everything with those values in the main draw loop
      lightSensor = fromArduino[0];
      potVal = fromArduino[1];
      buttonVal = fromArduino[2];
    }

    //////////////////////////////////
    //SEND TO ARDUINO HERE (handshake)
    //////////////////////////////////
    let sendToArduino = left + "," + right + "\n";
    writeSerial(sendToArduino);
  }
}
function storePassword() {
    // cast as a color when assigning it to the variable
    userPassword = int(userInput.value());
}
