const navBtn = document.querySelector('.container-burger');
const navIcon = document.querySelector('.bar1');
const navIcon2 = document.querySelector('.bar2');
const navIcon3 = document.querySelector('.bar3');
const nav = document.querySelector('.header__menu');
const menuNav = document.querySelector('.header_title');
const menuList = document.querySelector('.menu')
const menuTitle = document.querySelector('.header__list')
const lang = document.querySelector('.lang');
const navRemove = document.getElementById('#body')

navBtn.onclick = function () {
    navIcon.classList.toggle("change")
    navIcon2.classList.toggle("change")
    navIcon3.classList.toggle("change")
    nav.classList.toggle("click")
    menuNav.classList.toggle("click")
    menuList.classList.toggle("click")
    menuTitle.classList.toggle("click")
    lang.classList.toggle("click")
    console.log("lang")
   navRemove.classList.remove("click")

}