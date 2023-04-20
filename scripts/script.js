function openMenu(triggerSelector, menuSelector, activeClass, closeTrigger) {
   const trigger = document.querySelector(triggerSelector),
         menu = document.querySelector(menuSelector),
         close = document.querySelector(closeTrigger);

   trigger.addEventListener('click', () => {
      menu.classList.add(activeClass)
   })
   
   close.addEventListener('click', () => {
      menu.classList.remove(activeClass)
   })
}

function searchVisible(searchSelector, overlaySelector, closeSelector, activeClass, srSelector, srActive) {
   const search = document.querySelector(searchSelector),
         overlay = document.querySelector(overlaySelector),
         close = document.querySelector(closeSelector),
         sr = document.querySelector(srSelector);

   search.addEventListener("click", () => {
      overlay.classList.add(activeClass);
      sr.classList.add(srActive);
      document.body.style.overflow="hidden";
      document.body.style.marginRight = "17px"
   })
   close.addEventListener("click", () => {
      overlay.classList.remove(activeClass);
      sr.classList.remove(srActive);
      document.body.style.overflow="auto";
      document.body.style.marginRight = "0px"
   })
}


document.addEventListener("DOMContentLoaded", () => {
   openMenu(".header__hamburger", '.navbar__menu', 'navbar__menu__active', '.navbar__menu__exit');
   searchVisible(".header__top__left__search", '.overlay', '.header__sr__exit', 'overlay__active', '.header__sr', 'header__sr__active');
   searchVisible(".header__top__left__search__right", '.overlay', '.header__sr__exit', 'overlay__active', '.header__sr', 'header__sr__active')
})






$('.categories__wrapper').slick({
   infinite: true,
   slidesToShow: 3,
   centerMode: false,
   slidesToScroll: 1,

   prevArrow: '<div class="slideCarRigt"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>',
   nextArrow: '<div class="slideCarLeft"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
   responsive: [{
         breakpoint: 1180,
         settings: {
            slidesToShow: 2,
            arrows: false
         }
      },
      {
         breakpoint: 560,
         settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
         }
      }
   ]
});