"use strict";
// const preLoaderEl = document.querySelector('.preloader');
const landingPageEl = document.querySelector('.landingPage');


window.addEventListener('load', ()=>{
    landingPageEl.classList.add('loaded');

});

// Let us try adding the animations seperately. once it gets to a certain time after the first image has been scaled. put the second one on. then the 3rd and keep repeating

const imgUrls = [
    './assets/images/hero-slider-1.jpg',
    './assets/images/hero-slider-2.jpg',
    './assets/images/hero-slider-3.jpg'
]


let currentIndex = 0;

function changeImg() {
    const imgEl = document.querySelector('.heroPage-Img-img');

    imgEl.src = imgUrls[currentIndex];

    currentIndex = (currentIndex + 1) % imgUrls.length;

    setTimeout(changeImg, 7000);
}

changeImg(); // Initial call to start cycling through images


/**
 

function changeImg() {
    const imgEl = document.querySelector('.heroPage-Img-img');
    const heroPageImgContainer = document.querySelector('.heroPage-Img');

    // Add the 'hope' class to initiate the animation
    imgEl.classList.add('hope');

    // After a short delay, remove the 'hope' class to reset the animation
    setTimeout(() => {
        imgEl.classList.remove('hope');
    }, 7000); // 7000 milliseconds is the duration of your animation

    // Change the image source
    imgEl.src = imgUrls[currentIndex];

    // Update currentIndex for next image
    currentIndex = (currentIndex + 1) % imgUrls.length;

    // Schedule the next image change after 7 seconds
    setTimeout(changeImg, 7000);

    console.log(66);
}



 */