const menuButton     = document.getElementById("mobile");
const slideMenu      = document.getElementById("mobile-menu");
const overlay        = document.getElementById("overlay");

function switchClasses(el, cOne, cTwo) {
		if(el.classList) {
			if(el.classList.contains(cOne)) {
				el.classList.remove(cOne);
				el.classList.add(cTwo);
			}
	} else {
		console.error("no classlist wtf");
	}
}

overlay.addEventListener('click', () => {
	if(slideMenu.classList.contains('super-show')
		&& !overlay.classList.contains('hidden')) {
			switchClasses(slideMenu, 'super-show', 'super-hide');
			overlay.classList.add("hidden");
			menuButton.classList.remove("close");
	}
})

menuButton.addEventListener('click', () => {
	if(slideMenu.classList.contains('super-hide')) {
		switchClasses(slideMenu, 'super-hide', 'super-show');
		overlay.classList.remove("hidden");
		menuButton.classList.add("close");
	}
	else if(slideMenu.classList.contains('super-show')) {
		switchClasses(slideMenu, 'super-show', 'super-hide');
		overlay.classList.add("hidden");
		menuButton.classList.remove("close");
	}
});
