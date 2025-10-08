/* //Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const head = document.head;
// head.innerHTML = '';
// console.log(head);

const header = document.querySelector('.header');
console.log(header);
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const section1 = document.getElementById('section--1');
//section1.innerHTML = '';
section1.remove();
console.log(section1);

//Buttons
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

const btnNavEl = document.querySelector('.nav--mobile-icon');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
console.log(document.getElementsByTagName('button'));
 */

/* //Creating and Inserting Element
const message = document.createElement('div');
//classList.add() Add an element to the existing class List
//classList.remove() Removes an element to the existing class list
//classList.toggle() Toggles an element to the existing class list
//classList.contains() checks if an element is in the existing class list
message.innerHTML = `We use cookies for improved fuctionality and analytics.
<button class = "btn btn--button btn--close-cookie">Got it!</button>
`;
message.classList.add('cookie-message');
const header = document.querySelector('.header');
// header.prepend(message); //First Element
// header.appendChild(message); //Last Element
header.before(message);
header.before(message.cloneNode(true));
header.after(message);
// console.log(message);

//Deleting Elements
const btnCloseCookie = document.querySelectorAll('.btn--close-cookie');
// btnCloseCookie.addEventListener('click', () => {
//   message.remove();
// });

btnCloseCookie.forEach(btn => {
  btn.addEventListener('click', () => {
    message.parentElement.removeChild(message);
  });
});

//Styles, Attributes and Classes
//Styles
header.after(message);
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

console.log(message.style.backgroundColor);
console.log(message.style.width);

const messageHeight =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
message.style.height = messageHeight;
console.log(messageHeight);

//Attributes
//Standard Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src);

logo.alt = 'Beautifully minimalistic logo';
console.log(logo.alt);
console.log(logo.id);

//Non-Standard Attributes
console.log(logo.designer);
//Get Attributes
console.log(logo.getAttribute('designer'));

//Set Attributes
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

//Data Attributes
// console.log(logo.getAttribute('date-version-number'));
// console.log(log.getAttribute('data-id'));

console.log(logo.dataset.versionNumber);
console.log(logo.dataset.id);

//Mouse Events
const h1 = document.querySelector('h1');

const alertH1 = () => {
  alert('Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
 */

/* //Event Bubbling
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
//console.log(randomInt(0, 255));
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

const navLink = document.querySelector('.nav__link');
navLink.addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV LINK', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

document.querySelector('body').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('DOCUMENT', e.target, e.currentTarget);
}); */

//////////////////////////////////////////////////////////

/* //DOM Traversing
const h1 = document.querySelector('h1'); //h1, .heading, #heading

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = '#fff';
h1.firstElementChild.style.backgroundColor = '#1098ad';
//h1.firstElementChild.classList.remove('highlight');
console.log(h1.lastChild);
console.log(h1.firstChild);

//Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentNode.parentNode);
h1.parentNode.parentNode.style.backgroundColor = 'green';
// console.log(h1.parentElement.parentElement.parentElement);

//Event Delegation
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sidewards: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);
console.log(h1.previousSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  el.style.transform = 'scale(1.1)';
}); */
