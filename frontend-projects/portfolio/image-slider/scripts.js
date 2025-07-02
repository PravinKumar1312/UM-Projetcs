let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideInterval;
const intervalDuration = 5000; // 5 seconds

function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function startSlider() {
    slideInterval = setInterval(moveNext, intervalDuration);
}

function pauseSlider() {
    clearInterval(slideInterval);
}

// Start auto-slide
startSlider();

// Manual controls
next.addEventListener('click', function() {
    pauseSlider();
    moveNext();
    startSlider();
});

prev.addEventListener('click', function() {
    pauseSlider();
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    startSlider();
});

// Pause on hover
const slider = document.querySelector('.slide');
slider.addEventListener('mouseenter', pauseSlider);
slider.addEventListener('mouseleave', startSlider);