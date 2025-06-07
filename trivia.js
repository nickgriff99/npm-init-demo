const readlineSync = require('readline-sync');

// Promp: Build Trivia
// Greet the user and ask if they want to play the game
// Record the user's response


function greetUser() {
    console.log("Welcome to Trivia!");
    const wantToPlay = readlineSync.keyInYN("Do you want to play? ");
    return wantToPlay;
  }

// Ask a question and record the user's response
// Check the user response against the correct answer
// If the answer is correct, congratulate the user

const firstQuestion = "What is the freezing point of water?";
const firstQuestionAnswers = ['0 C', '100 C', '32 C', '212 C'];
const correctAnswer = firstQuestionAnswers[0];

function askQuestion(question, answers, correctAnswer) {
  console.log("your first question is...");
  console.log(question);
  const userResponse = readlineSync.keyInSelect(answers, 'Choose an option: ');
  if (correctAnswer === answers[userResponse]) {
    console.log("Congratulations! You got it right.");
  } else {
    console.log("Sorry, that's not correct. The correct answer is " + correctAnswer);
  }
}

greetUser();
askQuestion(firstQuestion, firstQuestionAnswers, correctAnswer);



