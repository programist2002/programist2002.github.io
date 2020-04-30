const demo = () => {
  let menu = document.querySelector(".menuBTN");
  menu.classList.toggle("menuActive");
  let menuText = document.querySelector(".LinkBlockHeader");
  menuText.classList.toggle("menuActive");
}

document.querySelector(".MobileMenu").addEventListener("click", (e) => {
  e.preventDefault();
  demo()
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    demo()
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


const demo3 = () => {
  document.querySelector(".TheLastPhoto").scrollIntoView({
    behavior: "smooth",
    block: "end"
  })
}

document.getElementById("demo2").addEventListener("click", (e) => {
  e.preventDefault();
  SupplementImages();
  // demo3();
  // document.querySelector(".TheLastPhoto").classList.remove;

})

const arrGallery = [
  "./images/body/img1.png",
  "./images/body/img2.png",
  "./images/body/img3.png",
  "./images/body/img4.png",
  "./images/body/img5.png",
  "./images/body/img6.png",
  "./images/body/img3.png",
  "./images/body/img4.png",
  "./images/body/img5.png",
  "./images/body/img6.png",
  "./images/body/img3.png",
  "./images/body/img4.png",
  "./images/body/img5.png",
  "./images/body/img6.png",
  "./images/body/img6.png",
  "./images/body/img6.png",
]

let flag = true
let count = 0

const SupplementImages = () => {

  const imgGalleryBlock = document.getElementById("imgGalleryBlock");

  const div = document.createElement("div");

  div.className = "BlockFotoBlock4";

  for (let i = 0; i < 3; i++) {
    if (flag) {
      let img = document.createElement("img");
      img.src = arrGallery[count];
      div.appendChild(img);
      count++;
    }

    if (count === arrGallery.length) {
      flag = false
    }
  }

  imgGalleryBlock.appendChild(div);
}

