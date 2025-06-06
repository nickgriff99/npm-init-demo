const readlineSync = require('readline-sync');

// Promp: Build Trivia
// Greet the user and ask if they want to play the game
// Record the user's response


function greetUser() {
    console.log("Welcome to Trivia!");
    readlineSync.keyInYN("Do you want to play? ");
}

greetUser();



