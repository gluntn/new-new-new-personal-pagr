const openMenu   = document.getElementById("open-menu")
const navigation = document.getElementById("navigation")

openMenu.addEventListener('click', (e) => {
  navigation.classList.toggle("show");
});
