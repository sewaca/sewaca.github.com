// Если переключили на актёров
$('#actors_button').on('click', function(){
  // Переключаем кнопки
  $('#creators_button').attr('class', 'disactive');
  $('#actors_button').attr('class', 'active');

  // Показываем блок с актёрами
  $('.actors-content').css('display', 'flex');
  $('.creators-content').css('display', 'none');
});

// Если переключили на создателей
$('#creators_button').on('click', function(){
  // Переключаем кнопки
  $('#creators_button').attr('class', 'active');
  $('#actors_button').attr('class', 'disactive');

  // Показываем блок с создателями
  $('.actors-content').css('display', 'none');
  $('.creators-content').css('display', 'flex');
});
