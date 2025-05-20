


// Отримуємо DOM-елементи
const input = document.querySelector('.time-calc__input');
const output = document.querySelector('.time-calc__output-text');
const button = document.querySelector('.time-calc__btn');

// Обробка натискання на кнопку
button.addEventListener('click', () => {
  const totalSeconds = parseInt(input.value);

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    output.textContent = 'Будь ласка, введіть коректне додатне число.';
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const remainingAfterDays = totalSeconds % (3600 * 24);

  const hours = Math.floor(remainingAfterDays / 3600);
  const minutes = Math.floor((remainingAfterDays % 3600) / 60);
  const seconds = remainingAfterDays % 60;

  // Форматований результат
  output.textContent = `${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`;
});

