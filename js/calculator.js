const historyElement = document.querySelector("#history");
const resultElement = document.querySelector("#result");
const numbers = document.querySelectorAll(".button--number");
const operatorButtons = document.querySelectorAll(".button--operator");
const clearButton = document.querySelector("#AC");
const inverseButton = document.querySelector("#inverse");
const deleteButton = document.querySelector("#DEL");
const equalsButton = document.querySelector("#equals");
const operators = ["+", "-", "/", "*"];

function addDigit(digit){
  if (digit === "." && resultElement.innerText.includes(".")) {
    return;
  }

  resultElement.textContent = resultElement.textContent.concat(
    digit
  );
}

clearButton.addEventListener("click", () => {
  resultElement.textContent = "";
  historyElement.textContent = "";
});

inverseButton.addEventListener("click", () => {
  if(resultElement.textContent){
    historyElement.textContent = `(${resultElement.textContent})*(-1)=`;
    resultElement.textContent = eval(`(${resultElement.textContent})*-1`)
  }
});

deleteButton.addEventListener("click", () => {
  resultElement.textContent = resultElement.textContent.slice(0, -1);
});

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    addDigit(item.innerHTML)
  });
});

operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    let panelLastDigit = resultElement.textContent.charAt(
      resultElement.textContent.length - 1
    );
    if (panelLastDigit != ""){
      operators.includes(panelLastDigit)
      ? (resultElement.textContent =
          resultElement.textContent.slice(0, -1) + item.textContent)
      : (resultElement.textContent = resultElement.textContent.concat(
          item.textContent
        ));
    }
  });
});

equalsButton.addEventListener("click", () => {
  historyElement.textContent = resultElement.textContent.concat('=')
  resultElement.textContent = eval(resultElement.textContent);
});
