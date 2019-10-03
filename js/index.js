//Header image disappers when focused on//
let bus = document.querySelector('header img');
bus.addEventListener('focus', () => {
  bus.style.display = 'none';
  
});

//When any image is clicked the window alerts a message//
const ouch = document.querySelectorAll('img');
ouch.forEach(index =>
  index.addEventListener('click', () => {
    alert('Ouch!');
  })
);

//When the header is double clicked it turns pink//
let header = document.querySelector('header');
header.addEventListener('click', () => {
  header.style.backgroundColor = 'pink';
});

//When anykey is pressed the window alerts a message//
document.addEventListener('keypress', () => {
  alert('Youch!');
});

//If you try to use the page but do not have internet the window alerts a message//
document.addEventListener('offline', () => {
  alert('Check your connection and come back later.');
});

//The h1 turns red when a mouse leaves it//
let h1 = document.querySelector('h1');
h1.addEventListener('mouseleave', () => {
  h1.style.color = 'red';
});

//Grabbing all the nav a tags// 
let nav = document.querySelectorAll('nav a');
//When moused over the fist a tag turns orange//
nav[0].addEventListener('mouseover', () => {
  nav[0].style.color = 'orange';
});
//When a mouse enters the second a tag turns yellow//
nav[1].addEventListener('mouseenter', () => {
  nav[1].style.color = 'yellow';
});
//When clicked the third a tag should turn green without triggering the pink header event listener//
nav[2].addEventListener('dblclick', () => {
  nav[2].style.color = 'green';
  event.stopPropagation();
});

//When a mouse moves on it at all the fourth a tag turns indigo//
nav[3].addEventListener('mousemove', () => {
  nav[3].style.color = 'indigo';
});

//When any button is touched the window allets a message//
let btn = document.querySelectorAll('.btn');
btn[0].addEventListener('ontouchstart', () => {
  btn[0].innerHTML = 'Hello!';
});
