let resultElement = document.getElementById('result');
let memoryElement = document.getElementById('memory');
let memory = [];
let isNewCalculation = true;
let currentOperator = null;
let operand1 = null;

function appendSymbol(symbol) {
  if (isNewCalculation) {
    resultElement.value = symbol;
    isNewCalculation = false;
  } else {
    resultElement.value += symbol;
  }
}

function clearResult() {
  resultElement.value = '';
  isNewCalculation = true;
  currentOperator = null;
  operand1 = null;
}

function calculateResult() {
  let expression = resultElement.value;
  let result;

  try {
    result = eval(expression);
    resultElement.value = result;
    memory.push(expression + ' = ' + result);
    updateMemory();
    isNewCalculation = true;
    currentOperator = null;
    operand1 = null;
  } catch (error) {
    resultElement.value = 'Error';
  }
}

function calculateSquare() {
  let number = resultElement.value;
  let square = Math.pow(parseFloat(number), 2);
  resultElement.value = square;
  memory.push('Square(' + number + ') = ' + square);
  updateMemory();
  isNewCalculation = true;
  currentOperator = null;
  operand1 = null;
}

function calculateSin() {
  let number = resultElement.value;
  let sin = Math.sin(parseFloat(number));
  resultElement.value = sin;
  memory.push('Sin(' + number + ') = ' + sin);
  updateMemory();
  isNewCalculation = true;
  currentOperator = null;
  operand1 = null;
}

function calculateCos() {
  let number = resultElement.value;
  let cos = Math.cos(parseFloat(number));
  resultElement.value = cos;
  memory.push('Cos(' + number + ') = ' + cos);
  updateMemory();
  isNewCalculation = true;
  currentOperator = null;
  operand1 = null;
}

function updateMemory() {
  memoryElement.innerHTML = '';
  for (let i = 0; i < memory.length; i++) {
    let operation = document.createElement('div');
    operation.textContent = memory[i];
    memoryElement.appendChild(operation);
  }
}

function setOperator(operator) {
  if (isNewCalculation) {
    operand1 = parseFloat(resultElement.value);
    currentOperator = operator;
    isNewCalculation = false;
  } else {
    calculateResult();
    operand1 = parseFloat(resultElement.value);
    currentOperator = operator;
  }
}

function performOperation() {
  let operand2 = parseFloat(resultElement.value);
  let result;

  switch (currentOperator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      return;
  }

  resultElement.value = result;
  memory.push(operand1 + ' ' + currentOperator + ' ' + operand2 + ' = ' + result);
  updateMemory();
  isNewCalculation = true;
  currentOperator = null;
  operand1 = null;
}