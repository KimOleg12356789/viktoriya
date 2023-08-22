$(document).ready(function(){

   const burger = document.querySelector('.burger');
   const navbar = document.querySelector('.mt-mobile');
   const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


$('.slidss').slick({
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      arrows:false,
                      fade: false,
                      centerMode:true,
                      centerPadding: '150px',
                      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            centerMode:false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            centerMode:false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            centerMode:false,
            centerPadding: '0px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: false,
              arrows:false,
              centerMode:false,
            centerPadding: '0px',
            }
          }
      ]

});

$('.next-arrow').on('click', function() {
  $('.slidss').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.slidss').slick('slickPrev');
});


$('#modul-1').on('click', function (e) {
        $('.modul-1').css('display', 'block');
});

$('.close').on('click', function (e) {
        $('.modul-1').css('display', 'none');
        $('body').css('overflow', 'auto');
});


let formRadiosDesk = document.querySelectorAll('.prise-form--desktop .form-radio');
    let formRadiosMob = document.querySelectorAll('.prise-form--mobile .form-radio');

    if (formRadiosDesk) {
        formRadiosDesk.forEach((radio) => {
            radio.addEventListener('click', (e) => {
                if (e.pointerId !== -1) {
                    const targetElement = e.target;
                    formRadiosDesk.forEach((r) => {
                        r.classList.remove('_active');
                    });

                    radio.classList.add('_active');
                }
            });
        });
    }

    if (formRadiosMob) {
        formRadiosMob.forEach((radio) => {
            radio.addEventListener('click', (e) => {
                if (e.pointerId !== -1) {
                    const targetElement = e.target;
                    formRadiosMob.forEach((r) => {
                        r.classList.remove('_active');
                    });

                    radio.classList.add('_active');
                }
            });
        });
    }


});