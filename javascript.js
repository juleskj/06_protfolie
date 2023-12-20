// document.addEventListener("scroll", function (event) {
//   console.log("der scrolles");

//   if (scrollY > 850) {
//     document.querySelector(".box1").style.top = "0%";
//     document.querySelector(".box2").style.top = "0%";
//     document.querySelector(".box3").style.top = "0";
//   } else {
//     document.querySelector(".box1").style.top = "40%";
//     document.querySelector(".box2").style.top = "40%";
//     document.querySelector(".box3").style.top = "40px";
//   }
// });

document.querySelector(" span").addEventListener("click", clickMenuKnap);

function clickMenuKnap() {
  console.log("der clickes");

  document.querySelector("span").classList.add("rotate_360");

  document
    .querySelector("span")
    .removeEventListener("mousedown", clickMenuKnap);
  document.querySelector("span").addEventListener("animationend", clickIgen);
}

function clickIgen() {
  console.log("der kan klikes igen");
  document.querySelector("span").classList = "";

  document.querySelector("span").offsetLeft;
  document.querySelector("span").addEventListener("click", clickMenuKnap);
}
