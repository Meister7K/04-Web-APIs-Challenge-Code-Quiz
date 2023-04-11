// !Global Variables
var startBtn = document.querySelector("#start-btn");
var header = document.querySelector("#title");
var highscoreBtn = document.querySelector("#highscore-btn");
var scoreContainer = document.querySelector("#score-container");
var homeBtn = document.querySelector("#return");
var loser = document.querySelector("#loser");
var solutionNote = document.querySelector("#solution-note");
var victoryContainer = document.querySelector("#victory-container");
var scoreInput = document.querySelector("#score-input");
var scoreList;
var timer = 75;
var timerContainer = document.querySelector("#timer-container");
var questionContainer = document.querySelector("#question-container");
var timerElement = document.querySelector("#timer");
var questionDisplay = document.querySelector("#question-display");
var submitBtn = document.querySelector("#submit-btn");
var playerName = document.querySelector("#player-name");
var answerBtns = Array.from(document.getElementsByClassName("answer-buttons")); //choices
var answerContainer = document.querySelector("#answer-container");
var answerSlotA = document.querySelector("#answer-slotA");
var answerSlotB = document.querySelector("#answer-slotB");
var answerSlotC = document.querySelector("#answer-slotC");
var answerSlotD = document.querySelector("#answer-slotD");
var index = 0;
var correctAnswer;
var currentQuestion = {}; 
var availableQuestions = []; 
var score;
var time;

// !Objects
var questionsList = [
  {
    question: "What is thy maiden's name?",
    answers: ["Fia", "Melina", "Hyetta", "I am maidenless"],
    solution: "Melina",
  },
  {
    question:
      "How many player deaths have there been in Elden Ring in the first year since launch?",
    answers: [
      "700,000-800,000",
      "500-600 million",
      "9 billion +",
      "I've never died once",
    ],
    solution: "9 billion +",
  },
  {
    question: "Which boss has the highest body count?",
    answers: [
      "Malenia, Blade of Miquella",
      "Starscourge Radahn",
      "Margit, The Fell Omen",
      "Radagon of The Golden Order",
    ],
    solution: "Malenia, Blade of Miquella",
  },
  {
    question: "What % of players deaths are caused by falling?",
    answers: ["2%", "69%", "21%", "14%"],
    solution: "14%",
  },
  {
    question: "Who is The Prince of Death?",
    answers: ["Godrick", "Godwyn", "Malenia", "Gravity"],
    solution: "Godwyn",
  },
]; 

// !Event Listeners
startBtn.addEventListener("click", start);
highscoreBtn.addEventListener("click", showScores);
submitBtn.addEventListener("click", submit);


// !functions

// !Start game function
function start(e) {
  e.preventDefault();
  header.setAttribute("class", "hidden");
  timerContainer.setAttribute("class", "visible");
  questionContainer.setAttribute("class", "visible");
  index = 0;
  availableQuestions = [...questionsList];
  startTimer();
  displayQuestion();
}

// !Initial display function gnq
function displayQuestion() {
  currentQuestion = questionsList[index];
  questionDisplay.innerText = currentQuestion.question;
  answerSlotA.innerText = currentQuestion.answers[0];
  answerSlotB.innerText = currentQuestion.answers[1];
  answerSlotC.innerText = currentQuestion.answers[2];
  answerSlotD.innerText = currentQuestion.answers[3];
  correctAnswer = currentQuestion.solution;
  //    console.log(currentQuestion);
  //    console.log(correctAnswer);
}

// !answer question function
answerBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.textContent);
    if (button.textContent !== correctAnswer) {
      timer -= 15;
        solutionNote.innerText = "Wrong";
    } else {
        solutionNote.innerText ="Right";
    }
    index++;
    if (index < questionsList.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  });
});

// ! scoreboard function
function showScores() {
  header.setAttribute("class", "hidden");
  scoreContainer.setAttribute("class", "visible");
  console.log(scoreList);
}
// !Timer
function startTimer() {
  time = setInterval(function () {
    timer--;
    timerElement.textContent = "Time Remaining: " + timer;
    // if (endQuiz){
    //     timer.value = score;
    //     clearInterval(time);
    // }
    if (timer <= 0) {
      clearInterval(time);
      youDied();
      //   return "";
    }
  }, 1000);
}

// !lose function
function youDied() {
  timerContainer.setAttribute("class", "hidden");
  loser.setAttribute("class", "visible");
  questionContainer.setAttribute("class", "hidden");
  //   TODO add you died background w home or retry button
}


// ! end quiz function
function endQuiz() {
    clearInterval(time);
    score = timer;
    console.log(score);
  questionContainer.setAttribute("class", "hidden");
  victoryContainer.setAttribute("class", "visible");
  scoreInput.innerText = "your final score: "+ score;
}
// ! Submit form function
function submit(e){
 e.preventDefault();
 if (playerName.value.trim() == ""){
    alert("please insert at least one character");
 return "";
} else {
    var newScore = {
        initials: playerName.value.trim(),
        score: score
    };
    scoresList.push(newScore);
    scoresList.sort(function (a,b) {return b.score - a.score});
    localStorage.setItem("highScores", JSON.stringify(scoresList));
}
}

// ! Pull Leaderboard
var scoresList =JSON.parse(localStorage.getItem("highScores"));


// console.log(answer);
console.log(index);
console.log(answerBtns);

// ! when i click start,
//* i need the first question to pop up with 4 answers
//* i need the timer (50s) to appear and start.
//* i need the header to disappear.
//  ! when I click an answer,
//* i need to be told right or wrong
//* i need the timer to lose time (10s) for a wrong answer
//* i need the next question to appear
//* i need this to happen for each question
//  ! when the quiz is over by time,
//* i need the screen to say you died
//* i need to prompt user to try again
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
