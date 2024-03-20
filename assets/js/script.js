
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

// const arrHeads = document.querySelectorAll('.deskstopArrHead');
const arrHead1 = document.querySelector('.deskstopArrHead-1');

const arrHead2 = document.querySelector('.deskstopArrHead-2');



//ARROW FOR CHANGING IMAGE
arrHead1.addEventListener('click', ()=>{
    if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
       imgEl.setAttribute("src", './assets/images/hero-slider-3.jpg');
    
    }else if (imgEl.getAttribute("src") === './assets/images/hero-slider-3.jpg') {
        imgEl.setAttribute("src", './assets/images/hero-slider-2.jpg');
    
    }else if (imgEl.getAttribute("src") === './assets/images/hero-slider-2.jpg') {
        imgEl.setAttribute("src", './assets/images/hero-slider-1.jpg');
    }
    });

arrHead2.addEventListener('click', ()=>{
if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
   imgEl.setAttribute("src", './assets/images/hero-slider-2.jpg');

}else if (imgEl.getAttribute("src") === './assets/images/hero-slider-2.jpg') {
    imgEl.setAttribute("src", './assets/images/hero-slider-3.jpg');

}else if (imgEl.getAttribute("src") === './assets/images/hero-slider-3.jpg') {
    imgEl.setAttribute("src", './assets/images/hero-slider-1.jpg');
}
});

// for (const arrHead of arrHeads) {
//     arrHead.addEventListener('click', () => {
//         console.log(99);
// if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
    
// }


//     });
// };



//PRELOADER
window.addEventListener('load', ()=>{
    landingPageEl.classList.add('loaded');

});



// HERO PAGE
const imgUrls = [
    './assets/images/hero-slider-1.jpg',
    './assets/images/hero-slider-2.jpg',
    './assets/images/hero-slider-3.jpg'
];

let currentIndex = 0;

function changeImg() {

    imgEl.src = imgUrls[currentIndex];

    currentIndex = (currentIndex + 1) % imgUrls.length;

    if (imgEl.getAttribute("src") === './assets/images/hero-slider-1.jpg') {
        heroHeadText.innerHTML = `Traditional & Hygeine`;
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
    
    setTimeout(changeImg, 7000);
};

changeImg(); // Initial call to start cycling through images



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
    