## Initial ideas
- While completing this weeks homework, i found the first exercise really fun and interesting since i managed to use two sensors to control the position of the circle.
- one final project idea would be to use the grid feature in p5.js to create a sensitive maze where if you touch the walls of the grid you lose or a buzzer sound plays and you lose a 'life'.

- another idea would be a picture of a lighthouse with a light that blinks in morse code depending on the letters that the user puts in with their keyboard

- another idea built on a homework that ive done where i used two led lights in a creative way, using a light sensor/potentiometer/button to 'break into' a vault that rotates and clicks at different points on the screen.

- another idea i had would be to use three buttons to control a music beat game where different colors pop up

## Final idea
We decided to go with the idea of using a light sensor/ potentiometer/ button to 'break into' a vault that rotates and clicks at different points on the screen. This was built on a homework that I've done where I used two led lights in a creative way where the user had to stop them from flickering by using those sensors. <br />

The basic premise of the game would be that there is a locked vault on the screen and the knobs could be twisted using the potentiometer on the arduino. The aim is to unlock the vault and for the user to receive a ‘reward’. <br />

Since we will be doing this as a pair, we thought one way of taking this idea a step further is by making it a multiplayer game, where both players determine the end result and progress. The second player will be given the goal of unlocking the vault potentially using:
- 2 potentiometers and a button 
- Or 3 potentiometers
- Or 1 potentiometer, a light sensor, and a button <br />

Meanwhile, the first player would be tasked with ‘setting up’ the vault password or extra mechanics. This could potentially be through:
- Using a potentiometer to determine the password
- Or typing in a number or group of numbers that determine the password
- Or sabotaging the other player by setting a time limit with a potentiometer for an alarm/ creating distractions such as shapes floating on the screen every time a button is pressed <br />

In terms of the arduino and p5 program for the first player:
- We could use a variable in p5 that stores the value from the potentiometer input and that would determine at what point the vault opens for the second player
- We could use the ‘code’ function in arduino to make it so that the number from 1-10 represent a range of individual passwords represented in potentiometer values that would determine the password for the vault depending on the number pressed by the first player at the beginning of the game
- If the player were to sabotage the second player by setting a time limit, this could be done by mapping the values of a potentiometer to seconds such as 100-10,000 and then storing that in a variable that can be put in an if statement. The if statement would then initiate an alarm sound from p5 if the variable (time limit) has been reached.
- If the player were to sabotage the second player by creating distractions, an array of shapes such as ovals, circles, or squares can be put into an array where their movement can be set to random. The shapes would appear if the button from arduino sends an input value of being pressed. How often or how many shapes appear can be determined based on user testing. So it could either be that more shapes appear with every press of a button, or the shapes only appear if the button is being pressed. <br />

In terms of the arduino and p5 program for the second player:
- If the potentiometers are used, they would act as an input that is sent to p5 as a number and would control whether the knob on the screen rotates and by how much. One way we could do this is by mapping the values of the potentiometer to the 360 angles of the knob circle shape and creating variables to change as the potentiometer changes.
- If a button is used with the program, this could also act as an input that opens the door of the vault to reveal the final prize 
- If a light sensor is used, it could control whether the user is applying pressure to the knobs in order to twist it, which would mean they have to interact with both the potentiometer and light sensor in order to work out the puzzle. This could increase the level of interactivity and make the game more interesting. We could code this using if statements that ensure both are being used. For example, if the light sensor is above a certain value the input from the potentiometer will be able to rotate the circle knob on p5. We could also include text instructions on the screen for clarity. <br />

Challenges we might encounter:
- In planning our idea initially, we thought of having it be a single-player game. This seemed a bit too simple when we looked into the process of creating the project, hence, we decided to introduce another player into the game. While this makes the game more interesting, it also adds onto the complexity of creating it. As written above, we have thought of the general programming, but one thing we are still unsure about is how we could have the programs for both players running in a parallel manner. That is, they both set the vaults for one another, and then both play in the same instance to figure out how to break into the vaults and win. 
- We’re still brainstorming ways to achieve this, however, if we found ourselves stuck, one thing that could be done is having the first player work on the settings, and the second player then trying to unlock the vault. Their performance could be tracked by a timer and once they are done the game could be restarted and the results of both players could be compared. 
