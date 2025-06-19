var quizContainer = document.getElementById("quiz-container");//div
var QUESTION = document.getElementById("question");//question
var choices = document.getElementById("choices");//choices
var submit_Btn = document.getElementById("submit");//submit
var score_span = document.getElementById("score");//score
var restartBtn = document.getElementById("restart");//restart
var correct_p = document.getElementById("correct-count");//correct count
var choiceButtons = choices.getElementsByClassName("choice");//choice 

var quizData = [
  {
    question: "What is the tag name used to add a paragraph in HTML ?",
    choices: ["span", "div", "p", "br"],
    correct: 2, 
  },
  {
    question: "What is the tag name used to make a bold letter in HTML ?",
    choices:["i", "b", "p", "div"],
    correct: 1,
  },
  {
    question: "What is the tag name used to delete a letter in HTML ?",
    choices: ["del", "span", "em", "hr"],
    correct: 0,
  },
  {
    question: "What is the tag name used to add image in HTML page ?",
    choices: ["span", "a", "sub", "img"],
    correct: 3,
  },
  {
    question: "....... is used for defining a section of your document.",
    choices: ["i", "a", "div", "table"],
    correct: 2, 
  },
];

var current_Ques = 0;
var score = 0;
var correct_count = 0;



function loadQuiz() {
  deselect();
  var currentQuizData = quizData[current_Ques];
  QUESTION.innerHTML = currentQuizData.question;
  
  for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].innerHTML = currentQuizData.choices[i];
  }
}

function deselect() {
  
  for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].classList.remove("selected");
  }
}

choices.addEventListener("click", function (e) {
  if (e.target.classList.contains("choice")) {
    deselect();
    e.target.classList.add("selected");
  }
});

submit_Btn.addEventListener("click", function () 
{
  var selectedChoice = choices.querySelector(".selected");
  if (selectedChoice) 
    {
  
    var answer;
    for (var i = 0; i < choiceButtons.length; i++) 
    {
      if (choiceButtons[i] === selectedChoice) 
      {
        answer = i;
        break;
      }
    }

    if (answer === quizData[current_Ques].correct)
    {
      score++;
      correct_count++;
      correct_p.innerText = "Correct Answers: " + correct_count;
    }
    current_Ques++;
    if (current_Ques < quizData.length) 
    {
      loadQuiz();
    } 
    else 
    {
      score_span.innerText = score + " out of " + quizData.length;
    }
  } 
  else 
  {
    alert("Please select an answer!");
  }
});

restartBtn.addEventListener("click", function () {
  current_Ques = 0;
  score = 0;
  correct_count = 0;
  correct_p.innerHTML = "Correct Answers: " + correct_count;
  score_span.innerText = score + " out of " + quizData.length;
  loadQuiz();
});

loadQuiz();
