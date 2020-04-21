document.querySelector(".MobileMenu").addEventListener("click", (e) => {
  e.preventDefault();
  let menu = document.querySelector(".menuBTN");
  menu.classList.toggle("menuActive");
  let menuText = document.querySelector(".LinkBlockHeader");
  menuText.classList.toggle("menuActive");
});