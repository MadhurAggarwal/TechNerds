/*Change Background Header*/
function scrollHeader() 
    {const header= document.getElementById('header')
     if(this.scrollY>= 50) header.classList.add('scroll-header');
     /*when scroll more than 50px navbar properties would be changed as defined by scroll header class*/
     else header.classList.remove('scroll-header')
    }
window.addEventListener('scroll', scrollHeader);

/*Swiper Popular Cards*/
/* SIMPLE NAVIGATION STYLE SWIPER
var swiper = new Swiper(".popular__container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
*/
var swiper = new Swiper(".popular__container", {
    spaceBetween: 40,
    loop: true, /*infinite loop*/
    centeredSlides: true,
    slidesPerView: 'auto',
    /*effect: "cards",*/
    
    /*ways to move grab,keyboard,mouse scroll*/
    grabCursor: true,
    keyboard: {
        enabled: true,
      },
    /*mousewheel: true,*/
    /*dots at bottom*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    /*main javascript:*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  /*VALUE ARROW BUTTON*/
  const accordianItems = document.querySelectorAll('.value__accordian-item')
  accordianItems.forEach((item) => 
    {const accordianHeader = item.querySelector('.value__accordian-header')
     accordianHeader.addEventListener('click', () =>
        { const openItem = document.querySelector('.accordian-open')
          toggleItem(item)
          if(openItem && openItem!=item)
              {toggleItem(openItem)
              }
        })
    })

  const toggleItem = (item) =>
    {const accordianContent = item.querySelector('.value__accordian-content')
     
     if(item.classList.contains('accordian-open'))
        {accordianContent.removeAttribute('style')
         item.classList.remove('accordian-open')
        }
     else 
        {accordianContent.style.height = accordianContent.scrollHeight + 'px'
         item.classList.add('accordian-open')
        }    
    }


/*======SCROLL SECTIONS ACTIVE LINKS======*/
const sections = document.querySelectorAll('section[id]');
function scrollActive()
    {const scrollY = window.pageYOffset
     sections.forEach(current => 
        {const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop -58,
               sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
              }
         else 
              {document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')                
              }
        })
    }
    window.addEventListener('scroll', scrollActive)

    /*=====Show scroll up=====*/
    function scrollUp()
      {const scrollUp = document.getElementById('scroll-up')
       if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
       else scrollUp.classList.remove('show-scroll')
      }
    window.addEventListener('scroll', scrollUp)

    /*=====Dark Theme=====*/
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    //previously selected topic(if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon =  localStorage.getItem('selected-icon')

    //we obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

    //we validate if the user previously chose a topic
    if(selectedTheme) 
      {//if the validation is fulfilled we ask what the issue was to know if we activated/deactivated dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
      }

    //Activate/Deactivate the theme manually with button
    themeButton.addEventListener('click', () =>  
        {//add or remove the dark icon/theme
          document.body.classList.toggle(darkTheme)
          themeButton.classList.toggle(iconTheme)
          //we save the theme and the current icon that the user chose
          localStorage.setItem('selected-theme', getCurrentTheme())
          localStorage.setItem('selected-icon', getCurrentIcon())
        })

/*=======scroll reveal==========*/
