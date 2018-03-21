// GLOBAL VARIABLES
// ==================================================================================

// List questions
var questions = [
  {
    question: "The most popular orchid genus, often grown as houseplants, are commonly reffered to as what?",
    answers: [
      "Moth Orchids",
      "Butterfly Orchids",
      "Pancake Orchids",
      "Owl Orchids"
    ],
    correctAnswer: "Moth Orchids",
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
      "Laelia anceps",
      "Brassabola nodosa",
      "Myrmecophila tibicinis",
      "Angraecum sesquipedale"
    ],
    correctAnswer: "Angraecum sesquipedale",
    questionImage: "<img src='./assets/images/angraecum_veitchii.jpg'>"
  },
  {
    question:
      "This orchid genus attracts pollinators (male bees) by producing a flower that mimics both the scent and appearance of female bees",
    answers: [
      "Ophrys",
      "Catteleya",
      "Phalaenopsis",
      "Angraecum"
    ],
    correctAnswer: "Ophrys",
    questionImage: "<img src='./assets/images/ghost_orchid.jpg'>"
  },

];

// FUNCTIONS
// ===================================================================================

function gameTimer() {
  var counter = 30;
  var countdown = setInterval(function() {
    console.log(counter);
    counter--;
    document.getElementById("timerArea").innerHTML = "<h2> Time remaining:  " + counter + "</h2>";

    if (counter === 0) {
    // If time has expired, then...
      clearInterval(countdown);
      endGame();
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
    $("#questionArea").append("<h2>"+questions[i].question+"</h2>");
    for(var j = 0; j<questions[i].answers.length;j++){
      $("#questionArea").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
    }

  }
}

function endGame() {
  
  // Define variables for incorrect vs. correct answers
  var correct = 0;
  var incorrect = 0;

  // Display results statistics area
  document.getElementById("questionBoard").style.display = "none";
  document.getElementById("endGameStats").style.display = "inline";

  // Check the right/wrong status of each answer
  $.each($('input[name="question-0"]:checked'),function(){
  if($(this).val()==questions[0].correctAnswer){
    console.log('bananas0');
    correct++;
  } else {
    incorrect++;
  }
    });
    
$.each($('input[name="question-1"]:checked'),function(){
  if($(this).val()==questions[1].correctAnswer){
    console.log('bananas1');
    correct++;
  } else {
    incorrect++;
  }
    });

$.each($('input[name="question-2"]:checked'),function(){
  if($(this).val()==questions[2].correctAnswer){
    console.log('bananas2');
    correct++;
  } else {
    incorrect++;
  }
    });

$.each($('input[name="question-3"]:checked'),function(){
  if($(this).val()==questions[3].correctAnswer){
    console.log('bananas3');
    correct++;
  } else {
    incorrect++;
  }
    });

$.each($('input[name="question-4"]:checked'),function(){
  if($(this).val()==questions[4].correctAnswer){
    console.log('bananas4');
    correct++;
  } else {
    incorrect++;
  }
    });

    // Define the total incorrect variable
    var totalIncorrect = (5-correct);

    // Print the correct/incorrect numbers to their respective divs
    $("#correctStats").html("<h2> Correct Answers: </br> <hr>"+correct+"</h2>");
    $("#incorrectStats").html("<h2> Incorrect Answers: </br> <hr>"+totalIncorrect+"</h2>");

  }