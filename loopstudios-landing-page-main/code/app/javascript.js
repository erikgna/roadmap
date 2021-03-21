const hamburger = document.querySelector('#hamburger');
const linkMobile = document.querySelector('.header__links-mobile');
const btnHamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', function () {
    if (linkMobile.classList.contains('show')) {
        linkMobile.classList.remove('show');
        btnHamburger.classList.remove('show');
        linkMobile.classList.remove('fade-in');
        linkMobile.classList.add('fade-out');
    }
    else {
        linkMobile.classList.add('show');
        linkMobile.classList.add('fade-in');
        btnHamburger.classList.add('show');
    }
});