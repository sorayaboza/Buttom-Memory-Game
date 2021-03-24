// global constants (in milliseconds)
const clueHoldTime = 700; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

/*
//Global Variables: Creates three variables in the global scope.

pattern will keep track of the secret pattern of button presses. 
We've assigned it an array of 8 integers between 1 and 4. 
These integers correspond to the four game buttons. 
Feel free to change this pattern, but make sure you only use the integers 1 through 4!
Cred: https://betterprogramming.pub/generating-random-numbers-in-javascript-4b2a1e9d1806*/
function getRndInteger(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}
  
var pattern = [getRndInteger(1,4), getRndInteger(1,4), getRndInteger(1,4), 
               getRndInteger(1,4), getRndInteger(1,4), getRndInteger(1,4), 
               getRndInteger(1,4), getRndInteger(1,4)];

/* progress is assigned an integer that represents how far along the player is in guessing 
the pattern. By starting at 0, we can use progress as an index into the pattern array.*/
var progress = 0; 

/*gamePlaying is assigned a Boolean value that will keep track of whether the game is 
currently active. It will be true once the user presses Start, and remain true until 
they win or lose, or press Stop.*/
var gamePlaying = false; // semicolon is not necessary but many programmers like to include it.

// This keeps track of whether or not a tone is playing.
var tonePlaying = false;
var volume = 1;  //must be between 0.0 and 1.0

// This keeps track of where the user is in the clue sequence.
var guessCounter = 0;

// This function is for when the user starts the game.
function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  /*
  When web browsers interpret HTML code in order to render a page, they create an internal 
  representation of the page called the Document Object Model or DOM.
   - The document keyword in JavaScript represents the page's DOM as a JavaScript object.
   - getElementById returns an object representing the element that matches. */
}

function stopGame(){
    //initialize game variable
    gamePlaying = false;
  
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 350,
  3: 400,
  4: 450,
}

/*
playTone takes a button number (1 through 4, corresponding with the four game buttons on the page) 
and a length of time in milliseconds (1000 milliseconds = 1 second). When you call this function, 
it plays a tone for the amount of time specified.*/
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

/* startTone and stopTone break up playing the tone into two steps. 
Once you call startTone the tone will continue playing until you call stopTone. 
These functions require an argument representing a button number (1 through 4).*/
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Functions for lighting or clearing a button:
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Function for playing a single clue.
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    // The setTimeout function is a built-in JavaScript function for scheduling code to call 
    // at some point in the future.
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// playClueSequence uses a for loop to repeat some code once for each clue we want to play.
// Recall: the progress variable keeps track of which turn we're on.
// Recall: the pattern array is storing the secret pattern of clues. 
function playClueSequence(){
  guessCounter = 0; // resets clue sequence counter to 0 for every new turn
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// This function is for if the player loses the game.
function loseGame(){
  stopGame();
  // alert is a built-in JavaScript function that pops up a dialog box with a message 
  // inside (in this case, "Wooomp! Game over :,(".
  alert("Womp wooomp! You lost, game over :,(");
  location.reload();
}

// This function is for if the player wins the game.
function winGame(){
  stopGame();
  alert("Somehow, you won! Congrats! :D");
  location.reload();
}

// The logic for checking each guess goes into this function.
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){ // Checks if the user pressed Start
    return;
  }
  if(pattern[guessCounter] == btn){ // If the pattern given is equal to the buttons pressed,
    // then the guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        // The game over is over. You win!
        winGame();
      }else{
        // The pattern was correct, so add a segment.
        progress++;
        playClueSequence();
      }
    }else{
        // Correct so far. Check the next guess.
        guessCounter++;
      }
  }else{
      // The guess was incorrect. GAME OVER, you LOSE!
      loseGame();
    }
}
