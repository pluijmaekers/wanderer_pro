// NAV-MENU
document
    .querySelector('.menu-btn')
    .addEventListener('click', () =>
        document.querySelector('.menu').classList.toggle('show')
    );
document
    .querySelector('.menu')
    .addEventListener('click', () =>
        document.querySelector('.menu').classList.remove('show')
    );

// PROOF EXPAND
document.addEventListener('DOMContentLoaded', () => {
    const expandMore = document.querySelectorAll('[expand-more]');

    function expand() {
        const showContent = document.getElementById(this.dataset.target);
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML = this.dataset.showtext;
        } else {
            this.innerHTML = this.dataset.hidetext;
        }
        showContent.classList.toggle('expand-active');
    }

    expandMore.forEach((expandMore) => {
        expandMore.addEventListener('click', expand);
    });
});

//  CAROUSEL
const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// COUNTER
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 400ms ease';
    counter++;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 400ms ease';
    counter--;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }
});

// open cards and FAQs
const overlayBtn1 = document.querySelector('.cb1');
const overlay1 = document.querySelector('.over1');
const closeBtn1 = document.querySelector('.close1');

overlayBtn1.addEventListener('click', function () {
    overlay1.classList.add('open');
});

closeBtn1.addEventListener('click', function () {
    overlay1.classList.remove('open');
});

const overlayBtn2 = document.querySelector('.cb2');
const overlay2 = document.querySelector('.over2');
const closeBtn2 = document.querySelector('.close2');

overlayBtn2.addEventListener('click', function () {
    overlay2.classList.add('open');
});

closeBtn2.addEventListener('click', function () {
    overlay2.classList.remove('open');
});

const overlayBtn3 = document.querySelector('.cb3');
const overlay3 = document.querySelector('.over3');
const closeBtn3 = document.querySelector('.close3');

overlayBtn3.addEventListener('click', function () {
    overlay3.classList.add('open');
});

closeBtn3.addEventListener('click', function () {
    overlay3.classList.remove('open');
});

const overlayBtn4 = document.querySelector('#cb4');
const overlay4 = document.querySelector('.over4');
const closeBtn4 = document.querySelector('.close4');

overlayBtn4.addEventListener('click', function () {
    overlay4.classList.add('open');
});

closeBtn4.addEventListener('click', function () {
    overlay4.classList.remove('open');
});

const overlayBtn5 = document.querySelector('#cb5');
const overlay5 = document.querySelector('.over5');
const closeBtn5 = document.querySelector('.close5');

overlayBtn5.addEventListener('click', function () {
    overlay5.classList.add('open');
});

closeBtn5.addEventListener('click', function () {
    overlay5.classList.remove('open');
});

const overlayBtn6 = document.querySelector('#cb6');
const overlay6 = document.querySelector('.over6');
const closeBtn6 = document.querySelector('.close6');

overlayBtn6.addEventListener('click', function () {
    overlay6.classList.add('open');
});

closeBtn6.addEventListener('click', function () {
    overlay6.classList.remove('open');
});

const overlayBtn7 = document.querySelector('#cb7');
const overlay7 = document.querySelector('.over7');
const closeBtn7 = document.querySelector('.close7');

overlayBtn7.addEventListener('click', function () {
    overlay7.classList.add('open');
});

closeBtn7.addEventListener('click', function () {
    overlay7.classList.remove('open');
});

const overlayBtn8 = document.querySelector('#cb8');
const overlay8 = document.querySelector('.over8');
const closeBtn8 = document.querySelector('.close8');

overlayBtn8.addEventListener('click', function () {
    overlay8.classList.add('open');
});

closeBtn8.addEventListener('click', function () {
    overlay8.classList.remove('open');
});

const overlayBtn9 = document.querySelector('#cb9');
const overlay9 = document.querySelector('.over9');
const closeBtn9 = document.querySelector('.close9');

overlayBtn9.addEventListener('click', function () {
    overlay9.classList.add('open');
});

closeBtn9.addEventListener('click', function () {
    overlay9.classList.remove('open');
});
