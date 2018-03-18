// Question
// Answers
// correct answer
// Question image

// VARIABLES
// ==================================================================================

var questions = [{
    question: "This orchid is commonly referred to as the _______ Orchid",
    answers: ["Moth Orchid", "Butterfly Orchid", "Pancake Orchid", "Owl Orchid"],
    correctAnswer: "Moth Orcchid",
    questionImage: "./assets/images/phalaenopsis_orchid.jpg"
}, {
    question: "This endangered orchid species and the poachers who hunt them were the subject of the 1998 novel 'The Orchid Thief' by Susan Orlean",
    answers: ["Ghost Orchid", "Nightshade Orchid", "Dancing Lady Orchid", "Leafless Orchid"],
    correctAnswer: "Ghost Orchid",
    questionImage: "./assets/images/ghost_orchid.jpg"
}];

// FUNCTIONS
// ===================================================================================

function startGame() {
document.getElementById("hideStart").style.display = "none";
}




// WORKFLOW 
// ===================================================================================




$("#test").html(questions[1].questionImage);

console.log(questions);
