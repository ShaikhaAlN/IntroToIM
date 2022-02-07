function setup() {
  //color randomizer
  let randomBlue = random(0, 250);
  let randomRed = random(0, 250);
  let randomGreen = random(0, 250);

  let randomBlue2 = random(0, 250);
  let randomRed2 = random(0, 250);
  let randomGreen2 = random(0, 250);

  let randomBlue3 = random(0, 250);
  let randomRed3 = random(0, 250);
  let randomGreen3 = random(0, 250);

  let randomBlue4 = random(0, 250);
  let randomRed4 = random(0, 250);
  let randomGreen4 = random(0, 250);

  let randomBlue5 = random(0, 250);
  let randomRed5 = random(0, 250);
  let randomGreen5 = random(0, 250);

  let randomBlue6 = random(0, 250);
  let randomRed6 = random(0, 250);
  let randomGreen6 = random(0, 250);

  let randomBlue7 = random(0, 250);
  let randomRed7 = random(0, 250);
  let randomGreen7 = random(0, 250);

  //backgorund and canvas
  createCanvas(700, 700);
  background(220);

  //background circles
  noStroke();
  for (xCircleBack = 30; xCircleBack < width; xCircleBack = xCircleBack + 40) {
    for (
      yCircleBack = 30;
      yCircleBack < height;
      yCircleBack = yCircleBack + 40
    ) {
      fill(randomRed, randomGreen, randomBlue);
      circle(xCircleBack, yCircleBack, 50);
      fill(randomRed2, randomGreen2, randomBlue2);
      circle(xCircleBack, yCircleBack, 43);
    }
  }

  //green circles
  for (xCircleBack = 230; xCircleBack < width; xCircleBack = xCircleBack + 40) {
    for (
      yCircleBack = 480;
      yCircleBack < height;
      yCircleBack = yCircleBack + 40
    ) {
      fill(randomRed3, randomGreen3, randomBlue3);
      circle(xCircleBack, yCircleBack, 47);
      fill(randomRed3, randomGreen3, randomBlue3);
      circle(xCircleBack, yCircleBack, 40);
    }
  }

  //orange outline circles bottom right
  stroke(randomRed4, randomGreen4, randomBlue4);
  noFill();
  for (xCircleBack = 230; xCircleBack < width; xCircleBack = xCircleBack + 40) {
    for (
      yCircleBack = 499;
      yCircleBack < height;
      yCircleBack = yCircleBack + 40
    ) {
      circle(xCircleBack, yCircleBack, 40);
      circle(xCircleBack, yCircleBack + 1, 40);
      circle(xCircleBack, yCircleBack - 1, 40);
    }
  }

  //orange outline circles top left
  stroke(randomRed5, randomGreen5, randomBlue5);
  noFill();
  for (
    xCircleBack = 50;
    xCircleBack < width - 150;
    xCircleBack = xCircleBack + 40
  ) {
    for (
      yCircleBack = 70;
      yCircleBack < height - 150;
      yCircleBack = yCircleBack + 40
    ) {
      circle(xCircleBack, yCircleBack, 40);
      circle(xCircleBack, yCircleBack + 1, 40);
      circle(xCircleBack, yCircleBack - 1, 40);
    }
  }

  // triangles
  fill(randomRed6, randomGreen6, randomBlue6);
  noStroke();
  //first row
  triangle(280, 152, 270, 186, 290, 186);
  triangle(300, 152, 290, 186, 310, 186);
  triangle(320, 152, 310, 186, 330, 186);
  triangle(340, 152, 330, 186, 350, 186);
  triangle(360, 152, 350, 186, 370, 186);
  triangle(380, 152, 370, 186, 390, 186);
  triangle(400, 152, 390, 186, 410, 186);
  triangle(420, 152, 410, 186, 430, 186);
  triangle(440, 152, 430, 186, 450, 186);
  triangle(460, 152, 450, 186, 470, 186);
  triangle(480, 152, 470, 186, 490, 186);
  triangle(500, 152, 490, 186, 510, 186);
  triangle(520, 152, 510, 186, 530, 186);
  triangle(540, 152, 530, 186, 550, 186);
  triangle(560, 152, 550, 186, 570, 186);
  triangle(580, 152, 570, 186, 590, 186);
  triangle(600, 152, 590, 186, 610, 186);
  triangle(620, 152, 610, 186, 630, 186);
  triangle(640, 152, 630, 186, 650, 186);
  triangle(660, 152, 650, 186, 670, 186);
  triangle(680, 152, 670, 186, 690, 186);

  //second row
  triangle(320, 186, 310, 220, 330, 220);
  triangle(340, 186, 330, 220, 350, 220);
  triangle(360, 186, 350, 220, 370, 220);
  triangle(380, 186, 370, 220, 390, 220);
  triangle(400, 186, 390, 220, 410, 220);
  triangle(420, 186, 410, 220, 430, 220);
  triangle(440, 186, 430, 220, 450, 220);
  triangle(460, 186, 450, 220, 470, 220);
  triangle(480, 186, 470, 220, 490, 220);
  triangle(500, 186, 490, 220, 510, 220);
  triangle(520, 186, 510, 220, 530, 220);
  triangle(540, 186, 530, 220, 550, 220);
  triangle(560, 186, 550, 220, 570, 220);
  triangle(580, 186, 570, 220, 590, 220);
  triangle(600, 186, 590, 220, 610, 220);
  triangle(620, 186, 610, 220, 630, 220);
  triangle(640, 186, 630, 220, 650, 220);
  triangle(660, 186, 650, 220, 670, 220);
  triangle(680, 186, 670, 220, 690, 220);

  //third row
  triangle(360, 220, 350, 254, 370, 254);
  triangle(380, 220, 370, 254, 390, 254);
  triangle(400, 220, 390, 254, 410, 254);
  triangle(420, 220, 410, 254, 430, 254);
  triangle(440, 220, 430, 254, 450, 254);
  triangle(460, 220, 450, 254, 470, 254);
  triangle(480, 220, 470, 254, 490, 254);
  triangle(500, 220, 490, 254, 510, 254);
  triangle(520, 220, 510, 254, 530, 254);
  triangle(540, 220, 530, 254, 550, 254);
  triangle(560, 220, 550, 254, 570, 254);
  triangle(580, 220, 570, 254, 590, 254);
  triangle(600, 220, 590, 254, 610, 254);
  triangle(620, 220, 610, 254, 630, 254);
  triangle(640, 220, 630, 254, 650, 254);
  triangle(660, 220, 650, 254, 670, 254);
  triangle(680, 220, 670, 254, 690, 254);

  //curved edge rectangles
  noFill();
  stroke(randomRed7, randomGreen7, randomBlue7);
  let rectPattern = 20;
  while (rectPattern < 600) {
    rectPattern = rectPattern + 30;
    rect(rectPattern, rectPattern, 55, 55, 20);
    rect(rectPattern + 5, rectPattern + 5, 55, 55, 20);
    rect(rectPattern - 100, rectPattern, 100, 100, 20);
    rect(rectPattern - 100, rectPattern + 1, 100, 100, 20);
  }
  //Stars
  stroke(randomRed, randomGreen, randomBlue);
  let starline1 = 30;
  while (starline1 < 620) {
    starline1 = starline1 + 30;
    line(starline1, 55, starline1 - 10, 20);
    line(starline1, 56, starline1 - 10, 21);
    line(starline1, 54, starline1 - 10, 19);
  }
  let starline2 = 10;
  while (starline2 < 600) {
    starline2 = starline2 + 30;
    line(starline2, 55, starline2 + 10, 20);
    line(starline2, 56, starline2 + 10, 21);
    line(starline2, 54, starline2 + 10, 19);
  }
  let starline3 = 10;
  while (starline3 < 600) {
    starline3 = starline3 + 30;
    line(starline3, 55, starline3 + 30, 30);
    line(starline3, 56, starline3 + 30, 31);
    line(starline3, 54, starline3 + 30, 29);
  }
  let starline4 = 0;
  while (starline4 < 600) {
    starline4 = starline4 + 30;
    line(starline4, 30, starline4 + 40, 30);
    line(starline4, 31, starline4 + 40, 31);
    line(starline4, 29, starline4 + 40, 29);
  }
  let starline5 = 0;
  while (starline5 < 600) {
    starline5 = starline5 + 30;
    line(starline5, 30, starline5 + 30, 55);
    line(starline5, 31, starline5 + 30, 56);
    line(starline5, 29, starline5 + 30, 54);
  }
  //vertical lines
  let linePattern = 10;
  while (linePattern < 600) {
    linePattern = linePattern + 30;
    line(linePattern + 10, 300, linePattern + 30, 600);
    line(linePattern, 300, linePattern + 40, 300);
    line(linePattern + 20, 300, linePattern + 40, 680);
    line(linePattern, 300, linePattern + 40, 300);
  }
}

function draw() {
  print(mouseX, mouseY);
}
