let themeSwitch = document.querySelector('#checkbox');
let body = document.body;

themeSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});