const btnHamburger = document.querySelector('#btnHamburguer');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {

    if (header.classList.contains('open')) { // Close Hamburger
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // Open Hamburger
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.remove('has-fade');
            element.classList.add('fade-in');
        });
    }

});