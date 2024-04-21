
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



/*
<article class="menus">
  <section class="menus-headings">
  <h1 class="menus-headings_heading heroTexts--heading">special selection
  </h1>

  <h2 class="menus--headings_subheading heroTexts--cursiveTexts">
  delicious menu
  </h2>
</section>

<section class="menus-container">

<div class="menus-container_item">
  <figure class="menus-container_item--img">
    <img src="./assets/images/menu-1.png" alt="Greek Salad" width="100" height="100">
  </figure>


  <div class="menus-container_item--texts">

<div class="menus-container_item--texts__heading">
    <div class="menus-container_item--texts__headingDiv">
    <h2 class="menus-container_item--texts__heading-heading">Greek Salad</h2>
      <button class="menus-container_item--texts__headingBtn">seasonal</button>
       </div>
    
    <div class="menus-container_item--texts__heading-price">$30.50</div>
      </div>


  <p class="menus-container_item--texts__texts">
Cucumbers, Tomatoes, Red Onions, Kalamata olives, Feta cheese, Red wine vinegar, Bell pepper, and Oregano.
  </p>
  </div>
  
</div>


</section>



</article> */