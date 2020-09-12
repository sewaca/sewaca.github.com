$(document).ready(function(){
  $('.mobile-menu-button').on('click', function(){
    if($('#mobile-menu').hasClass('visiable')){
      $('#mobile-menu').toggleClass('zoomOutUp');
      setTimeout(function(){
        $('#mobile-menu').toggleClass('zoomOutUp');
        $('#mobile-menu').toggleClass('visiable')
      }, 1000);
    }
    else {
      $('#mobile-menu').toggleClass('visiable');
      $('#mobile-menu').toggleClass('zoomInDown');
      setTimeout(function(){
        $('#mobile-menu').toggleClass('zoomInDown');
      }, 1000);
    }
  });
});
