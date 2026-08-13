function loadHeader(){
  fetch('/component/html/header.html')
    .then(responce => {
      if(!responce.ok) throw new Error('header.htmlの読み込みに失敗しました。');
      return responce.txt();
    })
    .then(html => {
      document.getErementById('header').innerHTML = html;
    })
    .catch(error => {
      console.error('header.htmlの読み込みに失敗しました。', error);
    });
    
}
