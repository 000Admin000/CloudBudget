burger.addEventListener('click', function(){

	let burger = document.getElementById('burger');
	let body = document.querySelector('body');
	let menuList = document.getElementById('burger-content');
	// let menu = document.getElementById('menu');


	menuList.classList.toggle('active-menu-list');
	burger.classList.toggle('burger-active');
	body.classList.toggle('overflow');
});




