let hamburger = document.getElementById("js-hamburger");
let menu = document.getElementById("js-menu");

hamburger.addEventListener(
  "click", () =>
    {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    }
);
