var links = [
  [1, 'https://facebook.com/', 'https://twitter.com/', 'https://www.pinterest.ru/', 'https://www.instagram.com/'],
  [2, 'https://facebook.com/', 'https://twitter.com/', 'https://www.pinterest.ru/', 'https://www.instagram.com/'],
  [3, 'https://facebook.com/', 'https://twitter.com/', 'https://www.pinterest.ru/', 'https://www.instagram.com/']
];
// Массив links представлен ввиде массива из подмассивов
// Первый элемент подмассива - нуль терминатор, не влияет на работу приложения, может быть любым
// Следующие 4 элемента - ссылки

function render_links(){
  document.getElementById('teammate1link1').href = links[0][1];
  document.getElementById('teammate1link2').href = links[0][2];
  document.getElementById('teammate1link3').href = links[0][3];
  document.getElementById('teammate1link4').href = links[0][4];

  document.getElementById('teammate2link1').href = links[1][1];
  document.getElementById('teammate2link2').href = links[1][2];
  document.getElementById('teammate2link3').href = links[1][3];
  document.getElementById('teammate2link4').href = links[1][4];

  document.getElementById('teammate3link1').href = links[2][1];
  document.getElementById('teammate3link2').href = links[2][2];
  document.getElementById('teammate3link3').href = links[2][3];
  document.getElementById('teammate3link4').href = links[2][4];
}
