function add(a, b) {
            const result = a + b;
            addToHistory(a, b, '+', result);
            return result;
        }

        function subtract(a, b) {
            const result = a - b;
            addToHistory(a, b, '-', result);
            return result;
        }

        function multiply(a, b) {
            const result = a * b;
            addToHistory(a, b, '*', result);
            return result;
        }

        function divide(a, b) {
            if (b === 0) {
                console.error("Cannot divide by zero");
                return null;
            }
            const result = a / b;
            addToHistory(a, b, '/', result);
            return result;
        }

const history = [];

function addToHistory(a, b, operator, result) {
  history.push({
    operand1: a,
    operand2: b,
    operator: operator,
    result: result
  });
}

function displayHistory() {
  if (history.length === 0) {
    console.log("No stored calculations.");
    return;
  }

  history.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
    );
  });
}

console.log('Adding 11 and 5:', add(11, 5));
console.log('Subtracting 8 from 10:', subtract(10, 8));
console.log('Multiplying 4 and 7:', multiply(4, 7));
console.log('Dividing 15 by 5:', divide(15, 5));
console.log('Dividing 10 by 0:', divide(10, 0));
console.log('Calculation History:', history);


module.exports = {
  add,
  subtract,
  multiply,
  divide
};