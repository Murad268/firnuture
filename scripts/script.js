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