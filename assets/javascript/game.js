//variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessedLetters = []; // an array that we're going to populate in order to keep a record of letters guessed
var guessesLeft = 9; // to keep track of guesses left
var wins = 0;
var losses = 0;
var guessesMade = 0;
var letterToGuess = null;
//three functions to update 
//guesses left
//letter to guess
//guesses so far

//an additional meta function to reset all the variables

var updateGuessesLeft = function(){
    //grab the HTML element and set it equal to the number of guesses left
    document.querySelector("#guesses-left").innerHTML = guessesLeft; //selects a random element 
};

var updateLetterToGuess = function(){
    //get a random letter to guess
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function(){

    document.querySelector=("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var updateGuessesMade = function(){
    document.querySelector=("#guesses-made").innerHTML = guessesMade;
};

var reset = function(){
    guessesLeft = 9;
    guessesSoFar = 0;
    guessesMade = 0;
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    updateGuessesMade();
};

//execute updateLetterToGuess(); and updateGuessesLeft() on page load
updateLetterToGuess();
updateGuessesLeft();



//ok, now we're playing the game!
//1. get a keyboard entry - this is going to all happen from within a keyclick
//2. reduce the number of guesses left
//3. lowercase the letter
//4. add the guessed letter to the guessedLetters array
//5. check to tsee if it matches the letter
//6. if it matches the letter, count it as a win and reset the guame
//7. check to see if we're out of guesses
//8. if we're out of guesses, update the count of losses

//capture the keyboard clicks
document.onkeyup = function(event){

    //remove one of the guesses
    guessesLeft--;
    guessesMade++;
    document.querySelector("#guesses-made").innerHTML = guessesMade;
    //make the letter lower case
    var letter = String.fromCharCode(event.which).toLowerCase();

    //add the guess to the guessedLetters array
    guessedLetters.push(letter);

    //run the update functions
    updateLetterToGuess();
    updateGuessesLeft();

    //check to see if the letter matches 
    if (letter === letterToGuess){
        wins++;
        document.querySelector("#wins").innerHTML = wins; //adds the value of the "wins" variable to the item with the "wins" id
    }

    if (guessesLeft === 0){
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
};