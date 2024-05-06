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

const arrHead1 = document.querySelector(".desktopArrHead-1");

const arrHead2 = document.querySelector(".desktopArrHead-2");

const fixedArr = document.querySelector(".fixed-arrow-btn");

const preloader = document.querySelector("[data-preload]");

//PRELOADER
// window.addEventListener('load', function () {
//   preloader.classList.add('hide');
// });

// PRELOADER
window.addEventListener('load', function () {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded');
})


// HERO PAGE
const imgUrls = [
  "./assets/images/hero-slider-1.jpg",
  "./assets/images/hero-slider-2.jpg",
  "./assets/images/hero-slider-3.jpg",
];

function textChanger() {
  if (imgEl.getAttribute("src") === "./assets/images/hero-slider-1.jpg") {
    heroHeadText.innerHTML = `Traditional Food & Hygiene`;
    heroCursiveText.innerHTML = `For the Love of <br>
                         Delicious Food`;
  } else if (
    imgEl.getAttribute("src") === "./assets/images/hero-slider-2.jpg"
  ) {
    heroHeadText.innerHTML = `Delightful Experience`;
    heroCursiveText.innerHTML = `Flavours Inspired by </br>
                                 the Seasons`;
  } else if (
    imgEl.getAttribute("src") === "./assets/images/hero-slider-3.jpg"
  ) {
    heroHeadText.innerHTML = `Amazing & Delicious`;
    heroCursiveText.innerHTML = `Where Every Flavour </br>
                           Tells a Story`;
  }
}

let currentIndex = 0;

function changeImg() {
  imgEl.src = imgUrls[currentIndex];

  currentIndex = (currentIndex + 1) % imgUrls.length;
  textChanger();

  setTimeout(changeImg, 7000);
}

changeImg(); // Initial call to start cycling through images

//ARROW FOR CHANGING IMAGE
arrHead1.addEventListener("click", () => {
  if (imgEl.getAttribute("src") === "./assets/images/hero-slider-1.jpg") {
    imgEl.setAttribute("src", "./assets/images/hero-slider-3.jpg");
    textChanger();
  } else if (
    imgEl.getAttribute("src") === "./assets/images/hero-slider-3.jpg"
  ) {
    imgEl.setAttribute("src", "./assets/images/hero-slider-2.jpg");
    textChanger();
  } else if (
    imgEl.getAttribute("src") === "./assets/images/hero-slider-2.jpg"
  ) {
    imgEl.setAttribute("src", "./assets/images/hero-slider-1.jpg");
    textChanger();
  }
});

arrHead2.addEventListener("click", () => {
  if (imgEl.getAttribute("src") === "./assets/images/hero-slider-1.jpg") {
    imgEl.setAttribute("src", "./assets/images/hero-slider-2.jpg");
    textChanger();
  } else if (
    imgEl.getAttribute("src") === "./assets/images/hero-slider-2.jpg"
  ) {
    imgEl.setAttribute("src", "./assets/images/hero-slider-3.jpg");
    textChanger();
  } else if (
    imgEl.getAttribute("src") === "./assets/images/hero-slider-3.jpg"
  ) {
    imgEl.setAttribute("src", "./assets/images/hero-slider-1.jpg");
    textChanger();
  }
});

// SLIDING NAV
openBtn.addEventListener("click", function () {
  navQuickLinks.classList.add("slidingNav");
});

closeBtn.addEventListener("click", function () {
  navQuickLinks.classList.remove("slidingNav");
});

// HIDE SLIDING NAV BAR
heroHomePage.addEventListener("click", () => {
  navQuickLinks.classList.remove("slidingNav");
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
