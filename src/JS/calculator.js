const num1Input = document.querySelector('.calculator-num1');
const num2Input = document.querySelector('.calculator-num2');
const resultInput = document.querySelector('.calculator-result');
const operationButtons = document.querySelectorAll(
  '.calculator-operations-btn'
);
const equalsButton = document.getElementById('equals');

let selectedOperation = '+';

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedOperation = button.textContent;
    operationButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

equalsButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  let result = '';

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Помилка';
  } else {
    switch (selectedOperation) {
      case '+':
        result = num1 + num2;
        break;
      case '−':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Ділення на 0';
        break;
      default:
        result = 'Помилка';
    }
  }

  resultInput.value = result;
});
