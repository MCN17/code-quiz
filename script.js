// Array of the questions, choices, and answers for the quiz.
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
        answer: "True"
    }
];

// Buttons
var highScoresButtonEl = document.querySelector(".high-scores");
var startQuizEl = document.querySelector(".quiz-button");
var choicesButtonEl = document.querySelector(".choices");

var introTextEl = document.querySelector(".intro-text");
var questionsEl = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector(".answer")
var timerEl = document.querySelector(".timer");

var choicesListEl = document.createElement("ul");
    choicesListEl.setAttribute("class", "choices");
    choicesEl.appendChild(choicesListEl);


// Button that starts the timer, displays the first question and the first set of choices.
startQuizEl.addEventListener("click", function() {
    document.querySelector(".intro-text").style.visibility = "hidden";
    startQuizEl.style.visibility = "hidden";
    startTimer();
    
    
    
})
// When the any of the choices are clicked, the correct answer is displayed below them.
// choicesButtonEl.addEventListener("click", function () {
//     displayAnswer();

// })



choicesButtonEl.addEventListener("click", displayAnswer);


// Incriments each question in the array of objects.
var q = 0;
function displayQuestions () {
    questionsEl.textContent = quizQuestions[q].question;
    displayChoices();
}   

// Turns the choices from the array into an unordered list
function displayChoices () {
    for (i = 0; i < quizQuestions[q].choices.length; i++){
        var li = document.createElement("li");
        li.textContent = quizQuestions[q].choices[i];
        li.id = i
        choicesListEl.appendChild(li);
        
    }
    q++;
}

// Takes answer from the array of objects and places it as a paragraph below the unordered list of choices.
 function displayAnswer (event) {
    console.log(event.target.textContent)
    var p = document.createElement("p");
    if (quizQuestions[0].answer === event.target.textContent) {
        p.textContent = "Correct"
    } else {
        p.textContent = "Incorrect";
        startTime -= 8;
    }
    p.id = i
    answerEl.appendChild(p);

    setTimeout (function () {
        removeChoices();
        displayQuestions();
    }, 2000);
    
 }



 // Removes last set of choices/display of "Correct/Incorrect"

 function removeChoices () {
    var choicesEl = document.querySelector(".choices");
    choicesEl.remove();
    removeAnswer();

 }


 // Removes display of "Correct/Incorrect" from last question
 function removeAnswer () {
    var answerEl = document.querySelector(".answer")
    answerEl.remove();
 }


 


 




 
// Styling for the li
// Click one of the buttons
// , the answer comes up and goes to next question


var startTime = 75;
var quizTime;
secondsElapsed = 0;

function startTimer() {
    
    timerEl.textContent = startTime;
    quizTime = setInterval(function () {
        if (startTime > 0){
        startTime--;
        timerEl.textContent = startTime;
        } else {
            endQuiz()
        }
    }, 1000);

    displayQuestions();
}

function endQuiz(){
    timerEl.textContent = "GAME OVER!"

    
}



/*  quizQuestions[0].choices.forEach(function(element) {
        var li = document.createElement("li");
        li.textContent = element;
        choicesListEl.appendChild(li);
      }); */

// use setTimeout to display a message a couple of seconds after the user selects the correct answer.