const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputSwitchEl = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add(Theme.DARK);
  inputSwitchEl.checked = true;
}

const changeInputHandler = event => {
  if (inputSwitchEl.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
  }
};

inputSwitchEl.addEventListener('change', changeInputHandler);
