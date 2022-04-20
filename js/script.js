const slides = document.querySelectorAll('[data-js="slideItem"]')
const nextButton = document.querySelector('[data-js="nextButton"]')
const prevButton = document.querySelector('[data-js="prevButton"]')

const lastIndex = slides.length - 1
let currentSlide = 0

const changeClass = correctSlide => {
    slides.forEach(slide => slide.classList.remove('slideActive'))
    slides[correctSlide].classList.add('slideActive')
}

nextButton.addEventListener('click', () => {
    const correctSlide = currentSlide === lastIndex 
    ? currentSlide = 0 
    : ++currentSlide

    changeClass(correctSlide)
})

prevButton.addEventListener('click', () => {
    const correctSlide = currentSlide === 0
    ? currentSlide = lastIndex 
    : --currentSlide

    changeClass(correctSlide)
})