const openModalBtn = document.querySelector("#footer-open-modal");
const closeModalBtn = document.querySelector(".footer-modal-close");
const backdrop = document.querySelector(".footer-backdrop");
const modal = document.querySelector(".footer-modal");


openModalBtn.addEventListener("click", () => {
    backdrop.classList.add("open-modal");
    document.body.classList.add("no-scroll");
});


closeModalBtn.addEventListener("click", () => {
    backdrop.classList.remove("open-modal");
    document.body.classList.remove("no-scroll");
});


backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
        backdrop.classList.remove("open-modal");
        document.body.classList.remove("no-scroll");
    }
});
