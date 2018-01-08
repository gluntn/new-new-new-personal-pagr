const openMenu   = document.getElementById("open-menu")
const navigation = document.getElementById("navigation")
const overlay    = document.getElementById("overlay")

openMenu.addEventListener('click', (e) => {
  navigation.classList.toggle("show");
  if(navigation.classList.contains("show")) { overlay.classList.remove("hidden") }
  else { overlay.classList.add("hidden"); }
});

overlay.addEventListener('click', (e) => {
  if(navigation.classList.contains("show")) { navigation.classList.remove("show"); }
  overlay.classList.toggle("hidden");
});
