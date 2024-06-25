"use strict";
// const preLoaderEl = document.querySelector('.preloader');
const landingPageEl = document.querySelector(".landingPage");

const imgEl = document.querySelector(".heroPage-Img-img");

const heroHeadText = document.querySelector(".heroTexts--heading");

const heroCursiveText = document.querySelector(".heroTexts--cursiveTexts");

const openBtn = document.querySelector(".landingPage-navBar--menuBar_openMenu");

const closeBtn = document.querySelector(".navBar-links_heading--close-btn");

const navQuickLinks = document.querySelector(".navBar-links");

const navQuickLinksUl = document.querySelector(".navbar-link-item--ul");

const heroHomePage = document.querySelector(".hero-home-page");

const arrLeft = document.querySelector(".desktopArrHead-1");

const arrRight = document.querySelector(".desktopArrHead-2");

const fixedArr = document.querySelector(".fixed-arrow-btn");

const preloader = document.querySelector("[data-preload]");

const slides = document.querySelectorAll(".hero-home-page-page");

const slider = document.querySelector(".hero-home-page");


/////////////////////////
/////////////////////////
////////////////////////
// PRELOADER
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


/////////////////////////
/////////////////////////
////////////////////////
// HERO PAGE---will have to come back to this code, there's still a lot to do and refactor (The animations and opacity)
//Slider for the Arrow Buttons
let curSlide = 0;
const maxSlide = slides.length;
console.log(maxSlide);
//GoToSlide Function
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

//Next Slide
arrRight.addEventListener("click", function () {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;

  goToSlide(curSlide);
});

//Prev Slide
arrLeft.addEventListener("click", function () {
  curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;

  goToSlide(curSlide);
});

 // Automatic Slide
 const autoSlide = function() {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
};

setInterval(autoSlide, 7000);


/////////////////////////
/////////////////////////
////////////////////////
// NAV BAR
openBtn.addEventListener("click", function () {
  navQuickLinks.classList.add("slidingNav");
});

closeBtn.addEventListener("click", function () {
  navQuickLinks.classList.remove("slidingNav");
});

heroHomePage.addEventListener("click", () => {
  navQuickLinks.classList.remove("slidingNav");
});



/////////////////////////
/////////////////////////
////////////////////////
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



/////////////////////////
/////////////////////////
////////////////////////
//OUR MENUS
const containerHovers = document.querySelectorAll(".menus-container_item");

function handleContainerHover() {
  const containerImgs = this.querySelector(".menus-container_item--img");
  const containerImgsImg = this.querySelector(".menus-container_item--img-img");

  containerImgs.classList.toggle("menu-hover");
  containerImgsImg.classList.toggle("menu-hover2");
}

containerHovers.forEach((hover) => {
  hover.addEventListener("mouseover", handleContainerHover);
  // hover.addEventListener("mouseout", handleContainerHover);
  hover.addEventListener("touchstart", handleContainerHover);
  // hover.addEventListener("touchend", handleContainerHover);
});

//FORM DATE
const currentDate = new Date();
const locale = navigator.language;

const options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

const formattedDate = new Intl.DateTimeFormat(locale, options).format(
  currentDate
);
const [month, day, year] = formattedDate.split("/");
const formattedDateString = `${year}-${month}-${day}`;
console.log(formattedDateString);

document.getElementById("reservation-date").value = formattedDateString;

//OUR STRENGTH
const strengthHover = document.querySelectorAll(".strength--container__card");

function handleStrengthHover() {
  const strengthContainer = this.querySelector(
    ".strength--container__card-img img"
  );
  strengthContainer.classList.toggle("rollImage");
}

strengthHover.forEach((card) => {
  card.addEventListener("mouseover", handleStrengthHover);
  // card.addEventListener("mouseout", handleStrengthHover);
  card.addEventListener("touchstart", handleStrengthHover);
  // card.addEventListener("touchend", handleStrengthHover);
});

//EVENT PROPAGATION
// const strengthContainer = document.getElementById('strengthContainer');

// function handleHover(e) {
//     const target = e.target;

//     // Check if the target element is a card
//     if (target.classList.contains('strength--container__card')) {
//         const strengthContainer = target.querySelector('.strength--container__card-img img');
//         strengthContainer.classList.toggle('rollImage');
//     }
// }

// // Attach a single event listener to the parent element
// strengthContainer.addEventListener('mouseover', handleHover);
// strengthContainer.addEventListener('mouseout', handleHover);
// strengthContainer.addEventListener('touchstart', handleHover);
// strengthContainer.addEventListener('touchend', handleHover);

//this is same as below
// slides.forEach((s, i) => {
//   s.style.transform = `translateX(${100 * i}%)`
// });
