const togglebutton = document.getElementById("toggle-button");
const navilist = document.getElementById("navi-list");
togglebutton.addEventListener('click', () => {
    navilist.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    const scrollY = window.scrollY;

    if (scrollY > 40) {
        navbar.classList.add('scroll-animation');
    } else {
        navbar.classList.remove('scroll-animation');
    }
});