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
    },
    
];

// Buttons
var highScoresButtonEl = document.querySelector(".high-scores");
var startQuizEl = document.querySelector(".quiz-button");
var choicesButtonEl = document.querySelector(".choices");
var submitButtonEl = document.querySelector(".submitBtn")
var tryAgainButtonEl = document.querySelector(".tryAgainBtn")

var highScoresListEl = document.querySelector(".highScoresList")
var enterNameEl = document.querySelector(".highScoresList");
var scoreDisplayEl = document.querySelector(".scoreDisplay");
var userNameEl = document.querySelector(".userName");



var introTextEl = document.querySelector(".intro-text");
var questionsEl = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector(".answer")
var highScoresEl = document.querySelector(".highScoresList");
var formEl = document.querySelector(".form");
var timerEl = document.querySelector(".timer");

var choicesListEl = document.createElement("ul"); // Need to do something different here becuase ul is a block element so it's always going to take up 100% width.
    choicesListEl.setAttribute("class", "choices");
    choicesEl.appendChild(choicesListEl);

var score = 0;

document.querySelector(".highScoresList").style.visibility = "hidden"
document.querySelector(".form").style.visibility = "hidden";
document.querySelector(".tryAgainBtn").style.visibility = "hidden";

// Button that starts the timer, displays the first question and the first set of choices.

startQuizEl.addEventListener("click", function() {
    document.querySelector(".intro-text").style.visibility = "hidden";
    startQuizEl.style.visibility = "hidden";
    document.querySelector(".tryAgainBtn").style.visibility = "hidden";
    startTimer();
})

tryAgainButtonEl.addEventListener("click", function () {
    document.querySelector(".intro-text").style.visibility = "visible";
    document.querySelector(".quiz-button").style.visibility = "visible";
    document.querySelector(".highScoresList").style.visibility = "hidden";
    document.querySelector(".form").style.visibility = "hidden";
    document.querySelector(".scoreDisplay").style.visibility="hidden";
    startTime = 75;
    timerEl.textContent = startTime;
    reload();
})

// Button that brings you to a list of High Scores

highScoresButtonEl.addEventListener("click", function() {               // Need to be able to save and keep adding to the list so your're able to see all of your recent high scores.
    document.querySelector(".intro-text").style.visibility = "hidden";
    document.querySelector(".quiz-button").style.visibility = "hidden";
    document.querySelector(".highScoresList").style.visibility = "visible";
    document.querySelector(".form").style.visibility = "hidden";
    document.querySelector(".scoreDisplay").style.visibility = "hidden";
    document.querySelector(".tryAgainBtn").style.visibility = "visible";
      
});





choicesButtonEl.addEventListener("click", displayAnswer);


// Incriments each question in the array of objects.

var q = 0;
function displayQuestions () {
    if (q < quizQuestions.length){
    questionsEl.textContent = quizQuestions[q].question;
    displayChoices();
}else {
    return endQuiz()
 }
}   

// Turns the choices from the array into an unordered list
function displayChoices () {
    for (i = 0; i < quizQuestions[q].choices.length; i++){
        var li = document.createElement("li"); // change this to create a button at a later time for a better look
        li.textContent = quizQuestions[q].choices[i];
        li.id = i
        choicesListEl.appendChild(li);
    }
    q++;
}

// Displays the questions from the quizQuestions array
function displayQuizQuestions() {
    questionsEl.textContent = quizQuestions[q].question;
    for (i = 0; i < quizQuestions[q].choices.length; i++){
        var li = document.createElement("li"); // change this to create a button at a later time for a better look
        li.textContent = quizQuestions[q].choices[i];
        li.id = i
        choicesListEl.appendChild(li);
        li.addEventListener("click", displayAnswer)
    }
    q++;
}

currentQuestion = 0;

// Takes answer from the array of objects and places it as a paragraph below the unordered list of choices.

 function displayAnswer (event) {
    console.log(event.target.textContent)
    console.log(quizQuestions[currentQuestion].answer)
    var p = document.createElement("p");
    if (quizQuestions[currentQuestion].answer === event.target.textContent) {
       p.textContent = "Correct";
    } else {
        p.textContent = "Incorrect";
        startTime -= 8;
    }
    p.id = i
    answerEl.appendChild(p)

    setTimeout (function () {
        removeChoices();
        displayQuestions();
    }, 1000);

    score = startTime;

    currentQuestion++;
    
 }



 // Removes last set of choices/display of "Correct/Incorrect"

 function removeChoices () {
    choicesListEl.innerHTML = ``;
    removeAnswer();

 }


 // Removes display of "Correct/Incorrect" from last question

 function removeAnswer () {
    answerEl.innerHTML = "";

 }


 var startTime = 75;
