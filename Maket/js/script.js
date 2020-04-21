document.querySelector(".MobileMenu").addEventListener("click", (e) => {
  e.preventDefault();
  let menu = document.querySelector(".menuBTN");
  menu.classList.toggle("menuActive");
  let menuText = document.querySelector(".LinkBlockHeader");
  menuText.classList.toggle("menuActive");
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    let menu = document.querySelector(".menuBTN");
    menu.classList.toggle("menuActive");
    let menuText = document.querySelector(".LinkBlockHeader");
    menuText.classList.remove("menuActive");
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    console.log(menuText);
  })
}