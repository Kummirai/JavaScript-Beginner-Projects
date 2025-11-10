const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const displayedImage = document.querySelector("displayed-img");

const gallery = [
  {
    id: 1,
    img: "images/image-1.jpg",
  },
  {
    id: 2,
    img: "images/image-2.jpg",
  },
  {
    id: 3,
    img: "images/image-3.jpg",
  },
  {
    id: 4,
    img: "images/image-4.jpg",
  },
  {
    id: 5,
    img: "images/image-5.jpg",
  },
  {
    id: 6,
    img: "images/image-6.jpg",
  },
  {
    id: 7,
    img: "images/image-7.jpg",
  },
  {
    id: 8,
    img: "images/image-8.jpg",
  },
];

prev.addEventListener("click", () => {
  console.log("prev");
});

next.addEventListener("click", () => {
  console.log("next");
});
