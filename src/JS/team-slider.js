document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide_dark');
    const prevBtn = document.querySelector('.left-arrow_dark');
    const nextBtn = document.querySelector('.right-arrow_dark');
    let currentSlide = 0;

    
    showSlide(currentSlide);

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove('active_dark');
        });
        
   
        currentSlide = (index + slides.length) % slides.length;
        
       
        slides[currentSlide].classList.add('active_dark');
    }

   
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
});