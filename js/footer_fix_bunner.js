// JavaScript Document
//追従バナー	
//20240109 常に表示に変更
let cta = 	document.querySelector("#float_bunner");
cta.classList.add("fix");

/*
let target_item = document.querySelector("#fv");
let cta = 	document.querySelector("#float_bunner");
window.addEventListener("load", (event) => {
	sample_createObserver();	
}, false);
 
function sample_createObserver() {
	let sample_observer;
	let options = {
		root: null,
		rootMargin: "-70px",
		threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
	};
	sample_observer = new IntersectionObserver(cta_disp, options);
	sample_observer.observe(target_item);
}	
 
function cta_disp(entries){	
	entries.forEach(entry => {
		if (entry.intersectionRatio <= 0.5) {
			cta.classList.add("fix");
		}else{
			cta.classList.remove("fix");
			
		}						
	});	
}		
*/