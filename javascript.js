document.addEventListener("scroll", function () {
  console.log("der scrolles");

  if (scrollY > 10) {
    document.querySelector("header").style.backgroundColor = "#1f89c3";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
});

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
