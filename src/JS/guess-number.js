const resultMessage = document.querySelector(".resultMessage");
resultMessage.textContent = "Введіть число від 1 до 10";

document.getElementById("inputField").addEventListener("input", function () {
    if (this.value) {
        resultMessage.textContent = "";
    } else {
        resultMessage.textContent = "Введіть число від 1 до 10";
    }
});

document.querySelector(".search-icon").addEventListener("click", function () {
    const inputValue = document.getElementById("inputField").value;
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (inputValue) {
        if (parseInt(inputValue) === randomNumber) {
            resultMessage.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
            resultMessage.style.color = "rgb(3, 153, 0)";
        } else {
            resultMessage.textContent = `Ви програли, Комп'ютер згадав (${randomNumber})`;
            resultMessage.style.color = "red";
        }
    }
});
