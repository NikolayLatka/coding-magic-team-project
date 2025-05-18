
const openModalBtn = document.querySelector(".header-login");
const closeModalBtn = document.querySelector(".header-modal-close");
const backdrop = document.querySelector(".header-backdrop");
const modal = document.querySelector(".header-modal");

backdrop.classList.add("open-modal");
document.body.classList.add("no-scroll");


// Open modal
openModalBtn.addEventListener("click", () => {
    backdrop.classList.add("open-modal");
    document.body.classList.add("no-scroll");
});

// Close modal with close button
closeModalBtn.addEventListener("click", () => {
    backdrop.classList.remove("open-modal");
    document.body.classList.remove("no-scroll");
});

// Close modal by clicking only on the backdrop
backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
        backdrop.classList.remove("open-modal");
        document.body.classList.remove("no-scroll");
    }
});


// Close the modal by pressing enter key

const warning = document.querySelector(".header-modal-warning");

modal.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
            if (input.value.trim() !== "") {
                warning.style.display = "none";
                backdrop.classList.remove("open-modal");
            } else {
                warning.style.display = "block";
        }
    }
});






const input = document.querySelector(".header-modal-input");
const paragraph = document.querySelector(".header-login");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        updateText();
    }
});


document.addEventListener("click", (event) => {
    if (!input.contains(event.target)) {
        updateText();
    }
});

function updateText() {
    if (input.value.trim() !== "") {
        paragraph.textContent = `Вітаємо, ${input.value}!`;
    } else {
        paragraph.textContent = "Вітаємо, User!";
    }
}

