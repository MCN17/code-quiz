var quizQuestions = [{

        question: "What method would you use to create a DOM object Element?", 
        answers: {
        0: "A: .getAttribute()", 
        1: "B: .createElement()", 
        2: "C: .getElementById", 
        3: "D: .setAttribute()", 
    },
        correctAnswer: ".createElement()"
    
},
{
    question: "What are variables used for?", 
    0: "A: Iterating over arrays", 
    1: "B: Linking a JavaScript file to your html", 
    2: "C: Storing data", 
    3: "D: Performing specific tasks", 
    correctAnswer: "Storing data"
},
{
    question: "When declaring a function, what comes after the keyword 'fucntion'?", 
    answers: {
    0: "A: ()", 
    1: "B: ;", 
    2: "C: /", 
    3: "D: ++", 
},
    correctAnswer: "()"
}, 
{
    question: "What would you use if you wanted to execut a block of code a number of times?", 
    answers: {
    0: "A: While Loop", 
    1: "B: Math.random()", 
    2: "C: For loop", 
    3: "D: Switch statement", 
},
    correctAnswer: "For loop"
}, 
{
    question: "Using the word 'break' will stop the execution inside the switch block.", 
    answers: {
    0: "A: True", 
    1: "B: False", 
},
    correctAnswer: "True"
}
];

var startQuiz = document.querySelector("#quiz-button");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers")

function displayQuestion (currentQuestion) {
   

    var questionSentence = document.createElement("h3");
    var answerChoices = document.createElement("ul");
    var answer0 = document.createElement("li");
    var answer1 = document.createElement("li");
    var answer2 = document.createElement("li");
    var answer3 = document.createElement("li");

    questionSentence.textContent = currentQuestion.question;
    answer0.textContent = currentQuestion.answers[0];
    answer1.textContent = currentQuestion.answers[1];
    answer2.textContent = currentQuestion.answers[2];
    answer3.textContent = currentQuestion.answers[3];

    answerChoices.appendChild(answer0);
    answerChoices.appendChild(answer1)
    answerChoices.appendChild(answer2)
    answerChoices.append(answer3)
    questions.appendChild(questionSentence);
    questions.appendChild(answerChoices);

}

startQuiz.addEventListener("click", function() {
    displayQuestion(quizQuestions[0]);
})


