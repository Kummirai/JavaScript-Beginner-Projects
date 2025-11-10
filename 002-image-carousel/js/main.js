const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const displayedImage = document.querySelector("#displayed-img");

const gallery = [
  "images/image-1.webp",

  "images/image-2.webp",

  "images/image-3.webp",

  "images/image-4.webp",

  "images/image-5.webp",

  "images/image-6.jpg",

  "images/image-7.jpg",

  "images/image-8.jpg",
];

let index = 0;

displayedImage.setAttribute("src", gallery[index]);

prev.addEventListener("click", () => {
  if (index === 0) {
    index = gallery.length - 1;
    displayedImage.setAttribute("src", gallery[index]);
  } else {
    index -= 1;
    displayedImage.setAttribute("src", gallery[index]);
  }
});

next.addEventListener("click", () => {
  if (index === gallery.length - 1) {
    index = 0;
    displayedImage.setAttribute("src", gallery[index]);
  }
  index += 1;
  displayedImage.setAttribute("src", gallery[index]);
});
