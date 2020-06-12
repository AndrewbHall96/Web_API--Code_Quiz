//Onclick for button. Trigger time and quiz

//Select the id "myBtn" and assign it to a variable
//var btnEl = document.querySelector("#Start Quiz");

//Timer variable
var timer = 60;
var stopwatchTimer = null;

//Add an event listener so that when the button is clicked, it will stat the timer
btnEl.addEventListener("click", function() {
  console.log("Button was clicked");
  
  if(stopwatchTimer === null) {
  stopwatchTimer = setInterval(countdownTimer, 1000);
  }
});

function countdownTimer() {
  timer--; 

document.querySelector("#myTimer").textContent = timer;
}

//Timer code

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("#main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
setTime();

//_____//Select the Id "myBtn" and assign it to a variabel
var btnEl = document.querySelector("#StartQuiz");

//Add an event listener so that when  the  button is clicek it starts a timer
var timer = 60;
var stopwatchTimer = null;
//declared variables outside timer for code function reasons

btnEl.addEventListener("click", function() {
  console.log("Button was clicked");
  
  if(timer === 60);
  stopwatchTimer = setInterval(countdownTimer, 1000);

});

function countdownTimer() {
  timer--; 

document.querySelector("#myTimer").textContent = timer;
}
