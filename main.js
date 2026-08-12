let hamburger = document.getElementById("js-hamburger");
let menu = document.getElementById("js-menu");

hamburger.addEventListener(
  "click", () =>
    {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    }
);

// ページ読み込み時に最初の画面高さを取得してpx固定する
window.addEventListener('DOMContentLoaded', () => {
  const faceImg = document.querySelector('.face-img');
  if (faceImg) {
    faceImg.style.height = `${window.innerHeight}px`;
  }
});
