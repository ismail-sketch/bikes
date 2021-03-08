/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */

window.addEventListener("DOMContentLoaded", () => {
  'use strict';
  const headerMenu = document.querySelector('.header__menu');
  const headerBurger = document.querySelector('.header__burger');
  const menuWindow = document.querySelector('.header__menu-window');

  headerMenu.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    menuWindow.classList.toggle('show-menu');
  });




  //SWIPER==================================================
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.8,
    spaceBetween: 0,

    breakpoints: {
      310: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      900: {
        slidesPerView: 1.8,
      },
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopslides: 1.8,
    centeredSlides: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  

  // СЛАЙДЕР РУЧНОЙ=======================================================

  const favoriteBig = document.querySelectorAll('.categories__favorites-big');
  const arrowSlide = document.querySelectorAll('.categories__arrow-slide');
  const favorBigWrp = document.querySelector('.categories__favorites-big-wrp');
  const favoriteSmall = document.querySelectorAll('.categories__favorites-small');
 

  

  favoriteBig[0].style.display = 'block';
  let a = 0;

  // arrowSlide.forEach(item => {
  //   item.addEventListener('click', () => {
  //     favoriteBig[a].style.display = 'none';
  //       favoriteBig[a += 1].style.display = 'block';
  //   });
  // });

 

  // favorBigWrp.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (target.closest('.categories__arrow-slide')) {
  //     if (a == favoriteBig.length) {
  //      a = 0;
  //     //  favoriteBig[3].style.display = 'none';
  //     } 
  //       favoriteBig[a].style.display = 'none';
  //       favoriteBig[a += 1].style.display = 'block';
  //     console.log(a);
  //   }
  // });

  favoriteSmall.forEach((item, i) => {
    item.addEventListener('click', () => {
      favoriteBig.forEach(index => {
        index.style.display = 'none';
      });
      favoriteBig[i].style.display = 'block';
    });
  });



  // ОПОВЕЩЕНИЕ О ДЕМО ===========================================

  const dataClick = document.querySelectorAll('[data-click]'),
        demoWrp = document.querySelector('.demo-wrp'),
        demoClose = document.querySelector('.demo-close');

  dataClick.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      demoWrp.classList.add('demoactive');
      document.body.style.overflow = 'hidden';
    });
  });

  demoWrp.addEventListener('click', (e) => {
    if(e.target === demoWrp) {
      demoWrp.classList.remove('demoactive');
      document.body.style.overflow = '';
    }
  });

  demoClose.addEventListener('click', () => {
    demoWrp.classList.remove('demoactive');
    document.body.style.overflow = '';
  });

 
}); // КОНЕЦ ДОМКОНТЕНТ=================================================

 