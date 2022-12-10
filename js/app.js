const scrollButton = document.querySelector("#scroll-button");
const menuWrapper = document.querySelector(".menu-wrapper");
const closeMenuButton = document.querySelector("#close-icon");
const openMenuButton = document.querySelector("#menu-button");

scrollButton.addEventListener("click", () => {
	window.scrollTo({
		top: document.querySelector(".story-section")?.offsetTop,
		behavior: "smooth",
	})
})

openMenuButton.addEventListener("click", () => {
	document.querySelector(':root').style.setProperty('--display-menu', `block`);
	menuWrapper.classList.add("slideIn");
	menuWrapper.classList.remove("slideOut");
})

closeMenuButton.addEventListener("click", () => {
	menuWrapper.classList.add("slideOut");
	document.querySelector(':root').style.setProperty('--display-menu', `block`);
	menuWrapper.classList.remove("slideIn");
})

AOS.init({
	duration: 1200,
})