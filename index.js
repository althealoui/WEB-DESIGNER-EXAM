const navi = document.querySelector("#navi");
const bars = document.querySelector(".fa");

navi.addEventListener("click", function () {
  if (bars.classList.contains("fa-bars")) {
    document.getElementById("nav-bar-img").style.visibility = "visible";
    document.querySelector(".fa").classList.remove("fa-bars");
    document.querySelector(".fa").classList.add("fa-times");
  } else {
    document.getElementById("nav-bar-img").style.visibility = "hidden";
    document.querySelector(".fa").classList.remove("fa-times");
    document.querySelector(".fa").classList.add("fa-bars");
  }
});
