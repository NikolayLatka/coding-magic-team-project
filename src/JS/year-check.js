document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.year-check__input');
  const button = document.querySelector('.year-check__btn');
  const text = document.querySelector('.year-check__text');

  button.addEventListener('click', function (event) {
    event.preventDefault(); // щоб не було перезавантаження

    const year = parseInt(input.value);

    if (isNaN(year)) {
      text.textContent = 'Будь ласка, введіть коректний рік.';
      text.style.color = 'red';
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      text.textContent = 'Ви народилися у високосний рік!';
      text.style.color = 'green';
    } else {
      text.textContent = 'Ваш рік не є високосним.';
      text.style.color = 'red';
    }
  });
});
