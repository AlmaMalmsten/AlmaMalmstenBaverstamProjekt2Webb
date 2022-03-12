let cell0 = document.querySelector(".HowTo110");
let cell1 = document.querySelector(".HowTo111");
let cell2 = document.querySelector(".HowTo112");
let cell3 = document.querySelector(".HowTo113");
let cell4 = document.querySelector(".HowTo114");
let cell5 = document.querySelector(".HowTo115");
let cell6 = document.querySelector(".HowTo116");
let cell7 = document.querySelector(".HowTo117");
let cell8 = document.querySelector(".HowTo118");

let button = document.querySelector(".button1")
let body = document.querySelector(".HowTo")


cell0.addEventListener("click", plant0R);
cell1.addEventListener("click", plant1R);
cell2.addEventListener("click", plant2R);
cell3.addEventListener("click", plant3R);
cell4.addEventListener("click", plant4R);
cell5.addEventListener("click", plant5R);
cell6.addEventListener("click", plant6R);
cell7.addEventListener("click", plant7R);
cell8.addEventListener("click", plant8R);

button.addEventListener("click", buttonShit);

function buttonShit() {
    body.style.backgroundColor = "#df2d4d";
    plant0R()
    plant1R()
    plant2R()
    plant3R()
    plant4R()
    plant5R()
    plant6R()
    plant7R()
    plant8R()
}

function plant0R() {
  cell0.style.backgroundColor = "#df2d4d";
}
function plant1R() {
  cell1.style.backgroundColor = "#df2d4d";
}
function plant2R() {
  cell2.style.backgroundColor = "#df2d4d";
}
function plant3R() {
  cell3.style.backgroundColor = "#df2d4d";
}
function plant4R() {
  cell4.style.backgroundColor = "#df2d4d";
}
function plant5R() {
  cell5.style.backgroundColor = "#df2d4d";
}
function plant6R() {
  cell6.style.backgroundColor = "#df2d4d";
}
function plant7R() {
  cell7.style.backgroundColor = "#df2d4d";
}
function plant8R() {
  cell8.style.backgroundColor = "#df2d4d";
}
