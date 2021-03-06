function show_modal(text){
  $('.modal-text')[0].innerText = text;

  $('body').toggleClass('no-scroll');

  $('.modal').css('opacity', '0');
  $('.modal').css('display', 'block');

  setTimeout(function(){
    $('.modal').css('opacity', '1');
  }, 1); // Чтобы появилось плавно
}

$(document).ready(function(){

  var projectsSwiper = new Swiper(".project-table", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        // navigation: {
        //   nextEl: ".button-next",
        // },
      },
    },
  });

  $('.close-modal').on('click', function(){
    $('body').toggleClass('no-scroll');
    $('.modal').css('opacity', '0');
    setTimeout(function(){
        $('.modal').css('display', 'none')
    }, 500);
  });

  $('.card').on('click', '.foreground', function(self){
    show_modal(self.target.innerText)
  });

  $('.question-item').on('click', '.question', function(self){
    let elem = self.delegateTarget.lastElementChild;
    if(elem.classList.contains('hidden')){
      elem.classList = 'hidden-text slideInDown'
      self.currentTarget.children[0].classList = 'triangle open';
    }
    else{
      elem.classList = 'hidden-text slideOutUp';
      self.currentTarget.children[0].classList = 'triangle';
      setTimeout(function(){
        elem.classList = 'hidden-text hidden'
      }, 1000);
    }
  });

  var reviewsSwiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
      },
    },
  });
});
