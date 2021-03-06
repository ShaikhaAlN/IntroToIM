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
## first work session
- we decided to first make the circuit and p5 screen separately to make sure both worked individually so that we don't face any difficulties later down the line and incorrectly attribute it to miscommunication between the devices.
### the circuit
- Dhabia and I decided to create a circuit including 1 potentiometer, 1 light sensor, and 1 button, to have a range for the user to interact with. 
- this is the circuit we've built so far: <br />

![circuit1](https://user-images.githubusercontent.com/98512587/168447794-728ab2f3-68d8-48c9-a527-a76a7ee82682.png)


- we tested the potentiometer, light sensor, and button to see if they were returning the correct values individually by using the serial.println() function 
### p5
- on p5, we tried testing different ways of visualizing the safe/vault;
  - we first thought of using a gif or video of a vault that would be a still image when the potentiometer is on the minimum/maximum value and would move/play when the potentiometer would be any value in between.
  - however, we had some trouble implementing this and making it cohesive with the rest of the user interface
  - instead, we are using the shapes in p5 to make the vault. The progress so far consists of a 3D square constructed using the rect() and quad() functions. Then, inside, there would be two circles placed on top of eachother. This is to create the illusion of the user 'pressing on the handle' by making the inside circle shrink every time the light sensor is touched. this could be implemented using an if statement. 

<img width="468" alt="vault" src="https://user-images.githubusercontent.com/98512587/168447603-b02691e1-5155-4620-a7c1-af697402f759.png">


  - inside the smaller circle would also be a line that would rotate. this would act as an indicator to the users that they are turning the potentiometer and in which way. instead of a line() function, we used a very thin rect() so that it can be rotated with the (CENTER) mode, and can be visible enough to users.
  - At first when we did this, the rotating rect() would disappear once the rotate function was put into the code. after referring back to the class on transformations using p5, and visiting the link (https://genekogan.com/code/p5js-transformations/) with example p5 sketches, we found out that the missing piece of code was the translate() function, which would move the origin to the pivot point. This would allow the rotating rect() to stay in its place.
  - to allow users to rotate the potentiometer in order to rotate the vault handle in real time, we thought of first setting the angleMode() to DEGREES so that it would be easier for us to understand and properly map the 1023 values of the potentiometer to the 360 degrees of the rotating rect().
### goals for the next work session
- we will be using a clicking sound implemented into p5 instead of one on arduino so we can control it better
- make a starting screen with clear and concise instructions
- now that player 2 can successfully interact with the vault, we need to start working on player 1, and seeing how we can allow them to set the 'password' for the vault which would then be stored into a variable and used as the pasdword for player 2 to figure out using the potentiometer and listening for the sound. if this doesnt work, we will use the alternative player 2 roles like sabotage.

### Our questions so far and what we have tried:

- We’re still struggling with connecting P5 to Arduino. We followed the Jack’s tutorials again to ensure we were not missing anything. In using his examples the communication worked perfectly, but when it came to using our own code on P5 the communication failed. 
- To try to overcome this issue, we also followed this https://www.youtube.com/watch?v=feL_-clJQMs
- tutorial on YouTube. This gave us an insight on how we can make the serial communication work but we were still faced with some confusion. Attached below is an image of the arduino board as well as a short clip of the work we produced following the tutorial. We are still attempting to implement the same method on our personal work and will hopefully get past that. 

![serial_comm](https://user-images.githubusercontent.com/98512587/168447674-554eb89c-f0ab-4918-85c8-90a1859f3edb.png)


## Second working session
- during this work session ion class, we worked on our biggest issue which is the serial communication.
- before this, i had tried using serial communication codes from online p5 sketch examples (insert link) (insert link)
- during this session, with the help of professor Michal Shiloh, we worked through different methods of serial communication to see what worked most efficiently.
- at first, we tried running professor Aaron's sketch (https://editor.p5js.org/aaronsherwood/sketches/q2Pl77SWl) exactly how it is without changing anything. at first, a pop-up would appear asking the user to select a port and once it was selected, serial communication would be successful. Given this, i modifyed the code in both arduino and p5 to suit the 3 sensors (light, potentiometer, button) in my arduino circuit instead of the two sensors built in. however, when i tried to run the serial communication this time, it was not successful. i revisited professor Aarons example to see if this issue prevaled using his sketch and it did. The issue also continued even when tabs were closed and reopened and plugs were taken out and plugged in again. we quickly found that the only way time the serial communication worked was the first run of the sketch when the computer was restarted.
- given this obstacle, we tried adapting another serial communication sketch from professor Aaron (https://editor.p5js.org/aaronsherwood/sketches/kN6wwHyat) where instead of asking the user to select a port with a pop-up tab, it will try to find an arduino thats already been given permission to use in the browser using the function setUpSerial().
- This worked perfectly in terms of serial communication, and did not require any unplugging or restarting. so far, it has been working reliably so we feel confident to move forward with this code.
- now that the communication is working, i coded the basics of the game, being the potentiometer and the light sensor. 
- for the potentiometer, its values (stored in the variable potVal) from 0 to 1023 were mapped to the 360 degrees of the rotating rect() using map() and stored directly into the rotate() function. this way, the rotating of the potentiometer directly corresponds to the rotating vault knob.
- for the light sensor, i stored the values into a variable called lightSensor and use an if statment that changes the size of the knob and turns a small circle (indicator) from the color red to green when the light sensor is below a certain value. this is to create the impression that the when the user lightly on the light sensor, it is as if they are pressing on the knob to rotate it. this will also be usful for when we employ the sound indicator for the correct pasword so that the user can only hear it when they press on the light sensor while also rotating the potentiometer.
- as for the value of the light sensor in the if statement, i used trial and error to see which value could return a red color in bright light (when not pressed) and return a green color (when pressed). i wanted this to applicable to a broad range of settings where light is relatively bright. after a few trials, i came to the conclusion that <500 was a reliable value, however this may change in future work sessions or during user testing.

## Third working session
- During this working session, i wanted to start on the player 1 mechanics (setting password/sabotage player 2) since the player 2 user interactions are sufficiently working. 
  - so far, here is what the p5 screen is looking like:

<img width="468" alt="setuppage" src="https://user-images.githubusercontent.com/98512587/168447720-cea85340-1a15-4c37-a4ed-6564a11b727c.png">


- in order to create a start screen where player 1 would be able to input a password value from 1-360 (corresponding the degres of rotation) i refered to a tutorial by youtuber Scott Fitzgerald and his video and p5 sketch (https://www.youtube.com/watch?v=BPcL8TfVU1w) (https://editor.p5js.org/shfitz/sketches/FwdoTeh2T)
- his video was really insightful and educational, i was able to adapt his code on a seperate p5 sketch to test how it would work. instead of the instead of defining the value from the input as a color as seen in the original code, i used the int() function to convert any given number into an integer and store it. i also changed the variable names to fit more appropriately to the context of the program. I also created an if() statement to prevent users from typing or using a number higher than 180. I did this using the return function. here is the basic premise:

<img width="447" alt="wrongtext" src="https://user-images.githubusercontent.com/98512587/168447727-845fdf51-bc68-48e7-9487-abd5b916c138.png">


- p5.js code so far in at this stage: https://editor.p5js.org/ShN/sketches/lF-uy7zFC

## User Testing
- We had two of our friends test our project halfway through to try to understand what exactly is missing and what could be added onto it to make the game more challenging and interesting. To start off we did not explain anything to either of our friends, we decided to let them figure their way through the game on their own. Immediately, we realized that there existed some sort of confusion, we thought that perhaps this could be solved by including an introductory page just to make things more clear for the users. After we explained to them the way in which they are meant to navigate the game we observed their reactions and noted some significant points to improve and add. 
- User 1 (Notes) : 
  - Including a time limit would add more to the challenge. 
  - Unsure of what happens after they break the code. 
  - Sound effects would make the game more interesting. 
- User 2 (Notes):
  - Unable to figure out the light sensor at first. 
  - Suggested we added a buzzer that turns on when the safe is unlocked. 
  - Confused about what happens after unlocking the safe. 
- Taking their notes into consideration, we decided to add a buzzer that beeps once the safe is open alongside a clicking sound that is played on the screen. We also plan on having the users advance to the next phase wherein the safe is open and the user is meant to collect the money. One other thing we would like to add is an introductory page of some sort to guide the users to the way in which they are meant to use the program. Finally, we will attempt to add a time limit to raise the stakes of the game and make it more challenging. 

## Fourth working session
- Unfortunately we faced struggles while working with the serial communication. For some unknown yet reason the serial communication only worked on the IM laptop we borrowed. This led to a setback in our work, but as soon as we figured that out we were able to continue working.

- We took by the feedback we got from the user testings we did earlier and decided to add some extra features to our project.

- First off we added an instruction page to guide the users of our program to the way in which they’re supposed to use it. This was not much of a challenge as we both had experience working with menus and instruction pages on P5 from our earlier work in the midterm project. We decided to make it look a bit more creative by incorporating images on the page. Below is an image that shows what our instructions page looks like.

<img width="468" alt="instructions1" src="https://user-images.githubusercontent.com/98512587/168447801-7c1f46c0-459f-4948-b8bd-487c1610e93e.png">


- We also though it was necessary to make sure that the value of the light sensor received remained consistent across environments, that is, it does not change with the change of lighting and impact the experience of the users. To do that we added an led light and sound effects were also used.

- One thing we also added following the user testing’s suggestions to make the game a bit more challenging was a flashlight. This effect is intended to be used by user 1 to sabotage user 2’s experience. We did so by adding an audio that turns on with the flash effect on the screen. This happens as soon as the vault is clicked.

- here is the final schematic:

![final_schematic](https://user-images.githubusercontent.com/98512587/168447703-15b5d5fc-6ca4-4989-b807-e9961e44bf47.png)

- and here is the final circuit:

![finalcircuit](https://user-images.githubusercontent.com/98512587/168447766-e586dec2-8a39-429b-8199-485f91d4bb6f.png)

- here is the final screen when the thief player has opened the vault:
<img width="468" alt="moneyinvault" src="https://user-images.githubusercontent.com/98512587/168447825-0bf15a5d-5ec5-4bfc-b3d6-666c17f32c90.png">


## Second round of user testing
- i tried the game with 4 of my family members, they took turns where two people would play at a time. 
- i didnt explain the premise of the game and let the newly added instructions to speak for themselves, except for when my youngest brother was playing
- rounds and feedback:
  - both parents: enjoyed the sabotaging element, and found the concept straight forward. like the simple and consistent graphiics and shapes. suggested a bigger board because the controls were cramped.
  - both siblings: youngest loved sabotaging with the flashlight, but got confused and upset when he pressed the flashlight at the same time as other sibling twisted the potentiometer to the correct password and the vault opened. said it was 'unfair'. this prompted us to think about having seperate buttons for the flashlight and for opening the safe.
  - youngest sibling and parent: got very competitive and into the game. Took a while for the youngest sibling to get the password, so we though maybe adding the values to the on-screen knob from 1-180 would be helpful for navigation.
  - middle sibling and parent: got a hang of the mechanics and started being strategic with the controls. parent would sabotage sibling heavily in the wrong place to trick them into thinking the password was there. sibling focused on going slowl and steady, knowing that the knob is sensitive.

- here is a video of the final program that the users were testing:




https://user-images.githubusercontent.com/98512587/168484681-68a67e63-6140-41e3-babf-c725e86be97e.mov



- here is the link to the p5.js code for the game:
- https://editor.p5js.org/ShN/sketches/3pBG-ho6G

## Struggles/overcoming them: 
- we couldn't find a way to stop the audio from looping so it sounds like a continuous ‘beep’, however we used this to outr advantage and made it so that the flashlight sound covered up the click so that the thief player would become confused.
- Switching screens was hard to keep in mind as the code progressed, especially since most of them were dependent on if statements that constantly needed updating and adjusting, but it works well now.
- The biggest issue was serial communication, for some unknown reason, the communication only worked with one laptop, this made us face a few hardships as this was a collaborative project. This then led us to lose almost tow days of work but we quickly got back on our feet when we figured out it worked on one computer.
- Originally, all three sensors where not well spaced, not allowing users to comfortably play the game, so with a few adjustments, the arduino board was updated in terms of positioning of both the sensors and wires. However, we would like to address this in more detail in the future prospects section.

## Good decisions we made: 
- By first building the arduino board and testing it independently from the p5 code, we faced no problems with it at any stage in our process, making solving bugs much easier. Additionally, using the p5 print function allowed us to check if the communication was working but also if the values we were getting were accurate or matched the code we were actively writing. for a period of time, this was helpful with our light sensor because it helped us notice how we either needed a threshold (professors suggestion) or a light source to keep it constant. this is because different envirionments had different lighting conditions and so we couldnt keep a constant value in the if statements that depended on the light sensor. also, we initially set the if statementsthat relied on the button being pressed to change the interface when the button value read > 1. however, we then realized by printing the button values live that because we were using the button frequently and not taking it out of the circuit, the baseline or unpressed value became 3, then 7 (given that we set it to analogRead). this made us realize straight away where the probvlem was and we set the button value for the pressed button in the if statement to be > 300. 
- Although the serial communication only works with one laptop, the fact that it doesn't require another program to work definitely made replaying the sketch and the code easier. since we were used to p5 being a program that we can always rerun and change as we go, it wouldve been difficult if we had to write a large chunk of code before going through the lengthy process of serial communication using a program.
- Saving the instructions to the last step meant that by that time we fully comprehended the game and played it enough times to be able to write clear, concise instructions for players to understand. 
- Doing the user testing early on in the process meant that the basic code of the game was evaluated, and ultimately led us to make more user-geared decisions in design and functionality. We also were able to see a difference in how user-friendly our design was after the feedback from the first user testing when we did a second round of user testing.
- by simplifying the interface graphics from the beginning, we were able to focus on the actual programming and mechanics of the game, and this allowed us to get the most important aspects to work first.

## future prospects in design and programming
- one thing we learnt from taking this course both through the reading material and practical assignments is that user testing and interactive media in general is a continous process. there is always a way to improve the usability, aesthetic appeal, applicability, or even handling of a project. there are many dirrections we introduced when we were looking at initial ideas, and we want to take a chance to explore those in more depth here for future referance, but we also want to look at ways to improve our existing design in simple ways to enhance its appeal.

- one thing i immediately wanted to explore was the actual panel or board users would interact with to communicate with p5. down below, you can see a labelled sketch of what our board could potentially look like with further development. we took into consideration feedback about how the arduino breadboard itself might be too small, so in the sketch im imagining a wooden or acrylic rectangular box with the arduino sitting inside. we can use larger potentiometers and button that are bright and user friendly, and seperate them based on wether they are to be used by player 1 on the left or player 2 on the right.

- i was really inspired when seeing the innovative designs at our class' showcase, and one thing that caught my eye were the led displays. in the image below, i imagined it being in middle so its equally visible to both of the players, and so its acts as an intuitive seperating between controls incase users were confused. ive suggested a few ways this display could be used in the orange box. 

![potential_design](https://user-images.githubusercontent.com/98512587/168447775-dfddde67-42b4-4236-9905-b23f9b5c5ed6.png)
