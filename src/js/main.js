const menuButton = document.getElementById("mobile");
const slideMenu  = document.getElementById("mobile-menu")
const feedbackButton = document.getElementById("feedback");

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
  if(slideMenu.classList.contains('super-hide')) {
    switchClasses(slideMenu, 'super-hide', 'super-show');
    menuButton.classList.add("close");
  } 
  else if(slideMenu.classList.contains('super-show')) {
    switchClasses(slideMenu, 'super-show', 'super-hide');
    menuButton.classList.remove("close");
  }
});

feedbackButton.addEventListener('click', (e) => {
  alert("Sorry! Not implemented yet!");
});