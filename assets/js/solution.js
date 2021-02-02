// new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
// new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname


const supportedSocialNetworks = new Map()
  .set('www.facebook.com', './assets/icons/facebook.svg')
  .set('twitter.com', './assets/icons/twitter.svg')
  .set('www.instagram.com', './assets/icons/instagram.svg');


const [icons] = responseData.map((user) => createIcons(user.contacts));
document.body.append(...icons);


function createIcons(contacts) {
  const arrayOfIconElements = contacts.map((contact) => {
    const { hostname } = new URL(contact);

    if (supportedSocialNetworks.has(hostname)) {
      const src = supportedSocialNetworks.get(hostname);
      const img = document.createElement('img');
      img.setAttribute('src', src);
      const a = document.createElement('a');
      a.setAttribute('href', contact);
      a.append(img);
      return a;
    }
    return;
  });

  return arrayOfIconElements;
}
