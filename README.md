# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Soraya Boza**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/solstice-orange-brow

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src ="http://g.recordit.co/Jtw52KIJYV.gif" width = 250><br>
<img src ="http://g.recordit.co/LxfBUW4vqO.gif" width = 250><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* I used https://www.w3schools.com/colors/colors_rgb.asp to find out how I could give myself more colors to work with for the background and buttons and such.
* I used https://betterprogramming.pub/generating-random-numbers-in-javascript-4b2a1e9d1806 to generate a random pattern each time rather than the same pattern.
* I used https://unsplash.com for the images. Unsplash is a free use website.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* The part that took me the longest to figure out was the random number generator. When I first saw that listed as an optional feature, I researched online the syntax for random number generators in Javascript. I did this because I’m not very familiar with Javascript; this project is my first time using it.

* Once I found how to generate random numbers, I had to figure out how to make them range from only 1 to 4. I was able to find some more code online that taught me how to range random numbers from 0 to 10, and simply changed the 0 and 10 to 1 and 4. This was done in a function called getRndInteger.

* My final step was figuring out how to get these integers into an array of 8 integers. Even though it’s pretty simple, this step took me a while. Funnily enough, all I had to do was insert my function name, getRndInteger(1,4), into the pattern array 8 times.

*  I’ve only ever used Javascript in this project, so I had to learn a little about how the program worked before I could go off and figure out how to do something new on my own. It took me around an hour of research, and trial and error. I found a code that worked for me, but I wasn’t able to use it because I didn’t understand how it worked. Once I taught myself how it worked, implementing it into my own code became easy. In the end, I was finally able to get a functional random pattern generator for the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* This glitch website is very interesting. In the past, I was in a Game Development Club. We used Unity to work on a game. That was before I knew any Java, so glitch does seem easier for this reason. But because of this comparison, I have questions about game creation using this web development website.

* How advanced can games be using glitch? Are we restricted to only simple graphics, or can we even insert 2D sprites with interesting backgrounds? Speaking of 2D, is that our only restriction as well? Can we insert 3D objects using glitch? I’m not sure if glitch is more for website creation or game creation. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* If I could spend more time on this project, the number one thing I would focus on fixing up more would definitely be the graphics. I would want to make this game as cute (or also as cool) as possible. I have a cute idea of adding a theme to this game- that being cute animals as buttons! For example, I would draw a cute square animal for each button. The red could be a puppy, the yellow a bird, the blue a kitten, and the green a turtle. Oh, and each sound would of course be a cute sound those animals make! For the turtle, I’d likely do a bubble popping sound. And finally, for the background, I was thinking I’d draw a pet store.



## License

    Copyright Soraya Boza

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
