// Question
// Answers
// correct answer
// Question image

// GLOBAL VARIABLES
// ==================================================================================

var counter = 10;
var incorrectCounter = 0;
var correctCounter= 0;
var questions = [
  {
    question: "This orchid is commonly referred to as the _______ Orchid",
    answers: [
      "Moth Orchid",
      "Butterfly Orchid",
      "Pancake Orchid",
      "Owl Orchid"
    ],
    correctAnswer: "Moth Orchid",
    questionImage: "<img src='./assets/images/phalaenopsis_orchid.jpg'>" 
  },
  {
    question:
      "This endangered orchid species and the poachers who hunt them were the subject of the 1998 novel 'The Orchid Thief' by Susan Orlean",
    answers: [
      "Ghost Orchid",
      "Nightshade Orchid",
      "Dancing Lady Orchid",
      "Leafless Orchid"
    ],
    correctAnswer: "Ghost Orchid",
    questionImage: "<img src='./assets/images/ghost_orchid.jpg'>"
  }
];

// FUNCTIONS
// ===================================================================================

function startGame() {
  document.getElementById("hideStart").style.display = "none";
  document.getElementById("questionBoard").style.display = "inline";
}

function gameTimer() {
  var counter = 10;
  var countdown = setInterval(function() {
    console.log(counter);
    counter--;
    document.getElementById("timer").innerHTML = "Time remaining:  " + counter;

    if (counter === 0) {
    //   timeExpired();
      // console.log("HAPPY NEW YEAR!!");
      clearInterval(countdown);
    }
  }, 1000);
}

function timeExpired() {
  document.getElementById("question").innerHTML = "Times up!";
  document.getElementById("allAnswers").style.display = "none";
  document.getElementById("correctAnswer").innerHTML = "The correct answer was:  " + questions[0].correctAnswer;
  document.getElementById("imageArea").innerHTML = questions[0].questionImage;
}

// function checkAnswer() {
//     if (this.questions.correctAnswer ===)

// }

// WORKFLOW
// ===================================================================================

// Timer Loop
gameTimer();

// Question Loop
document.getElementById("question").innerHTML = questions[0].question;

// Answer Loop
document.getElementById("answer1").innerHTML = questions[0].answers[0];
document.getElementById("answer2").innerHTML = questions[0].answers[1];
document.getElementById("answer3").innerHTML = questions[0].answers[2];
document.getElementById("answer4").innerHTML = questions[0].answers[3];

$("#test").html(questions[1].questionImage);

console.log(questions);
