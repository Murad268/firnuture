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



document.addEventListener("DOMContentLoaded", () => {
   openMenu(".header__hamburger", '.navbar__menu', 'navbar__menu__active', '.navbar__menu__exit');
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
            arrows: false
         }
      }
   ]
});