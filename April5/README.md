## Plan
- i wanted to first create a circuit where the led lights would be flickering and the user would have to use the Potentiometer and switch to stop them from flickering.
- i wanted to use all 4 led colors to make it fun and introduce some variety
- i also wanted there to be a specific Potentiometer where the leds would stop flickering

## Process
- at first, i created a simple circuit of th switch connecting to the led. 
- to make it flicker, i used the random() function on the delay and set it between 0 and 1000
- i added a second led and two if statements so that the led's would flicker out of sync unless the button was being pressed
- i wanted to add more led lights but they wouldnt light up even if i switched around the pins and positions, so i stuck with two.
- i also noticed that the blue led became dimmer than the red led when i made two seperate if statments.
- i then added the Potentiometer and connected it to its own analog pin and to the same ground.
- i made sure to position it at a suitable distance from the led lights and the switch so that the users can clearly see the leds, and simultaneously use both the switch and Potentiometer
- so far this is the schematic of all the elements:

![schematic](schematic.png)

- i somewhat struggled with the code here, as i wanted the light to stop flickering when the switch was being pushed and the Potentiometer was in a specific interval of values. however when i tried to do this, the program would skip the other if statements and carry out this one even if the switch was not being pressed.
- so instead, i subtracted the value of the Potentiometer position from the delay so that the delay would get smaller as the user tilted the Potentiometer, causing the flicker to get faster 
- this ended up working well and i purposely didnt scale the Potentiometer values (1023) to the delay speed of 1000 so that when the Potentiometer value goes over 1000, the leds would 'stop flickering', achieving the goal of stoping the flickr
- i was happy with the result, which is illistrated in this video:

https://user-images.githubusercontent.com/98512587/161640712-dfad67be-762a-4535-880c-641e6bb87b2a.mp4

- however, i realized that you could still stop the flickering without having to sync up the leds using the switch if you wanted to. so to solve this issue, instead of subtracting the Potentiometer position value from both leds when the button isnt pressed, i subtracted it from the red led and then added it to the blue led. 
- this way, even if the Potentiometer was turned up all the way, one light would still flicker without pressing the switch
- this video illustrates the final result:

