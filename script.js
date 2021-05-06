const questions = [
  {
    question: "Special symbol permitted with in the identifier name.",
    answers: [
      { text: "$", right: false },
      { text: "@", right: false },
      { text: "_", right: true },
      { text: ".", right: false },
    ],
  },
  {
    question:
      "The C library function rewind() reposition the file pointer at the beginning of the file.",
    answers: [
      { text: "True", right: true },
      { text: "False", right: false },
    ],
  },
  {
    question:
      "Which library function can convert an unsigned long to a string?",
    answers: [
      { text: "Itoa()", right: false },
      { text: "ultoa()", right: true },
      { text: "system()", right: false },
      { text: "unsigned long can't be converted to string", right: false },
    ],
  },
  {
    question:
      "Choose the correct unary operators in C – a) !, b) ~, c) ^&, d) ++",
    answers: [
      { text: "a b d", right: true },
      { text: "a b c", right: false },
      { text: "b c d", right: false },
      { text: "c d a", right: false },
    ],
  },
  {
    question: "Who invented C Language.??",
    answers: [
      { text: "Charles Babbage", right: false },
      { text: "Grahambel", right: false },
      { text: "Dennis Ritchie", right: true },
      { text: "Steve Jobs", right: false },
    ],
  },
  {
    question: "C Language is a successor to which language.?",
    answers: [
      { text: "FORTRAN", right: false },
      { text: "D Language", right: false },
      { text: "Basic", right: false },
      { text: "B Language", right: true },
    ],
  },
  {
    question: "Low level language is .?",
    answers: [
      { text: "Human readable like language.", right: false },
      { text: "language with small program size.", right: false },
      { text: "language with big program size.", right: false },
      {
        text:
          "language which is difficult to understand and not human readable.",
        right: true,
      },
    ],
  },
  {
    question: "C is _______ type of programming language.?",
    answers: [
      { text: "Object Oriented", right: false },
      { text: "Procedural", right: true },
      { text: "Bit Level", right: false },
      { text: "Functional", right: false },
    ],
  },
  {
    question: "C language was invented to develop which Operating System.?",
    answers: [
      { text: "Android", right: false },
      { text: "Linux", right: false },
      { text: "Ubuntu", right: false },
      { text: "Unix", right: true },
    ],
  },
  {
    question: "What Is 2==='2'?",
    answers: [
      { text: "True", right: false },
      { text: "False", right: true },
    ],
  },
];

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const questionsDiv = document.getElementById("questionsDiv");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const navigationDiv = document.getElementById("navigation");
const submit = document.getElementById("submit");

let questionNumber = [];
let correct = 0;
let wrong = 0;
let average = 0;
let index = -1;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  questionsDiv.classList.remove("hide");
  nextBtn.classList.remove("hide");
  nextQuestion();
});

nextBtn.addEventListener("click", nextQuestion);

function getQuestionNumber() {
   index += 1;
   return index;
}

function nextQuestion() {
  let qNo = getQuestionNumber(0,questions.length);
  if (qNo == questions.length) {
    nextBtn.classList.add("hide");
    document.getElementById("submit").classList.remove("hide");
  } else {
    showQuestion(qNo);
  }
}

function showQuestion(qNumber) {
  let isClicked = 0;
  resetOptions();
  questionText.innerHTML = questions[qNumber]["question"];
  for (let i = 0; i<questions[qNumber]["answers"].length; i++) {
    let temp;
    const answerButton = document.createElement("button");

    answerButton.innerHTML = questions[qNumber]["answers"][i]["text"];

    if (questions[qNumber]["answers"][i]["right"] === true) {
      temp = questions[qNumber]["answers"][i]["text"];
    }

    answerButton.classList.add("custButton");

    answerButton.addEventListener("click", () => {
      isClicked += 1;
      if (answerButton.innerHTML == temp && isClicked == 1) {
        answerButton.classList.add("correctAnswer");
        correct += 1;
      } else {
        if (isClicked == 1) {
          wrong += 1;
          answerButton.classList.add("wrongAnswer");
        }
      }
    });

    answers.appendChild(answerButton);
  }
}

function resetOptions() {
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
}

submit.addEventListener("click", () => {
  let finalScore = (correct / questions.length) * 100;
  questionsDiv.classList.add("hide");
  navigationDiv.classList.add("hide");
  const displayResults = document.getElementById("displayResults");
  displayResults.classList.remove("hide");
  displayResults.classList.add("results");
  document.getElementById("right").innerHTML = "Right : " + correct;
  document.getElementById("wrong").innerHTML = "Wrong : " + wrong;
  document.getElementById("percentage").innerHTML =
    "Average : " + finalScore + "%";

  if (finalScore >= 40) {
    document.getElementById("congratulate").classList.remove("hide");
  } else {
    document.getElementById("betterLuck").classList.remove("hide");
  }
});
