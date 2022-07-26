// Menu
let menu = document.getElementById('menu');
function closemenu() {
    menu.style.top = '-100vh';
    document.body.classList.remove('stop-scroll');
}
function openmenu() {
    menu.style.top = '0';
    document.body.classList.add('stop-scroll');
}

// GSAP Animations
gsap.to('#ronioc', 3, {y: -30, repeat: -1, yoyo: true});
gsap.from('.hero-anim', { duration: 3, opacity: 0, stagger: .4})

// Intersection Observer animations
const animText = document.querySelectorAll('.anim-text')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {threshold: 1})
animText.forEach(text => {observer.observe(text)})


// Testimonials Carousel
let rev = 0;
carousel(rev);
function previousReview() {
    rev = rev - 1;
    carousel(rev);
}
function nextReview() {
    rev = rev + 1;
    carousel(rev);
}
function carousel(review) {
    let reviews = document.getElementsByClassName("slide");

    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
        reviews[i].style.animation = "testim-content-out .5s";
    }
    reviews[review].style.display = "block";
    reviews[review].style.animation = "testim-content-in .5s";
}

lightbox.option ({
    'albumLabel': "",
    'wrapAround': true
})