## Inspiration
- initially, i was heavily inspired by the cooking games i grew up with and loved playing. ive always had such a vivid memory of the different interactions and steps the user would need to take to complete a recipe.
- i was especially fond of the game below because of its attractive pixelated interface and range of possibilities
![IMMidTermInspo](IMMidTermInspo.jpeg)
## Beiginning stages
- So first, i started experimenting with creating pixelated art in order to insert them into the game as images
- i wanted to create a simple game in which the user would combine different ingredients to make a chocolate cake
- i used the procreate app for the images and created a new brush that had a square shape to create the pixelated effect. i started modelling the different aspects such as the avatar, flour, bowl, chocolate, and eggs.
- after downloading them however, since the pixels were so small, the image became blury everytime i tried making it bigger. so i used a [pixel art scaler website](https://yal.cc/r/19/upscale/) to scale the images and make them bigger so that the resolution would be maintained no matter the size of my canvas
- here are some example of the images i created:
![IMMidTermFlour](IMG_0807(1).png)
![IMMidTermAvatar](IMG_0804(1).png)
![IMMidTermChocolate](IMG_0805(1).png)
## biggest predicted challenge and how i solved it
- Since in my previous assignment where i created a cereal simulator i used arrays, i dont think i would have much trouble adapting the principle again and improving on it. 
- however, i think the hardest thing i faced in that assignment was trying to figure out how to change a aspect of the program with a mouse click in a way that would last and not disappear momentarily after the mouse is clicked.
- I wanted to create a stage in this game where the user can crack an egg into a bowl by clicking the mouse within the range of the bowl. i also wanted them to be able to then grab another egg and crack it into the bowl.
- at first, i loaded the egg and bowl images into the program, and started experimenting with the if() and while() variables to see if i can allow the user to crack an egg by simply touching the edge of the bowl. That did not work as the crack on the egg would only last as long as the mouse stayed in that position
- so then i started to work with mousePressed() and mouseClicked() functions. However i faced the same problem where i would either have to contionusly press for the image to change or it would only last one click.
- i then discovered the mouseReleased() function and started seeing what i could do with it. at first i tried asking the function to draw the function at a specific x and y point, but that didnt work <br />
![Process](ProcessMidTerm1.png)
- so then i tried to assign a new value to the variable that was given the loaded image of uncracked egg. i made it equal to the variable of the cracked egg image <br />
![Process](ProcessMidTerm2.png)
- this worked really well, and so i expanded the parameters of where the mouse could be released in order for the egg to only be cracked when it is in the bowl. i also created an else{} where the egg variable returned to its default to accomodate for grabbing other eggs from outside the bowl parameters and cracking it again. <br />
![Process](ProcessMidTerm3.png)
- After this, i really wanted an animation of the egg contents to fall into the bowl everuytime an egg was cracked. so i created a global variable <br />
![Process](ProcessMidTerm4.png)
## End Result
![EggCrack](https://user-images.githubusercontent.com/98512587/156070719-1507c5f0-96fd-4a4e-9b01-46cba9da12cc.gif)
