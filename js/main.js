// Our Courses Section Carousel Card
const gap = 16;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

// Our Courses Section Carousel Card
//-------------------------------------------------------
// Testimonials Section Carousel Card
const agap = 16;

const carousela = document.getElementById("carouselt"),
    contenta = document.getElementById("contentt"),
    nexta = document.getElementById("nextt"),
    preva = document.getElementById("prevt");

    nexta.addEventListener("click", e => {
    carousela.scrollBy(widtha + agap, 0);
    if (carousela.scrollWidth !== 0) {
        preva.style.display = "flex";
    }
    if (contenta.scrollWidth - widtha - agap <= carousela.scrollLeft + widtha) {
        nexta.style.display = "none";
    }
});
preva.addEventListener("click", e => {
    carousela.scrollBy(-(widtha + agap), 0);
    if (carousela.scrollLeft - widtha - agap <= 0) {
        preva.style.display = "none";
    }
    if (!contenta.scrollWidth - widtha - agap <= carousela.scrollLeft + widtha) {
        nexta.style.display = "flex";
    }
});

let widtha = carousel.offsetWidth;
window.addEventListener("resize", e => (widtha = carousel.offsetWidth));

//Testimonials Section Carousel Card
//-------------------------------------------------------