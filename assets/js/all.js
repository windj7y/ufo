const urlParams = new URLSearchParams(window.location.search);
const isLoggedIn = urlParams.get('status') === 'login';

const login = document.querySelector('.login');
const noLogin = document.querySelector('.no-login');

login.classList.toggle('d-none', !isLoggedIn);
noLogin.classList.toggle('d-none', isLoggedIn);