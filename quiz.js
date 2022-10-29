const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");

submitAnswerBtn.addEventListener("click", calculateScore);

const correctAnswer = ["90°", "right angled", "Equilateral triangle"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputE1.innerText = "Your score is : " + score;
}
