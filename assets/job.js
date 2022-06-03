const serchbutton = document.querySelector('.search-button');
serchbutton.addEventListener('click', function() {
    this.parentElement.classList.toggle("open");
}, false);
const changeheightul = document.querySelector('.subnav__list1');
const itemli1 = document.querySelector('.subnav__item1');
const constitem = document.querySelector('.item__content1');
const itemli2 = document.querySelector('.subnav__item2');
const itemli3 = document.querySelector('.subnav__item3');
itemli1.addEventListener('mouseenter', function() {
    constitem.style.display = 'block';
    changeheightul.style.height = '500px';
})
itemli2.addEventListener('mouseenter', function() {
    constitem.style.display = 'none';
    changeheightul.style.height = '480px';
})
itemli3.addEventListener('mouseenter', function() {
    constitem.style.display = 'none';
    changeheightul.style.height = '300px';
})

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const backgr = document.querySelector('.background');
var dem = 0;
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    backgr.style.background = 'none';
    dem++;
    if (dem === 2) {
        backgr.style.background = 'url(assets/img/bg.webp) ';
        backgr.style.background = 'contain';
        dem = 0;
    }

});
//xoa background-image 
const movetoright = document.querySelector('.main__list');
const menuicon = document.querySelector('#menu__icon');
menuicon.onclick = function() {
    movetoright.classList.toggle('movetoright');
    menuicon.classList.toggle('bx-window-close');

}
var swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');

    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

window.addEventListener('scroll', scrollUp)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true
})
sr.reveal(`.home__title,.popular__container`)
sr.reveal(`.home__description,.footer__info`, { delay: 200 })
sr.reveal(`.home__search`, { delay: 300 })
sr.reveal(`.chance__content`, { delay: 300, origin: 'left' })
sr.reveal(`.chance__img`, { delay: 300, origin: 'right' })
sr.reveal(`.home__images`, { delay: 300, origin: 'bottom' })
sr.reveal(`.logo__content`, { interval: 100 })
sr.reveal(`.value__item`, { interval: 100 })