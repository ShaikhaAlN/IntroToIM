//global constant variables
const TEXT1PART1 = 0;
const TEXT2PART1 = 1;
const TEXT3PART1 = 2;
const TEXT4PART1 = 3;
const TEXT4PART2 = 4;
const TEXT5PART1 = 5;
const TEXT5PART2 = 6;
const CONTACTLETTER = 7;
const CONTACTNAME = 8;

let strings = [];

function setup() {
  createCanvas(500, 700);
  strings = loadStrings("textMessages.csv");
}

function draw() {
  background(10);
  let singleText = [];

  //spliting strings into individual phrases and words and making variables that represent each text or section
  singleText = split(strings[int(random(strings.length))], ",");
  let text1Part1 = singleText[TEXT1PART1];

  singleText = split(strings[int(random(strings.length))], ",");
  let text2Part1 = singleText[TEXT2PART1];

  singleText = split(strings[int(random(strings.length))], ",");
  let text3Part1 = singleText[TEXT3PART1];

  singleText = split(strings[int(random(strings.length))], ",");
  let text4Part1 = singleText[TEXT4PART1];

  singleText = split(strings[int(random(strings.length))], ",");
  let text4Part2 = singleText[TEXT4PART2];

  singleText = split(strings[int(random(strings.length))], ",");
  let text5Part1 = singleText[TEXT5PART1];

  singleText = split(strings[int(random(strings.length))], ",");
  let text5Part2 = singleText[TEXT5PART2];

  //did not align with the contact name
  //singleText = split(strings[int (random(strings.length))], ',');
  //let contactLetter = singleText[CONTACTLETTER]

  singleText = split(strings[int(random(strings.length))], ",");
  let contactName = singleText[CONTACTNAME];

  //text 1
  fill(50, 50, 50, 180);
  rect(0, 0, 500, 150);
  rect(25, 190, 300, 50, 50);
  textSize(20);
  fill(250);
  text("Hey, are you " + text1Part1 + "?", 45, 220);

  //text 2
  fill(200, 119, 220);
  rect(255, 260, 220, 50, 50);
  textSize(20);
  fill(250);
  text(text2Part1 + ", why?", 270, 290);

  //text 3
  fill(50);
  rect(25, 330, 300, 50, 50);
  textSize(20);
  fill(250);
  text("Can you" + text3Part1 + "?", 45, 360);

  //text 4
  fill(200, 119, 220);
  rect(185, 400, 290, 50, 50);
  textSize(20);
  fill(250);
  text(text4Part1 + " give me" + text4Part2, 200, 430);

  //text 5
  fill(50);
  rect(25, 470, 300, 50, 50);
  textSize(20);
  fill(250);
  text("Oh" + text5Part1 + " I" + text5Part2, 45, 500);

  //contact circle
  fill(200, 200, 200, 200);
  circle(250, 60, 75);
  fill(220);
  textSize(57);
  //did not align with the actual contact name
  //text(contactLetter,212,80)

  //contact name
  textSize(25);
  text(contactName, 205, 125);

  //phone time; using round to create integers out of the random numbers. bracket is from 10 onwards as numbers below 10 looked unaesthetic without the '0' before (09, 01, 02)
  textSize(17);
  fill(250);
  text(round(random(1, 12)) + ":" + round(random(10, 60)), 20, 30);
  //text time
  textSize(15);
  fill(200);
  text(
    round(random(1, 31)) +
      " Apr " +
      round(random(2010, 2022)) +
      ", " +
      round(random(1, 12)) +
      ":" +
      round(random(10, 60)) +
      " PM",
    180,
    175
  );

  //text bar; mimicks faint message to type and the send button
  noFill();
  stroke(50);
  rect(180, 575, 300, 40, 50);
  fill(50, 50, 50, 180);
  rect(0, 625, 500, 150);
  fill(50);
  textSize(20);
  text("Type here", 200, 600);
  circle(460, 595, 30);

  noLoop();
}
