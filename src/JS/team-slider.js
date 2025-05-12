document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.left-arrow');
    const nextBtn = document.querySelector('.right-arrow');
    let currentSlide = 0;

    
    showSlide(currentSlide);

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
   
        currentSlide = (index + slides.length) % slides.length;
        
       
        slides[currentSlide].classList.add('active');
    }

   
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
});