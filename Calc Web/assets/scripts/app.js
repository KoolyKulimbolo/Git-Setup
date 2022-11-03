const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function userInput() {
  return parseInt(usrInput.value)
}

function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operator, initialResult, enteredNumber, currentResult) {
  const logEntry = {
    operation: operator,
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }    
  logEntries.push(logEntry);

}

function calculateResult(calcType) {
  const enteredNumber = userInput();
  if (
    calcType !== 'add' &&
    calcType !== 'subtract' &&
    calcType !== 'multiply' && 
    calcType !=='divide' ||
    !enteredNumber
  ) {
    return;
  }
 
  const initialResult = currentResult; 
  if (calcType === 'add') {
    currentResult += enteredNumber;
    mathOperator = '+'
  }

  writeToLog(mathOperator,initialResult,enteredNumber,currentResult)
  console.log(logEntries);
  createAndWriteOutput(initialResult, mathOperator, enteredNumber);

}

function add() {
  calculateResult('add')
}
function subtract() {
  calculateResult('subtract')
}
function multiply() {
  calculateResult('multiply')
}
function divide() {
  calculateResult('divide')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


