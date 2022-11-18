let menu = document.querySelector('.nav');
let burger = document.querySelector('.home__menu');

let lang = document.querySelector('.nav__lang');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
    function () {
        burger.classList.toggle('home__menu--active');
        menu.classList.toggle('nav--active');

        lang.classList.toggle('nav__lang--active');
        document.body.classList.toggle('stop-scroll');
    })

menulinks.forEach(function (element) {
    element.addEventListener('click', function () {
        burger.classList.remove('home__menu--active');
        menu.classList.remove('nav--active');
        lang.classList.remove('nav__lang--active')
        document.body.classList.remove('stop-scroll');
    })
});
let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})