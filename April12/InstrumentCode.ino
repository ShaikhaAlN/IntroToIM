#include "pitches.h"

const int trigPin = 6;      // trigger
const int echoPin = 7;      // echo
const int spkrPin = 8;      // piezo buzzer
const int buttonPin = A5;   // pushbutton
long duration, cm;

int buttonState = 0;        // variable for reading the pushbutton status

int notes[] = {                 // notes of C Major scale
  NOTE_C3, NOTE_D3, NOTE_E3, NOTE_F3, NOTE_G3, NOTE_A3, NOTE_B3, NOTE_C4, NOTE_D4, NOTE_E4, NOTE_F4, NOTE_G4, NOTE_A4, NOTE_B4
};

int octaveUp = 0;           // variable for full octave jump (begins off)

void setup() {
  Serial.begin (9600);
  // define inputs and outputs
  pinMode(trigPin, OUTPUT);
  pinMode(spkrPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH) {
    octaveUp = 7;
  } else {
    octaveUp = 0;
  }
  
  // the sensor is triggered by a HIGH pulse of 10 or more microseconds.
  // give a short LOW pulse beforehand to ensure a clean HIGH pulse:
  digitalWrite(trigPin, LOW);
  delayMicroseconds(5);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
 
  // Read the signal from the sensor: a HIGH pulse whose
  // duration is the time (in microseconds) from the sending
  // of the ping to the reception of its echo off of an object.
  pinMode(echoPin, INPUT);
  duration = pulseIn(echoPin, HIGH);
 
  // convert the time into a distance of centimeters
  cm = (duration/2) / 29.1;     // Divide by 29.1 or multiply by 0.0343

  if (cm == 1){
    tone(spkrPin, notes[1 + octaveUp]);
  } else if (cm == 2){
    tone(spkrPin, notes[2 + octaveUp]);
  } else if (cm == 3){
    tone(spkrPin, notes[3 + octaveUp]);
  } else if (cm == 4){
    tone(spkrPin, notes[4 + octaveUp]);
  } else if (cm == 5){
    tone(spkrPin, notes[5 + octaveUp]);
  } else if (cm == 6){
    tone(spkrPin, notes[6 + octaveUp]);
  } else if (cm == 7){
    tone(spkrPin, notes[7 + octaveUp]);
  } else {
    noTone(spkrPin);
  }

  Serial.print(cm);
  Serial.print("cm");
  Serial.println();
  
  delay(250);
}
