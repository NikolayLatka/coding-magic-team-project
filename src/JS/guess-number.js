const randomNumber = Math.floor(Math.random() * 100) + 1;

document.querySelector(".search-icon").addEventListener("click", function () {
    const inputValue = document.getElementById("inputField").value;
    const resultMessage = document.querySelector(".resultMessage");

    if (inputValue) {
        if (parseInt(inputValue) === randomNumber) {
            resultMessage.textContent = `Вітаю, ви вгадали число!(${randomNumber})`;
            resultMessage.style.color = "rgb(3, 153, 0)";
        } else {
            resultMessage.textContent = `Ви програли, Комп'ютер згадав (${randomNumber})`;
            resultMessage.style.color = "red";
        }
    }
});
