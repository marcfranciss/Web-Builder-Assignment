// NAVIGATION BAR
function showSidebar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function closeSidebar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}
// --------------
// MODAL
const dialog = document.querySelector("dialog");
const body = document.body;
const showButton = document.querySelector("#showModal");
const closeButton = document.querySelector("#closeModal");
showButton.addEventListener("click", () => {
  dialog.showModal();
  body.classList.add("stopScroll");
});

closeButton.addEventListener("click", () => {
  dialog.close();
  body.classList.remove("stopScroll");
});

// ** SEND MESSAGE FORM
const textAgreement = document.querySelector("#agreement-text");
const chckAgreement = document.querySelector("#agreement");
chckAgreement.addEventListener("change", () => {
  chckAgreement.checked
    ? (textAgreement.style.color = "gray")
    : (textAgreement.style.color = "black");
});

// ** SEE MORE
const hideText = document.querySelector("#hide-text");
const showText = document.querySelector("#show-text");
const lessText = document.querySelector("#less-text");

function seeMore() {
  showText.style.display = "inline";
  hideText.style.display = "none";
}
function seeLess() {
  showText.style.display = "none";
  hideText.style.display = "inline";
}
// --------------
// CAROUSEL
var slides = document.querySelectorAll(".carousel-card");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

//manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});
// autoplay
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeClass) => {
        activeClass.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