var quizTime;

// Once Quiz button is clicked timer starts and 8 seconds is deducted if user chooses incorrectly
// Once "GAME OVER!" appears a form is displayed for user to enter their name

function startTimer() {
    
    timerEl.textContent = startTime;
    quizTime = setInterval(function () {
        if (startTime > 0){
        startTime--;
        timerEl.textContent = startTime;
        } else {
        clearInterval(quizTime);
        //timerEl.textContent = "GAME OVER!"
        endQuiz();
        enterName();
        
        }
    }, 1000);

    displayQuestions();
}

// Ends quiz 

function endQuiz(){
    startTime = 0;
    questionsEl.innerHTML = "";
    console.log(endQuiz);
}

// Brings up a form for user to enter name

function enterName () {
    document.querySelector(".scoreDisplay").style.visibility = "visible";
    document.querySelector(".form").style.visibility = "visible";
    scoreDisplayEl.textContent = `Your score is ${score}. Please enter your name.`;

    var userInput = document.querySelector(".userInput");
    var submitBtn = document.querySelector(".submitBtn");
    var displayUserName = document.querySelector(".userName");


    // Adds user name and score to high Scores List

    userName = [];
    var userInputValue = userInput.value
    userName.push({Name: userInputValue, Score: score})
    function submitUserName () {
        displayUserName.textContent = [`Name: ${userInput.value}   Score: ${score}`]; // score goes to local storage but not name (only saves it as name="")
        //displayUserName.textContent = userInput.value;
        document.querySelector(".highScoresList").style.visibility = "visible"
        document.querySelector(".tryAgainBtn").style.visibility = "visible";
        
    }

    submitBtn.addEventListener("click", submitUserName);

    // Saves users Name and Score to Local Storage
    
    storeScores();
    function storeScores () {
        localStorage.setItem("userName", JSON.stringify(userName));
        // userInput.value = localStorage.getItem(JSON.parse("userName"));
    }
 };

 // Reloads current page - purpose is to bring up the opening start quiz content

 function reload () {
    window.location.reload("Refresh");
 }
















//  for (i = 0; i < userName.length; i++) {
//     var displayUserName = document.createElement("li")
//     userNameEl.append(displayUserName);
// }






// When high score button is clicked h3 and ol are created

    // var highScoresTitleEl = document.createElement("h3")
    // var highScoresListEl = document.createElement("ol");
    // highScoresTitleEl.setAttribute("class", ".highScoresList");
    // highScoresEl.append(highScoresTitleEl, highScoresListEl);
    // highScoresTitleEl.textContent = "High Scores";

// When the any of the choices are clicked, the correct answer is displayed below them.
// choicesButtonEl.addEventListener("click", function () {
//     displayAnswer();

// })



    // var highScoresList = [];
    // userNameEl.innerHTML = "";

    // for (let i = 0; i > highScoresList.length; i++) {
    //     let li = document.createElement("li");
    //     li.textContent = `${highScoresList[i].userInput}: ${highScoresList[i].score}`;
    //     userNameEl.append(li);
        
    // }


    // var formInputEl = document.createElement("form");
    // var formLabelEl = document.createElement("label");
    // var inputEl = document.createElement("input");
    // inputEl.setAttribute("type", "text")
    // inputEl.setAttribute("class", "userInput")


    

//     formLabelEl.textContent = "Name:"
//     formEl.append(enterNameEl, formInputEl, formLabelEl, inputEl);

//     submitButtonEl.style.visibility = "visible";


// function addName () {
//     var userInputEl = document.createElement("li");
//     userInputEl.setAttribute("id", "userInput");
//     userInputEl.setAttribute("type", "text")
//     userInputEl.setAttribute("value", "mcn")
//     highScoresListEl.append(userInputEl)

//    highScoresListEl.innerHTML = userInputEl.value

// }

// submitButtonEl.addEventListener("click", addName);



// var highScoresTitleEl = document.createElement("h3")
// var highScoresListEl = document.createElement("ol");
// highScoresTitleEl.setAttribute("class", ".highScoresList");
// highScoresEl.append(highScoresTitleEl, highScoresListEl);
// highScoresTitleEl.textContent = "High Scores";



 // 1 to 1
 
// a function to trigger the next step

// A (Wrong) -> Incorrect - Next question
//
// B (Right) -> Correct - Next Question

// Styling for the li
// Click one of the buttons
// , the answer comes up and goes to next question





/*  quizQuestions[0].choices.forEach(function(element) {
        var li = document.createElement("li");
        li.textContent = element;
        choicesListEl.appendChild(li);
      }); */

// use setTimeout to display a message a couple of seconds after the user selects the correct answer.