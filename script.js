const menuButton = document.querySelector(".header__img");
const menu = document.querySelector(".header__menu");
const menuItem = document.querySelectorAll(".header__menu-item");
let menuButtonClicked = false;

function slideMenu(url , elementClass, newElementClass, clicked) {
	menuButton.src = url;
	menu.classList.replace(elementClass, newElementClass);
	menuButtonClicked = clicked;
}

menuButton.onclick = ()=> {
	if(!menuButtonClicked)
		slideMenu("img/cancel.png", "header__menu", "header__menu__show", true);
	else
		slideMenu("img/menu.png", "header__menu__show", "header__menu", false);
}

for(let item of menuItem) {
	item.onclick = ()=> {
		slideMenu("img/menu.png", "header__menu__show", "header__menu", false);
	}
}

window.addEventListener('resize', function(event){
	let windowSize = window.matchMedia("(max-width: 1024px)");
	if (!windowSize.matches) {
		slideMenu("img/menu.png", "header__menu__show", "header__menu", false);
	}
});


