const openMenu   = document.getElementById("open-menu")
const navigation = document.getElementById("navigation")
const overlay    = document.getElementById("overlay")
const searchBar  = document.getElementById("search-input")
const header     = document.getElementById("header-img")

openMenu.addEventListener('click', (e) => {
  navigation.classList.toggle("show");
  if(navigation.classList.contains("show")) { overlay.classList.remove("hidden") }
  else { overlay.classList.add("hidden"); }
});

overlay.addEventListener('click', (e) => {
  if(navigation.classList.contains("show")) { navigation.classList.remove("show"); }
  overlay.classList.toggle("hidden");
});

// searchBar.addEventListener('click', function() {
//   if(this === document.activeElement) {
//     header.style.display = "none";
//   }
// });

searchBar.addEventListener('focus', () => header.style.display = "none");
searchBar.addEventListener('blur', () => header.style.display = "block");
