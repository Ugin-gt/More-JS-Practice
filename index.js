'use strict';
const ul = document.getElementById('root-li');
const form = document.getElementById('root-form');
const arr = [];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target,
    target: { email: emailInput },
  } = e;
  arr.push(emailInput.value); // form
  ul.append(createLiElement(emailInput.value));
  target.reset();
});

function createLiElement(value) {
  const li = createElement('li',
    { classNames: ['inputArr'] }, [document.createTextNode(value)
  ]);
  return li;
}

function createElement(type, { classNames, onClick }, children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}