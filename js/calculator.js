const resultElement = document.querySelector("#result");
const numbers = document.querySelectorAll(".button--number");
const clearButton = document.querySelector("#AC");
const additionButton = document.querySelector("#addition");
const subtractionButton = document.querySelector("#subtraction");
const equalsButton = document.querySelector("#equals");

clearButton.addEventListener("click", () => {
  resultElement.textContent = "";
});
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    resultElement.textContent = resultElement.textContent.concat(
      item.innerText
    );
  });
});
additionButton.addEventListener("click", () => {
  resultElement.textContent.charAt(resultElement.textContent.length - 1) == "+"
    ? ""
    : (resultElement.textContent = resultElement.textContent.concat("+"));
});
equalsButton.addEventListener("click", () => {
  resultElement.textContent = eval(resultElement.textContent);
});
