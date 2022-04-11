## Planning
- we wanted to use the ultrasonic sensor and the piezo speaker to create an instrument that is interactive.
- we felt that adding the button would allow the octave to be changed manually and for the instrument to be multidimensional
- this is the schematic for the circuit:

![InstrumentSchem](InstrumentSchem.png)

## Circuit building
- the most common pins that were used were 5v and ground, as all the elements needed to be connected to those two except for the piezo speaker which only went through ground and pin 8.
- using a 10K resistor helped monitor the sound coming out of the speaker
- we used the the red wires for 5v, the black wires for ground, the blu for analog input, and the rest of the colors for digital pins
- here is the finished circuit:

![InstrumentCirc](InstrumentCirc.png)

## Coding
- first, we created an array based on the pitch file from the built in example for 'toneMelody' under 'digital'. this helped organize the tones and which order they would be in
- a variable for the octave was created to accompany the if statment for when the button is pressed to allow users to switch between a low and high pitch
- 

https://user-images.githubusercontent.com/98512587/162842150-ccc64c49-3a78-4802-868b-9702241cc87f.mp4

