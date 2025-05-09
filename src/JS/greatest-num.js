document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const maxValueSpan = document.getElementById('maxValue');
    
    // Функція для знаходження максимального числа
    function findMaxNumber() {
        // Отримуємо значення з інпутів і перетворюємо на числа
        const num1 = parseFloat(input1.value) || 0;
        const num2 = parseFloat(input2.value) || 0;
        const num3 = parseFloat(input3.value) || 0;
        
        // Знаходимо максимальне число
        const maxNumber = Math.max(num1, num2, num3);
        
        // Виводимо результат
        maxValueSpan.textContent = maxNumber;
    }
    
    // Додаємо обробники подій для всіх інпутів
    input1.addEventListener('input', findMaxNumber);
    input2.addEventListener('input', findMaxNumber);
    input3.addEventListener('input', findMaxNumber);
    
    // Ініціалізуємо при завантаженні
    findMaxNumber();
});