// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelectorAll('.slide');
//     const prevBtn = document.querySelector('.left-arrow');
//     const nextBtn = document.querySelector('.right-arrow');
//     let currentSlide = 0;

    
//     showSlide(currentSlide);

//     function showSlide(index) {

//         slides.forEach(slide => {
//             slide.classList.remove('active');
//         });
        
   
//         currentSlide = (index + slides.length) % slides.length;
        
       
//         slides[currentSlide].classList.add('active');
//     }

   
//     prevBtn.addEventListener('click', () => {
//         showSlide(currentSlide - 1);
//     });

//     nextBtn.addEventListener('click', () => {
//         showSlide(currentSlide + 1);
//     });
    
// });
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const lines = document.querySelectorAll('.liner');
    const prevBtn = document.querySelector('.left-arrow');
    const nextBtn = document.querySelector('.right-arrow');
    let currentSlide = 0;

    // Ініціалізація - активуємо перший слайд та лінію
    function initSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === 0);
        });
        
        lines.forEach((liner, index) => {
            liner.classList.toggle('active', index === 0);
            // Примусово застосовуємо стилі для першої лінії
            if (index === 0) {
                liner.style.width = '18px';
                liner.style.backgroundColor = '#000';
            }
        });
    }

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        
        // Оновлюємо слайди
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        
        // Оновлюємо лінії
        updateLines();
    }

    function updateLines() {
        lines.forEach((line, idx) => {
            const isActive = idx === currentSlide;
            line.classList.toggle('active', isActive);
            line.style.width = isActive ? '18px' : '10px';
            line.style.backgroundColor = isActive ? '#000' : '#ccc';
        });
    }

    // Запускаємо ініціалізацію
    initSlider();

    // Обробники подій
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    lines.forEach((liner, index) => {
        liner.addEventListener('click', () => showSlide(index));
    });
});