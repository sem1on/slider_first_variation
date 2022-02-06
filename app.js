const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const total = document.querySelector('#total');
const current = document.querySelector('#current');

let slideIndex = 1;

showSlide(slideIndex);

if (slides.length < 10){
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

function showSlide(n) {

    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length
    };

    slides.forEach(item => item.style.display = 'none');
    slides[slideIndex - 1].style.display = '';

    if (slides.length < 10){
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

};

function plusSlide(n) {
    showSlide(slideIndex += n);
};

next.addEventListener('click', () => {
    plusSlide(1);
})

prev.addEventListener('click', () => {
    plusSlide(-1);
})