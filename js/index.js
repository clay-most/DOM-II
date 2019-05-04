let bus = document.querySelector("header img");
bus.addEventListener("click", () => {
  bus.style.display = "none";
  event.stopPropagation();
});

document.addEventListener("click", () => {
  alert("Ouch!");
});

let header = document.querySelector("header");
header.addEventListener("dblclick", () => {
  header.style.backgroundColor = "pink";
});

document.addEventListener("scroll", () => {
  alert("Wee!!");
});

document.addEventListener("offline", () => {
  alert("Check your connection and come back later.");
});

let h1 = document.querySelector("h1");
h1.addEventListener("mouseleave", () => {
  h1.style.color = "red";
});

let nav = document.querySelectorAll("nav a");
nav[0].addEventListener("mouseover", () => {
  nav[0].style.color = "orange";
});

nav[1].addEventListener("mouseenter", () => {
  nav[1].style.color = "yellow";
});
nav[2].addEventListener("mouseleave", () => {
  nav[2].style.color = "green";
});

nav[3].addEventListener("mousemove", () => {
  nav[3].style.color = "indigo";
});

let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("ontouchstart", () => {
  btn[0].innerHTML = "Hello!";
});
