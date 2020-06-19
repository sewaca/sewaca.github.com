var width = document.body.clientWidth,
    height = document.body.clientHeight;

// Определяем сколько новостей отображается в линию
if(width <= 1305){document.getElementById('newsGrid').dataset.inOneLine = 3;}
else {document.getElementById('newsGrid').dataset.inOneLine = 4;}
if(width <= 970){document.getElementById('newsGrid').dataset.inOneLine = 2;}
if(width <= 650){document.getElementById('newsGrid').dataset.inOneLine = 1;}

let news_in_line = document.getElementById('newsGrid').getAttribute('data-in-one-line');
// Для удобства создадим массив с селекторами всех новостей
let news = [
  $('#e1'),
  $('#e2'),
  $('#e3'),
  $('#e4')
];
// самая левая и самая правая отображаемая новость
let left_post = 0, right_post = news_in_line - 1;

// Проверяем нужны ли кнопки
function render_controls(){
  // Проверяем нужна ли стрелка "влево"
  if(left_post != 0){ $('.left-arrow-control').css('display', 'block') }
  else { $('.left-arrow-control').css('display', 'none')}
  // Проверяем нужна ли стрелка "вправо"
  if(right_post != news.length - 1){ $('.right-arrow-control').css('display', 'block') }
  else{ $('.right-arrow-control').css('display', 'none') }
}

// Функции "следующего слайда"
function turn_left(){
  news[left_post-1].css('display', 'block');

  // Анимация появления и отключения отображения
  news[left_post-1].addClass('fadeInLeft');
  news[right_post].addClass('fadeOutRight');

  setTimeout(function(){
    news[left_post-1].removeClass('fadeInLeft');
    news[right_post].removeClass('fadeOutRight');

    news[right_post].css('display', 'none');

    left_post--;
    right_post--;
    // Проверим нужны ли теперь кнопки
    render_controls();
  }, 1000); // Через одну секунду нужно удалить классы анимации

}
function turn_right(){
  news[right_post+1].css('display', 'block');

  // Анимация появления и отключения отображения
  news[left_post].addClass('fadeOutLeft');
  news[right_post+1].addClass('fadeInRight');
  // Через одну секунду нужно удалить классы анимации
  setTimeout(function(){
    news[right_post+1].removeClass('fadeInRight');
    news[left_post].removeClass('fadeOutLeft');

    news[left_post].css('display', 'none');
    left_post++;
    right_post++;
    render_controls(); // Проверим нужны ли теперь кнопки
  }, 1000);
}

// Когда новости загрузились
$('content-grid').ready(function(){
  for (var i = news.length - 1; i >= news_in_line; i--) {
    // Отключаем отображение лишних новостей
    news[i].css('display', 'none');
  }
  // Показываем кнопки, если они нужны
  render_controls();
});

// При нажатии на одну из кнопок выполняется соответствующая функция
$('.right-arrow-control').on('click', function(){
  turn_right();
});
$('.left-arrow-control').on('click', function(){
  turn_left();
});
