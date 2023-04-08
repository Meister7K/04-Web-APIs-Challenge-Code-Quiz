// !Global Variables
var startBtn = document.querySelector("#start-btn");
var header = document.querySelector("#title");
var highscoreBtn = document.querySelector("#highscore-btn");
var scoreContainer = document.querySelector("#score-container");
var homeBtn = document.querySelector("#return");
var scoreList;
let timer = 50;
var timerContainer = document.querySelector("#timer-container");
var questionContainer = document.querySelector("#question-container");
var timerElement = document.querySelector("#timer");

// !Event Listeners
startBtn.addEventListener("click", start);
highscoreBtn.addEventListener("click", showScores);

// !functions
function start() {
  header.setAttribute("class", "hidden");
  timerContainer.setAttribute("class", "visible");
  questionContainer.setAttribute("class", "visible");
  startTimer();
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

function youDied(){
    timerContainer.setAttribute("class", "hidden");
    questionContainer.setAttribute("class", "hidden");
}

console.log(scoreContainer);
console.log(header);

// ! when i click start,
// i need the first question to pop up with 4 answers
// i need the timer (50s) to appear and start.
// i need the header to disappear.
//  ! when I click an answer,
// i need to be told right or wrong
// i need the timer to lose time (10s) for a wrong answer
// i need the next question to appear
// i need this to happen for each question
//  ! when the quiz is over by time,
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
