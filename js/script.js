function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage =
				"url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
		}
	}
}

ibg();

const headerBurger = document.querySelector(".header__burger");
const menuList = document.querySelector(".menu__list");
const menuLink = menuList.querySelectorAll('.menu__link');
const body = document.body;

headerBurger.addEventListener("click", () => {
	headerBurger.classList.toggle("header__burger_active");
	menuList.classList.toggle("menu__list_active");
	menuLink.forEach(link => {
		link.addEventListener('click', () => {
			headerBurger.classList.remove("header__burger_active");
			menuList.classList.remove("menu__list_active");
		});
	});
	body.classList.toggle("lock");
});