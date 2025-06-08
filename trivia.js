const readlineSync = require('readline-sync');

// Promp: Build Trivia
// Greet the user and ask if they want to play the game
// Record the user's response



// Ask a question and record the user's response
// Check the user response against the correct answer
// If the answer is correct, congratulate the user


// Worse way to structure the questions and answers
// const firstQuestion = "What is the freezing point of water?";
// const firstQuestionAnswers = ['0 C', '100 C', '32 C', '212 C'];
// const firstQuestionAnswerIndex = firstQuestionAnswers[0];

// const secondQuestion = "When did the founding fathers sign the Declaration of Independence?";
// const secondQuestionAnswers = ['1776', '1787', '1791', '1801'];
// const secondCorrectAnswers = secondQuestionAnswers[0];



// greetUser();
// askQuestion(questions);
// askQuestion(secondQuestion, secondQuestionAnswers, secondCorrectAnswers);

function greetUser() {
    console.log("Welcome to Trivia!");
    const wantToPlay = readlineSync.keyInYN("Do you want to play? ");
    return wantToPlay;
}

// Better way to structure the questions and answers
const questions = [
  {
    question: "What is the freezing point of water?",
    answers: ['0 C', '100 C', '32 C', '212 C'],
    correctIndex: 0,
  },
  {
    question: "When did the founding fathers sign the Declaration of Independence?",
    answers: ['1776', '1787', '1791', '1801'],
    correctIndex: 0,
  },
];

function askQuestion(question, answers, correctAnswer) {
  console.log("Your question is...");
  console.log(question);
  const userResponse = readlineSync.keyInSelect(answers, 'Choose an option: ');  
  if (correctAnswer === answers[userResponse]) {
    console.log("Congratulations! You got it right.");
    return true;
  } else {
    console.log("Sorry, that's not correct. The correct answer is " + correctAnswer);
    return false;
  }
}

if (greetUser()) {
  for (const q of questions) {
    askQuestion(q.question, q.answers, q.answers[q.correctIndex]);
  }
} else {
  console.log("Maybe next time!");
}