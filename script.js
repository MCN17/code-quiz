var quizQuestions = [
    {
        question: "What method would you use to create a DOM object Element?", 
        choices: [".getAttribute()", ".createElement()", ".getElementById", ".setAttribute()"], 
        answer: ".createElement()"
    },
    {
        question: "What are variables used for?", 
        choices: ["Iterating over arrays", "Linking a JavaScript file to your html", "Storing data", "Performing specific tasks"], 
        answer: "Storing data"
    },
    {
        question: "When declaring a function, what comes after the keyword 'function'?", 
        choices: ["()", ";", "/", "++"], 
        answer: "()"
    }, 
    {
        question: "What would you use if you wanted to execute a block of code a set number of times?", 
        choices: ["While loop", "Math.random()", "For loop", "Switch statement"], 
        answer: "For loop"
    }, 
    {
        question: "Using the word 'break' will stop the code execution inside the switch block.", 
        choices: ["True", "False"], 
        Answer: "True"
    }
];

// Buttons
var highScoresButtonEl = document.querySelector(".high-scores");
var quizButtonEl = document.querySelector(".quiz-button");

var introTextEl = document.querySelector(".intro-text");
var questionsEl = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices");
var timerEl = document.querySelector(".timer");

quizButtonEl.addEventListener("click", function() {
    document.querySelector(".intro-text").style.visibility = "hidden";
    startTimer();
    displayQuestions();
    displayChoices();
    
})


function displayQuestions () {
    questionsEl.textContent = quizQuestions[0].question;
}

function displayChoices () {

    choicesListEl.textContent = quizQuestions[0].choices;

}


var choicesListEl = document.createElement("ul");
    choicesListEl.setAttribute("class", "choices");
    choicesEl.appendChild(choicesListEl);

var startTime = 75;
var quizTime;
secondsElapsed = 0;

function startTimer() {
    timerEl.textContent = startTime;
    quizTime = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = startTime - secondsElapsed;
        
    }, 1000);
}
