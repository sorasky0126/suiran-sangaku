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

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});
