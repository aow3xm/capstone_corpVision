let themeSwitch = document.querySelector('#checkbox');
let body = document.body;

themeSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});

// tắt show nav khi resize trình duyệt
window.addEventListener('resize', function() {
    var header = document.querySelector('header#site-header')
    var nav = document.querySelector('#navbarSupportedContent');
    var windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      header.classList.remove('expanded');
      nav.classList.remove('show');
    }
  });