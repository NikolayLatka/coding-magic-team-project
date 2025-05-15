
const openModalBtn = document.querySelector(".header-login");
const closeModalBtn = document.querySelector(".header-modal-close");
const backdrop = document.querySelector(".header-backdrop");
const modal = document.querySelector(".header-modal");

// Open modal
openModalBtn.addEventListener("click", () => {
    backdrop.classList.add("open-modal");
});

// Close modal with close button
closeModalBtn.addEventListener("click", () => {
    backdrop.classList.remove("open-modal");
});

// Close modal by clicking *only* on the backdrop (not the modal)
backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
        backdrop.classList.remove("open-modal");
    }
});
