const menuButton = document.getElementById("menu");
const goUp = document.getElementById("go-up");
const body = document.getElementsByTagName("body")[0];

var switchClasses = function(el, cOne, cTwo) {
	  if(el.classList) {
	  	if(el.classList.contains(cOne)) {
	    	el.classList.remove(cOne);
	      el.classList.add(cTwo);
	    }
  } else {
  	console.error("no classlist wtf");
  }
}

menuButton.addEventListener('click', (e) => {
   switchClasses(menuButton, 'hidden', 'show');
  // e.stopPropogation();
});

body.addEventListener('click', (e) => {
  switchClasses(menuButton, 'show', 'hidden');
});

goUp.addEventListener('click', function() {
		window.scroll({
	  top: 0, 
	  behavior: 'smooth' 
	});
});

menuButton.addEventListener('mouseenter', (e) => {
   switchClasses(menuButton, 'hidden', 'show');
  // e.stopPropogation();
});

menuButton.addEventListener('mouseleave', (e) => {
   switchClasses(menuButton, 'show', 'hidden');
  // e.stopPropogation();
});
/*
menuButton.onclick = function(event) {
  console.log(menuButton.classList);
  if(menuButton.classList.contains("hidden")) {
    menuButton.classList.remove("hidden");
    menuButton.classList.add("show");
  }
}
*/