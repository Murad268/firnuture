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
   })
   close.addEventListener("click", () => {
      overlay.classList.remove(activeClass);
      sr.classList.remove(srActive);
   })
}


document.addEventListener("DOMContentLoaded", () => {
   openMenu(".header__hamburger", '.navbar__menu', 'navbar__menu__active', '.navbar__menu__exit');
   searchVisible(".header__top__left__search", '.overlay', '.header__sr__exit', 'overlay__active', '.header__sr', 'header__sr__active');
   searchVisible(".header__top__left__search__right", '.overlay', '.header__sr__exit', 'overlay__active', '.header__sr', 'header__sr__active')
   checkCheckbox(".productsPage__filter__list input", 'active');
   // subSort('.main__sort', ".sub__menu");
   // subSort('.sortMini', ".sortMini .sub__menu");
   // subSort('.catMini', ".catMini .sub__menu");
   
   // subSort('.colMini', ".colMini .sub__menu");
   changeAcc(".accountPage__nav__link__personal", ".accountPage__nav__wish", ".accountPage__settings", ".accountPage__wishlist")
})


function changeAcc(account, wish, sett, wlist) {
   const accPage = document.querySelector(account),
         wishPage = document.querySelector(wish),
         settings = document.querySelector(sett),
         wishList = document.querySelector(wlist);

   accPage.addEventListener("click", (e) => {
      settings.style.display = "block";
      wishList.style.display = "none";
   })
   wishPage.addEventListener("click", () => {
      settings.style.display = "none";
      wishList.style.display = "block";
   })
}

function subSort(mainSelector, subMenuSelector) {
   const main = document.querySelector(mainSelector),
         subMenu = document.querySelector(subMenuSelector);
         main.addEventListener('click', (e) => {
            main.querySelector("i")?.classList.toggle("active");
            subMenu.classList.toggle("active")
            e.target.classList.toggle("active")
            const marginBottom = parseInt(main.style.marginBottom, 10);

            if (marginBottom === subMenu.clientHeight) {
         
            main.style.marginBottom = '10px';
            } else {
            
            main.style.marginBottom = subMenu.clientHeight + 'px';
            }
            
         })
}






$('.productPage__carusel__main').slick({
   infinite: true,
   slidesToShow: 1,
   arrows: false,
   slidesToScroll: 1, 
   asNavFor: '.productPage__carusel__mini__inner'
});
$('.productPage__carusel__mini__inner').slick({
   infinite: true,
   slidesToShow: 3,
   arrows: false,
   slidesToScroll: 1, 
   asNavFor: '.productPage__carusel__main',
   responsive: [{
      breakpoint: 1100,
      settings: {
         slidesToShow: 5,
         arrows: false
      }
   },
   {
      breakpoint: 670,
      settings: {
         slidesToShow: 4,
         arrows: false
      }
   },
   {
      breakpoint: 400,
      settings: {
         slidesToShow: 3,
         arrows: false
      }
   }
   
]
});


$('.categories__wrapper').slick({
   infinite: true,
   slidesToShow: 4,
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

$('.popular__wrapper').slick({
   infinite: true,
   slidesToShow: 4,
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
$('.collections__wrapper').slick({
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


if(window.innerWidth<992) {
   $('.products__wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 568,
         settings: {
           dots: true,
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
      ]
    });
}
$('.smiliarProducts__wrapper').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows: false,
   dots: false,
   responsive: [
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1
       }
     },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 568,
      settings: {
       
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
 });

function checkCheckbox(checkBoxTriggers, activeClass) {
   const triggers = document.querySelectorAll(checkBoxTriggers);
   triggers.forEach(trigger => {
      trigger.addEventListener("change", (e) => {
         e.target.classList.toggle(activeClass);
         console.log(e.target)
      })
   })
}

