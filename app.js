const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const color6 = document.querySelector(".color6");
const color7 = document.querySelector(".color7");
const color8 = document.querySelector(".color8");
const color9 = document.querySelector(".color9");
const color10 = document.querySelector(".color10");

const searchBar = document.querySelector(".search");

let colors = [];
const searchForColor = () => {
  if (searchBar.value == "green") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "red") {
    color1.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "blue") {
    color2.style.display = "none";
    color1.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "brown") {
    color2.style.display = "none";
    color3.style.display = "none";
    color1.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "grey") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color1.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "yellow") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color1.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "pink") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color1.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "orange") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color1.style.display = "none";
    color9.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "purple") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color1.style.display = "none";
    color10.style.display = "none";
  }
  if (searchBar.value == "black") {
    color2.style.display = "none";
    color3.style.display = "none";
    color4.style.display = "none";
    color5.style.display = "none";
    color6.style.display = "none";
    color7.style.display = "none";
    color8.style.display = "none";
    color9.style.display = "none";
    color1.style.display = "none";
  }
  if (searchBar.value == "") {
    color1.style.display = "flex";
    color2.style.display = "flex";
    color3.style.display = "flex";
    color4.style.display = "flex";
    color5.style.display = "flex";
    color6.style.display = "flex";
    color7.style.display = "flex";
    color8.style.display = "flex";
    color9.style.display = "flex";
    color10.style.display = "flex";
  }
  setTimeout(searchForColor, 100);
};
searchForColor();
