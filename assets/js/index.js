'use strict';

const cardContainer = document.getElementById('root'); // ul

const cards = responseData.sort((prev, next) => prev.id - next.id).map((userData) => createUserCardElement(userData)); // создаем li

cardContainer.append(...cards); // добавляем li в ul

/**
  * @param {object} userData
 * @returns {HTMLLIElement}
 */
function createUserCardElement(userData) {
  const { firstName, lastName, description, contacts } = userData;

  const h2 = createElement('h2', { classNames: ['cardName'] }, [
    document.createTextNode(`${firstName} ${lastName}`),
  ]);
  const p = createElement('p', { classNames: ['cardDescription'] }, [
    document.createTextNode(description || ''),
  ]);
  const img = createCardImage(userData);
  
  const a = createIcons(contacts);

  const article = createElement('article', { classNames: ['cardContainer'] }, [
    img,
    h2,
    p,
    a
    
  ]);

  const wrapper = createElement('li', { classNames: ['cardWrapper'] }, [
    article,
  ]);

  return wrapper; //htmllielement
}

function createCardImage(userData) {
  const { firstName, lastName, id } = userData;

  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', `wrapper${id}`); // устанавливаем  id для контейнер картинки
  imageWrapper.classList.add('imageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(`${firstName} ${lastName}`);

  const initials = document.createElement('div');
  initials.classList.add('imagePlaceholder', 'imagePlacement');
  initials.append(document.createTextNode(firstName[0], lastName[0] || ''));

  createImage(userData);

  imageWrapper.append(initials);
  return imageWrapper;
}

function createImage({ profilePicture, firstName, lastName, id }) {
  const img = document.createElement('img'); // = new Image();
  img.setAttribute('src', profilePicture);
  img.setAttribute('alt', firstName, lastName);
  img.dataset.id = id; // даём картинки её id
  img.classList.add('cardImage', 'imagePlacement');
  img.addEventListener('error', imageErrorHandler);
  img.addEventListener('load', imageLoadHandler);
}

/* 
  EVENT LISTENERS
*/
function imageErrorHandler({ target }) {
  target.remove();
}

function imageLoadHandler({
  target: {
    dataset: { id },
  },
  target,
}) {
  document.getElementById(`wrapper${id}`).append(target);
}
/* 
  UTILS
*/
// DONT TRUST THIS CODE. TAKEN FROM STACKOVERFLOW
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
/* 
  LIB
*/
/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames
 * @param {function} options.onClick
 * @param {HTMLElement[]} children
 */
function createElement(type, { classNames, attributes, onClick }, children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  if (attributes) {
    for (const [attrName, attrValue] of Object.entries(attributes)) {
      elem.setAttribute(attrName, attrValue);
    }
  }
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}