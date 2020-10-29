'use strict';

let mySwiper = new Swiper('.swiper-container', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
});

window.onload = () => {
    let bulletList = document.querySelectorAll('.swiper-pagination-bullet');
    let bulletArr = Array.prototype.slice.call(bulletList);
    for (let i = 0; i < bulletArr.length; i++) {
        bulletArr[i].classList.toggle('swiper-pagination-bullet-custom');
        if (bulletArr[i].getAttribute('aria-label') == 'Go to Slide 1') {
            bulletArr[i].classList.toggle('swiper-pagination-bullet-custom-active');
        }
    };
    let pagination = document.querySelector('.swiper-pagination');
    pagination.onclick = (ev) => {
        let target = ev.target;
        target.classList.toggle('swiper-pagination-bullet-custom-active');
        let paginationArr = Array.prototype.slice.call(pagination.children);
        for (i = 0; i < paginationArr.length; i++) {
            if ((paginationArr[i] != target) && (paginationArr[i].classList.contains('swiper-pagination-bullet-custom-active'))) {
                paginationArr[i].classList.toggle('swiper-pagination-bullet-custom-active');
            }
        }
    };
};

$(function() {
    $("#accordion").accordion();
} );

let burger = document.querySelector('.header-burger');

function burgerActive() {
    document.querySelectorAll('.header-burger-line').forEach((elem) => {
        elem.classList.toggle('line-active');
    });
    document.querySelector('.first-line').classList.toggle('first-line-active');
    document.querySelector('.second-line').classList.toggle('second-line-active');
    document.querySelector('.third-line').classList.toggle('third-line-active');
};

/*
burger.addEventListener('mouseenter', burgerActive);
burger.addEventListener('mouseleave', burgerActive);
*/

burger.onclick = () => {
    document.querySelectorAll('.header-burger-line').forEach((elem) => {
        elem.classList.toggle('line-active');
    });
    document.querySelector('.first-line').classList.toggle('first-line-cross');
    document.querySelector('.second-line').classList.toggle('second-line-cross');
    document.querySelector('.third-line').classList.toggle('third-line-cross');
    document.querySelector('.mobile-nav-section').classList.toggle('mobile-nav-section-active');
};