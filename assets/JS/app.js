// !Global Variables
var startBtn = document.querySelector("#start-btn");
var header = document.querySelector("#title");
var highscoreBtn = document.querySelector("#highscore-btn");
var scoreContainer = document.querySelector("#score-container");
var homeBtn = document.querySelector("#return");
var scoreList;
var timer = 50;
var timerContainer = document.querySelector("#timer-container");
var questionContainer = document.querySelector("#question-container");
var timerElement = document.querySelector("#timer");
var questionDisplay = document.querySelector("#question-display");
var answers = document.getElementsByClassName("answers");
var answerSlotA = document.querySelector("#answer-slotA");
var answerSlotB = document.querySelector("#answer-slotB");
var answerSlotC = document.querySelector("#answer-slotC");
var answerSlotD = document.querySelector("#answer-slotD");
var index = 0;
// !Objects
var questions = [
  {
    question: "What is thy maiden's name?",
    answerA: "Fia",
    answerB: "Melina",
    answerC: "Hyetta",
    answerD: "I am maidenless",
    solution: 2,
  },
  {
    question:
      "How many player deaths have there been in Elden Ring in the first year since launch?",
    answerA: "700,000-800,000",
    answerB: "500-600 million",
    answerC: "9 billion +",
    answerD: "I've never died once",
    solution: 3,
  },
  {
    question: "Which boss has the highest body count?",
    answerA: "Malenia, Blade of Miquella",
    answerB: "Starscourge Radahn",
    answerC: "Margit, The Fell Omen",
    answerD: "Radagon of The Golden Order",
    solution: 1,
  },
  {
    question: "What % of players deaths are caused by falling?",
    answerA: "2%",
    answerB: "69%",
    answerC: "21%",
    answerD: "14%",
    solution: 4,
  },
  {
    question: "Who is The Prince of Death?",
    answerA: "Godrick",
    answerB: "Godwyn",
    answerC: "Malenia",
    answerD: "Gravity",
    solution: 2,
  },
];

// !Event Listeners
startBtn.addEventListener("click", start);
highscoreBtn.addEventListener("click", showScores);
// questionContainer.addEventListener("click", add);

// !functions
function start() {
  header.setAttribute("class", "hidden");
  timerContainer.setAttribute("class", "visible");
  questionContainer.setAttribute("class", "visible");
  startTimer();
  getQuestion();
}


function getQuestion() {
  questionDisplay.innerHTML = questions[index].question;
  answerSlotA.innerHTML = questions[index].answerA;
  answerSlotB.innerHTML = questions[index].answerB;
  answerSlotC.innerHTML = questions[index].answerC;
  answerSlotD.innerHTML = questions[index].answerD;
  var correctAnswer = questions[index].solution;
}

function showScores() {
  header.setAttribute("class", "hidden");
  scoreContainer.setAttribute("class", "visible");
  console.log(scoreList);
}

function startTimer() {
  var time = setInterval(function () {
    timer--;
    timerElement.textContent = "Time Remaining: " + timer;

    if (timer === 0) {
      // TODO
      youDied();
      return "";
    }
  }, 1000);
}

function youDied() {
  timerContainer.setAttribute("class", "hidden");
  questionContainer.setAttribute("class", "hidden");
}

console.log(scoreContainer);
console.log(index);

// ! when i click start,
// i need the first question to pop up with 4 answers
//* i need the timer (50s) to appear and start.
//* i need the header to disappear.
//  ! when I click an answer,
// i need to be told right or wrong
// i need the timer to lose time (10s) for a wrong answer
// i need the next question to appear
// i need this to happen for each question
//  ! when the quiz is over by time,
// i need the screen to say you died
// i need to prompt user to try again
// ! when quiz is over by answering all the questions,
// i need to show the user their score (time)
// i need to prompt user to enter name
// i need to record name and score together on the leaderboard
// i need to organize leaderboard by highest score
// i need to prompt user to play again

// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// Need timer (act 9/10)
// need score holding/sharing variable
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// event listener (act 11/12)
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// append
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// if else function
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
