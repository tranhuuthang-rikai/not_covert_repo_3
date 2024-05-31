//スムーススクロール
const anchors = document.querySelectorAll('a[href^="#"]'); 
//const header = document.querySelector('header').offsetHeight; //header高さ
const urlHash = location.hash; // 

for ( let i = 0; i < anchors.length; i++ ) {
  anchors[i].addEventListener('click', (e) => {
    e.preventDefault();
    const href= anchors[i].getAttribute("href");
    if (href !== '#top') {
      const target = document.getElementById(href.replace('#', ''));
      //const position = window.pageYOffset + target.getBoundingClientRect().top - header;
	　const position = window.pageYOffset + target.getBoundingClientRect().top;
      window.scroll({
        top: position,      // スクロール先要素の左上までスクロール
        behavior: 'smooth'  // スクロールアニメーション
      });
    } else {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
}

//パラメータ―引継ぎ
/*
let para_url = new URL(window.location.href);
let params = para_url.searchParams;
let entries = params.entries();
let post_params = '?';
for(let entry of entries) {
	post_params += entry[0] + '=' + entry[1] + '&';	
}
post_params = post_params.slice(0, -1);

var para_links = document.querySelectorAll('.para_link');
for(var links = 0; links < para_links.length; links++){
	var base_link = para_links[links].getAttribute('href'); 			
	let set_para_link = base_link + post_params;
	para_links[links].setAttribute('href', set_para_link);	
}

localStorage.setItem('choco-inflow-params', post_params);

var currentUrl = location.pathname;
if (currentUrl.match(/index/)) {
	currentUrl.replace("index.html", "");
}
localStorage.setItem('choco-inflow-source', currentUrl);
*/