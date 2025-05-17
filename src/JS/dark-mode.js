import imageLogoLight from '../img/coding-magic-logo.svg';
import imageLogoDark from '../img/coding-magic-logo_dark.svg';
import imageMoon from '../img/moon.svg';
import imageSun from '../img/sun.svg';





const toggle = document.getElementById("themeToggle");
const toggleSlider = document.querySelector(".slider")
const themeIcon = document.getElementById("themeIcon");
const toggleDot = document.querySelector(".toggle-dot");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
    themeIcon.src = imageMoon;
    toggleSlider.style.backgroundColor = "rgb(43, 43, 43)"
    toggleSlider.style.boxShadow = "0px 0px 10px white";
    toggleDot.style.backgroundColor = "black";
    document.body.style.backgroundColor = "rgb(43, 43, 43)";
    } else {
    toggleSlider.style.backgroundColor = "rgb(122, 122, 122)"
    themeIcon.src = imageSun;
    toggleDot.style.backgroundColor = "";
    document.body.style.backgroundColor = "white";
    }
});


const title = document.querySelector(".main-title");


toggle.addEventListener("click" , changeMode);

function changeMode() {
    document.querySelector(".number-container").classList.toggle("number-container_dark");
    document.querySelector(".input-title").classList.toggle("input-title_dark");
    document.querySelector(".result").classList.toggle("result_dark");
    document.querySelector(".main").classList.toggle("main_dark");
    document.querySelector(".input-group").classList.toggle("input-group_dark");
    document.querySelector(".header-flex").classList.toggle("header-flex_dark");
    document.querySelector(".header").classList.toggle("header_dark");
    document.querySelector(".header-team-link").classList.toggle("header-team-link_dark")
    document.querySelector(".header-contact-link").classList.toggle("header-contact-link_dark");
    document.querySelector(".scoreboard").classList.toggle("scorebaord_dark");
    document.querySelector(".scoreboard-result").classList.toggle("scoreboard-result_dark");
    document.querySelector(".scoreboard-pc").classList.toggle("scoreboard-pc_dark");
    document.querySelector(".scoreboard-player").classList.toggle("scoreboard-player_dark");
    document.querySelector(".footer").classList.toggle("footer_dark");
    document.querySelector(".info-wrapper-tel").classList.toggle("info-wrapper-tel_dark");
    document.querySelector(".info-wrapper-email").classList.toggle("info-wrapper-email_dark");
    document.querySelector(".info-wrapper-fb").classList.toggle("info-wrapper-fb_dark");
    document.querySelector(".info-wrapper-x").classList.toggle("info-wrapper-x_dark");
    document.querySelector(".info-wrapper-ig").classList.toggle("info-wrapper-ig_dark");
    document.querySelector(".header-modal").classList.toggle("header-modal_dark");
    document.querySelector(".modal-info").classList.toggle("modal-info_dark");
    document.querySelector(".header-modal-greetings").classList.toggle("header-modal-greetings_dark");
    document.querySelector(".input-describtion").style.color = "white"
    document.querySelector(".header-modal-close").classList.toggle("header-modal-close_dark");
    document.querySelector(".header-modal-close").style.boxShadow = "0px 0px 11px 2px rgb(0, 0, 0)"
    document.querySelector(".header-modal-close").style.backgroundColor = "rgb(134 , 134 , 134)"
    document.querySelector(".header-modal-close").style.borderRadius = "60px"
    document.querySelector(".header-modal-close").style.padding = "10px"

    

    const mainTitle = document.querySelector(".main-title");
    mainTitle.classList.toggle("main-title_dark");

    const isDark = mainTitle.classList.contains("main-title_dark");

    title.style.setProperty("--underline-color", isDark ? "white" : "black");




const rpsTitle = document.querySelector(".rps-title");
rpsTitle.classList.toggle("rps-title_dark");

const isDarkRps = rpsTitle.classList.contains("rps-title_dark");

document.documentElement.style.setProperty("--underline-color", isDarkRps ? "white" : "black");



const calculatorTitle = document.querySelector(".calculator-title");
calculatorTitle.classList.toggle("calculator-title_dark");

const isDarkCalculator = calculatorTitle.classList.contains("calculator-title_dark");

document.documentElement.style.setProperty("--calculator-underline" , isDarkCalculator ? "white" : "black")




    const headerLogo = document.querySelector(".header-logo-img");
    if (headerLogo) {
        headerLogo.src = isDark ? imageLogoDark : imageLogoLight;
    }

    const footerLogo = document.querySelector(".footer-logo");
    if (footerLogo) {
        footerLogo.src = isDark ? imageLogoDark : imageLogoLight
    }


}