// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  showAnswer.classList.toggle("card__answer--active");
  const partvar = answerButton.textContent;
  if (partvar === "hide answer") {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "hide answer";
  }
});
