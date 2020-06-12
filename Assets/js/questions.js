//questions. We need an array. Brackets

var button1 = document.getElementById("#choice-1")
var button2 = document.getElementById("#choice-2")
var button3 = document.getElementById("#choice-3")
var button4 = document.getElementById("#choice-4")

var questiontitle = document.getElementById("#Question-title")
var secondsLeft = 60;
//Variable reps question we are on
var questionNum =-1;
//function to change the question.
// questiontitle.onclick = function() {
//     if(this.contentEditable.) {

//     }
//     else {
        
//     }

// };

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      document.getElementById("myTimer").textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Time is up!");
      }
  
    }, 1000);
  }






var questions = [
    {
        question: "Commonly used data types DO NOT include:",//string
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["1. numbers and strings", "2. arrays", "3. booleans", "4. all of the above"],
        //anwers are not in string. Corralate to "changeQ" 0-3
        answer: 3
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        options: ["1. quotas", "2. curly brackets", "parentheses", "square brackets"],
        answer: 1
    },
    {
        question: "A very useful tool used during  development and debugging for printing content to the debugger is:",
        options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: 2
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotas", "4. parenthese"],
        answer: 2
    },
]

//ChoiceNum passes through function and is recorded 0-3
function ChangeQ(ChoiceNum){
    questionNum++;
    //check if question num is greater than 4
    var title = document.getElementById("Question-title");
    title.textContent = questions[questionNum].question;
    var choices = document.getElementById("AllChoices");

    for(var i=0; i<choices.children.length; i++){
        choices.children[i].innerHTML=questions[questionNum].options[i]
    }
    if(ChoiceNum !== questions[questionNum].answer && ChoiceNum !== "Start"){
        secondsLeft=secondsLeft-10;
    }
}

function Start(){
    var home = document.getElementById("home");
    home.className = "hide";
    console.log(home);
    
    var QuizQ = document.getElementById("QuizQ");
    QuizQ.className = null
    ChangeQ("Start");
    //setTime inside to begin
    setTime();
    }


//questiontitle.textContent = questions[0].question

//i represents the position  in the loop. Dont need this for loop. Timer activity color explosion. Activity 8  and 9 (speed reader)
for(var i = 0; i < questions.length; i++) {
    //block of code that is executed
    //console.log(questions[i])
    //console.log(questions[i].question)
    var currentQuestion = questions[i]
    console.log(currentQuestion.options)

    for(var j = 0; j < currentQuestion.options.length; j++) {
        console.log(currentQuestion.options[j])
    }
}

//onclick begins quiz
document.getElementById("StartQuiz").addEventListener("click", Start);

//loop through the options array

//display/hide code

//function StartQuiz ( {})

//--- Begin Quiz button--
//var btnEl = document.querySelector("#StartQuiz");

//tnEl.addEventListener("click", function() {
//  console.log("Button was clicked");
//})