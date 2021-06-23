const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputSwitchEl = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  inputSwitchEl.checked = true;
}

const changeThemeClassBody = (addClass, removeClass) => {
  document.body.classList.remove(removeClass);
  document.body.classList.add(addClass);
  localStorage.setItem('theme', addClass);
};

const changeInputHandler = event => {
  if (inputSwitchEl.checked) {
    changeThemeClassBody(Theme.DARK, Theme.LIGHT);
  } else {
    changeThemeClassBody(Theme.LIGHT, Theme.DARK);
  }
};

inputSwitchEl.addEventListener('change', changeInputHandler);
