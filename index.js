const hscore = document.querySelector(".h-score");
const gscore = document.querySelector(".g-score");
const hbtn1 = document.querySelector(".hbtn1");
const hbtn2 = document.querySelector(".hbtn2");
const hbtn3 = document.querySelector(".hbtn3");
const gbtn1 = document.querySelector(".gbtn1");
const gbtn2 = document.querySelector(".gbtn2");
const gbtn3 = document.querySelector(".gbtn3");
const newBtn = document.querySelector(".new-btn");
const endBtn = document.querySelector(".end-btn");
const homeBG = document.querySelector(".home-bg");
const guestBG = document.querySelector(".guest-bg");
const message = document.querySelector(".mess");
const h_btn = document.querySelectorAll(".h-btn");
const g_btn = document.querySelectorAll(".g-btn");
let isalive = true;
let homeScore = 0;
let guestScore = 0;

hbtn1.addEventListener("click", function () {
  if (isalive) {
    homeScore += 1;
    hscore.textContent = homeScore;
  }
});
hbtn2.addEventListener("click", function () {
  if (isalive) {
    homeScore += 2;
    hscore.textContent = homeScore;
  }
});
hbtn3.addEventListener("click", function () {
  if (isalive) {
    homeScore += 3;
    hscore.textContent = homeScore;
  }
});
