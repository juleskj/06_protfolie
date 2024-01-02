document.addEventListener("scroll", function () {
  console.log("der scrolles");

  if (scrollY > 10) {
    document.querySelector("header").style.backgroundColor = "#1f89c3";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
});

//Her laver jeg et event for nå jeg klikker på min meny
document.querySelector(" span").addEventListener("click", clickMenuKnap);

//jeg putter animation klassen på menuen
function clickMenuKnap() {
  console.log("der clickes");

  document.querySelector("span").classList.add("rotate_360");

  document
    .querySelector("span")
    .removeEventListener("mousedown", clickMenuKnap);
  document.querySelector("span").addEventListener("animationend", clickIgen);
}
//nå animationen er færdig tager jeg klassen af så jeg kan klikke på den igen og den kan roterer
function clickIgen() {
  console.log("der kan klikes igen");
  document.querySelector("span").classList = "";

  document.querySelector("span").offsetLeft;
  document.querySelector("span").addEventListener("click", clickMenuKnap);
}

//her gør jeg når jeg klikker på containerne så går den til de valgte sider, ved window.location.href

document.querySelector("#portfolie").addEventListener("click", function () {
  window.location.href = "portfolio.html";
});

document.querySelector("#gallery").addEventListener("click", function () {
  window.location.href = "gallery.html";
});

document.querySelector("#star_omos").addEventListener("mousedown", function () {
  window.location.href = "om_os.html";
});

//
//
//
//
document.querySelector(".star3").addEventListener("mouseover", mouseOver);
document.querySelector(".star2").addEventListener("mouseover", mouseOver);
document.querySelector(".star1").addEventListener("mouseover", mouseOver);

function mouseOver() {
  console.log("musen er over ");
  this.classList.add("hover");

  this.removeEventListener("mouseocer", mouseOver);
  this.addEventListener("mouseout", mouseOverIgen);
}

function mouseOverIgen() {
  console.log("mouseout");

  this.classList.remove("hover");
}
