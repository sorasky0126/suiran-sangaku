function loadHeader(){
  fetch('/component/html/header.html')
    .then(response => {
      if(!response.ok) throw new Error('header.htmlの読み込みに失敗しました。');
      return response.text();
      
    })
    .then(html => {
      document.getElementById('header').innerHTML = html;
    })
    .catch(error => {
      console.error('header.htmlの読み込みに失敗しました。', error);
    }); 
}

function loadFooter(){
  fetch('/component/html/footer.html')
    .then(response => {
      if(!response.ok) throw new Error('footer.htmlの読み込みに失敗しました。');
      return response.text();
    })
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(error => {
      console.error('footer.htmlの読み込みに失敗しました。', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});

// ハンバーガーメニュー
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
