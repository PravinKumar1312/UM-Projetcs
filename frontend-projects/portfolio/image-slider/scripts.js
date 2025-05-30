let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.slide-item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.slide-item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// let next = document.getElementById('#next');
// let prev = document.getElementById('#prev');
// let slideContent = document.querySelector('.slide-content');

// next.addEventListener('click', () => {
//     let main = document.querySelector('.main-slide-item');
//     let nextItem = main.nextElementSibling || slideContent.firstElementChild;

//     // Swap classes
//     main.classList.remove('main-slide-item');
//     main.classList.add('mini-slide-item');

//     nextItem.classList.remove('mini-slide-item');
//     nextItem.classList.add('main-slide-item');
// });

// prev.addEventListener('click', () => {
//     let main = document.querySelector('.main-slide-item');
//     let prevItem = main.previousElementSibling || slideContent.lastElementChild;

//     // Swap classes
//     main.classList.remove('main-slide-item');
//     main.classList.add('mini-slide-item');

//     prevItem.classList.remove('mini-slide-item');
//     prevItem.classList.add('main-slide-item');
// });
