var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark_theme");
}
/*
const classToggle = (el, ...args) => {
    args.map(e => el.classList.toggle(e))
}
*/
const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const eye3 = document.querySelector('.eye3');
const eye4 = document.querySelector('.eye4');
const eye5 = document.querySelector('.eye5');
const eye6 = document.querySelector('.eye6');
const eye7 = document.querySelector('.eye7');
const eye8 = document.querySelector('.eye8');
window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 6;
    const y = -(window.innerHeight / 2 - evt.pageY) / 10;
    eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye3.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye4.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye5.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye6.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye7.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye8.style.transform = `translateY(${y}px) translateX(${x}px)`;
});