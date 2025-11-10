const hexCode = document.querySelector("#hex-code");
const generateColorBtn = document.querySelector("#generate-color-btn");
const displayColor = document.querySelector(".display-color");

const alphaNumerals = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let hexColor = [];

displayColor.style.backgroundColor =
  localStorage.getItem("generatedColor") || "#F2042A";

hexCode.innerHTML = localStorage.getItem("generatedColor") || "#F2042A";

const generateHexColor = () => {
  for (let num = 0; num < 6; num++) {
    const selectedHex = Math.floor(Math.random() * alphaNumerals.length);

    const hexChar = alphaNumerals[selectedHex];
    hexColor = [...hexColor, hexChar];
  }

  return `#${hexColor.toString().replaceAll(",", "")}`;
};

generateColorBtn.addEventListener("click", () => {
  hexColor = [];
  const generatedColor = generateHexColor();

  localStorage.setItem("generatedColor", generatedColor);

  displayColor.style.backgroundColor = localStorage.getItem("generatedColor");

  hexCode.innerHTML = generatedColor;
});
