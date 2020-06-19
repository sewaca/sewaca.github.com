// При клике на footer у .film-poster
$('.film-poster').on('click', 'footer', function(){
  $('.modal-with-treiler').css('display', 'flex');
});
// Если нажимаем на кнопку закрытия трейлера
$('.close-modal__button').on('click', function(){
  $('.modal-with-treiler').css('display', 'none');
});
