// Question
// Answers
// correct answer
// Question image

// GLOBAL VARIABLES
// ==================================================================================

var counter = 10;
var incorrectCounter = 0;
var correctCounter = 0;
var questions = [
  {
    question: "The most popular orchid genus, often grown as houseplants, are commonly reffered to as what?",
    answers: [
      "Moth Orchids",
      "Butterfly Orchids",
      "Pancake Orchids",
      "Owl Orchids"
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
  },
  {
    question:
      "This orchid is the national flower of Costa Rica",
    answers: [
      "Cattleya mossiae",
      "Guarianthe skinneri",
      "Angraecum sesquipedale",
      "Aerangis Fatuosa"
    ],
    correctAnswer: "Guarianthe skinneri",
    questionImage: "<img src='./assets/images/guaria_morada.jpg'>"
  },
  {
    question:
      "This orchid, commonly known as 'Darwin's Orchid', is pollinated exclusively by a species of moth with a 12' proboscis",
    answers: [
      "Ghost Orchid",
      "Nightshade Orchid",
      "Myrmecophila tibicinis",
      "Angraecum sesquipedale"
    ],
    correctAnswer: "Ghost Orchid",
    questionImage: "<img src='./assets/images/angraecum_veitchii.jpg'>"
  },
  {
    question:
      "This orchid genus attracts pollinators (male bees) by producing a flower that mimics both the scent and appearance of female bees",
    answers: [
      "Ghost Orchid",
      "Nightshade Orchid",
      "Dancing Lady Orchid",
      "Leafless Orchid"
    ],
    correctAnswer: "Ghost Orchid",
    questionImage: "<img src='./assets/images/ghost_orchid.jpg'>"
  },

];

// FUNCTIONS
// ===================================================================================

function startGame() {

}

function gameTimer() {
  var counter = 10;
  var countdown = setInterval(function() {
    console.log(counter);
    counter--;
    document.getElementById("timerArea").innerHTML = "Time remaining:  " + counter;

    if (counter === 0) {
    //   timeExpired();
      // console.log("HAPPY NEW YEAR!!");
      clearInterval(countdown);
      timeExpired();
    }
  }, 1000);
}

function startGame() {

  // Invoke the game timer
  gameTimer(); 

  // Hide the start button
  document.getElementById("hideStart").style.display = "none";

  // Show the question board
  document.getElementById("questionBoard").style.display = "inline";
  
  // Add radio boxes to each question item
  for(var i=0; i<questions.length; i++) {
    $("#questionArea").append("<h2>" + questions[i].question + "</h2>");
    for(var j = 0; j<questions[i].answers.length;j++){
      $("#questionArea").append("<input type='radio' name='question- "+i+" 'value='"+questions[i].answers[j]+"'> "+questions[i].answers[j])
    }

  }
}

// function timeExpired() {
//   document.getElementById("question").innerHTML = "Times up!";
//   document.getElementById("allAnswers").style.display = "none";
//   document.getElementById("correctAnswer").innerHTML = "The correct answer was:  " + questions[i].correctAnswer;
//   document.getElementById("imageArea").innerHTML = questions[i].questionImage;
// }

// function checkAnswer() {
//     if (this.questions.correctAnswer ===)

// }

// WORKFLOW
// ===================================================================================

// Timer Loop


















// for (i = 0; i < questionsLength; i++) {

// // Start timer loop
// gameTimer();

// // Question Loop
// document.getElementById("question").innerHTML = questions[i].question;

// // Answer Loop
// document.getElementById("answer1").innerHTML = questions[i].answers[0];
// document.getElementById("answer2").innerHTML = questions[i].answers[1];
// document.getElementById("answer3").innerHTML = questions[i].answers[2];
// document.getElementById("answer4").innerHTML = questions[i].answers[3];

// $("#test").html(questions[i].questionImage);

// console.log(questions[i].correctAnswer);

// }

// console.log(questions);
