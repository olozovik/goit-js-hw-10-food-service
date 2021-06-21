const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputSwitchEl = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add(Theme.DARK);
  inputSwitchEl.checked = true;
}

const changeThemeClassBody = () => {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
    return;
  }
  if (document.body.classList.contains(Theme.DARK)) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
    return;
  }
  document.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', 'dark');
};

const changeInputHandler = event => {
  if (inputSwitchEl.checked) {
    changeThemeClassBody();
  } else {
    changeThemeClassBody();
  }
};

inputSwitchEl.addEventListener('change', changeInputHandler);
