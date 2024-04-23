
"use strict";
// const preLoaderEl = document.querySelector('.preloader');
const landingPageEl = document.querySelector('.landingPage');

const imgEl = document.querySelector('.heroPage-Img-img');

const heroHeadText = document.querySelector('.heroTexts--heading');

const heroCursiveText =  document.querySelector('.heroTexts--cursiveTexts');

const openBtn = document.querySelector('.landingPage-navBar--menuBar_openMenu');

const closeBtn = document.querySelector('.navBar-links_heading--close-btn');

const navQuickLinks = document.querySelector('.navBar-links');

const navQuickLinksUl = document.querySelector('.navbar-link-item--ul');

const heroHomePage = document.querySelector('.hero-home-page')

const arrHead1 = document.querySelector('.desktopArrHead-1');

const arrHead2 = document.querySelector('.desktopArrHead-2');

const fixedArr = document.querySelector('.fixed-arrow-btn');

const preloader = document.querySelector('.preloader');


//PRELOADER
// window.addEventListener('load', ()=>{
//     landingPageEl.classList.add('loaded');
//     // preloader.style.zIndex = -1;
// });


// HERO PAGE
const imgUrls = [
    './assets/images/hero-slider-1.jpg',
    './assets/images/hero-slider-2.jpg',
    './assets/images/hero-slider-3.jpg'
];

function textChanger() {
    if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
        heroHeadText.innerHTML = `Traditional Food & Hygiene`;
        heroCursiveText.innerHTML = `For the Love of <br>
                         Delicious Food`;
                         
    }else if(imgEl.getAttribute("src") === './assets/images/hero-slider-2.jpg'){
        heroHeadText.innerHTML = `Delightful Experience`;
        heroCursiveText.innerHTML = `Flavours Inspired by </br>
                                 the Seasons`;
                    

    }else if (imgEl.getAttribute("src") === './assets/images/hero-slider-3.jpg'){
        heroHeadText.innerHTML = `Amazing & Delicious`;
        heroCursiveText.innerHTML = `Where Every Flavour </br>
                           Tells a Story`;
                         
    };
}


let currentIndex = 0;

function changeImg() {

    imgEl.src = imgUrls[currentIndex];

    currentIndex = (currentIndex + 1) % imgUrls.length;
    textChanger();
    
    setTimeout(changeImg, 7000);
};

changeImg(); // Initial call to start cycling through images


//ARROW FOR CHANGING IMAGE
arrHead1.addEventListener('click', ()=>{
   
    if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
       imgEl.setAttribute("src", './assets/images/hero-slider-3.jpg');
       textChanger();
    
    }else if (imgEl.getAttribute("src") === './assets/images/hero-slider-3.jpg') {
        imgEl.setAttribute("src", './assets/images/hero-slider-2.jpg');
        textChanger();
    
    }else if (imgEl.getAttribute("src") === './assets/images/hero-slider-2.jpg') {
        imgEl.setAttribute("src", './assets/images/hero-slider-1.jpg');
        textChanger();
    }
    });

arrHead2.addEventListener('click', ()=>{
if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
   imgEl.setAttribute("src", './assets/images/hero-slider-2.jpg');
   textChanger();

}else if (imgEl.getAttribute("src") === './assets/images/hero-slider-2.jpg') {
    imgEl.setAttribute("src", './assets/images/hero-slider-3.jpg');
    textChanger();

}else if (imgEl.getAttribute("src") === './assets/images/hero-slider-3.jpg') {
    imgEl.setAttribute("src", './assets/images/hero-slider-1.jpg');
    textChanger();
}
});


// SLIDING NAV
openBtn.addEventListener('click', function () {
    navQuickLinks.classList.add('slidingNav');
});

closeBtn.addEventListener('click', function () {
    navQuickLinks.classList.remove('slidingNav');
});


// HIDE SLIDING NAV BAR
heroHomePage.addEventListener('click', () =>{
    navQuickLinks.classList.remove('slidingNav');
    });
    
// FIXED ARROW
// (function () {
//   const scrollPosition = 75;

// window.addEventListener('scroll', function () {
//     window.scrollY >= scrollPosition ?
//     ( fixedArr.classList.remove('hideFixed')) :
//      ( fixedArr.classList.add('hideFixed'));
//     });

//  })();


//  if (landingPageEl) {
//         setTimeout(() => {
//            fixedArr.classList.remove('hideFixed');
//            console.log(55);
//         }, 3000);
//        }



const containerHovers = document.querySelectorAll('.menus-container_item');

containerHovers.forEach(containerHover => {
    containerHover.addEventListener('mouseover', function () {
        // Select the image within the current container being hovered over
        const containerImgs = containerHover.querySelector('.menus-container_item--img');
        const containerImgsImg = containerHover.querySelector('.menus-container_item--img-img');

        containerImgs.classList.add('menu-hover');
        containerImgsImg.classList.add('menu-hover2');
    });

    containerHover.addEventListener('mouseout', function () {
        // Select the image within the current container being hovered over
        const containerImgs = containerHover.querySelector('.menus-container_item--img');
        const containerImgsImg = containerHover.querySelector('.menus-container_item--img-img');

        containerImgs.classList.remove('menu-hover');
        containerImgsImg.classList.remove('menu-hover2');
    });
});





// containerImgs.forEach(containerImg => {
//     containerImg.addEventListener('mouseenter', function () {
//         console.log(100);
//     });
// });



// const quiz1 = 1 + '2' + 3 - '4' + 5;
// const quiz2 = (1 + '2' + 3) - '4' + 5;

// console.log(quiz1);
// console.log(quiz2);