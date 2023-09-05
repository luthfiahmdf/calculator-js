let expression = "";
let resultElement = document.querySelector(".result");
let isResultCalculated = false;

function inputNum(value) {
  if (isResultCalculated) {
    clearAll();
    isResultCalculated = false;
  }
  expression += value;
  resultElement.textContent = expression;
}

function operatorType(value) {
  if (isResultCalculated) {
    isResultCalculated = false;
    expression = resultElement.textContent;
  }
  expression += value;
  resultElement.textContent = expression;
}

function decimal() {
  if (isResultCalculated) {
    clearAll();
    isResultCalculated = false;
  }
  if (!expression.includes(".")) {
    expression += ".";
    resultElement.textContent = expression;
  }
}

function clearAll() {
  expression = "";
  resultElement.textContent = "0";
  isResultCalculated = false;
}

function clearEntry() {
  expression = expression.slice(0, -1);
  resultElement.textContent = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    resultElement.textContent = result;
    isResultCalculated = true;
  } catch (error) {
    resultElement.textContent = "Error";
  }
}

function percent() {
  try {
    const result = eval(expression);
    const percentage = result / 100;
    expression = percentage.toString();
    resultElement.textContent = expression;
    isResultCalculated = true;
  } catch (error) {
    resultElement.textContent = "Error";
  }
}
