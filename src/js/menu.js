import menuTpl from '../templates/menu.hbs';
import menuJSON from '../menu.json';

const menuEl = document.querySelector('.js-menu');
menuEl.innerHTML = menuTpl(menuJSON);
