const int buttonPin = A2;
const int ledPin =  9;
const int ledPin2 =  11;  
int buttonState = 0;     
int delaySpeed = 1000;   
int potPosition;

void setup() {
  // setting the modes of the output and input pins
  pinMode(ledPin, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(buttonPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  potPosition = analogRead(A3);
  Serial.println(potPosition); 
  // if statement for the red led; in sync with blue if switch is pressed, and seperately random if not.
  // alternates between high and low for flickering effect
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
    digitalWrite(ledPin2, HIGH);
    delay(random(0,delaySpeed-potPosition));
    digitalWrite(ledPin, LOW);
    digitalWrite(ledPin2, LOW);
    delay(random(0,delaySpeed-potPosition));
    digitalWrite(ledPin, HIGH);
    digitalWrite(ledPin2, HIGH);
    delay(random(0,delaySpeed-potPosition));
  } else {
    digitalWrite(ledPin, HIGH);
    delay(random(0,delaySpeed-potPosition));
    digitalWrite(ledPin, LOW);
    delay(random(0,delaySpeed-potPosition));
    digitalWrite(ledPin, HIGH);
    delay(random(0,delaySpeed-potPosition));
  }
  // if statement for the blue led; in sync with red if switch is pressed, and seperately random if not.
  // alternates between high and low for flickering effect
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
    digitalWrite(ledPin2, HIGH);
    delay(random(0,delaySpeed-potPosition));
    digitalWrite(ledPin, LOW);
    digitalWrite(ledPin2, LOW);
    delay(random(0,delaySpeed-potPosition));
    digitalWrite(ledPin, HIGH);
    digitalWrite(ledPin2, HIGH);
    delay(random(0,delaySpeed-potPosition));
  } else {
    digitalWrite(ledPin2, HIGH);
    delay(random(0,delaySpeed+potPosition));
    digitalWrite(ledPin2, LOW);
    delay(random(0,delaySpeed+potPosition));
    digitalWrite(ledPin2, HIGH);
    delay(random(0,delaySpeed+potPosition));
  }
}
