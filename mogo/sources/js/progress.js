/*
  Сразу скажу пару слов про реалезацию :
  1. Полностью рабочая версия !
  2. При переносе на сервер просто заполните массив данными ячеек.
  3. Решение максимально оптимизировано (при помощи каскада из if), если
     убрать каскад, то значительных изменений заметно не будет, но тогда
     нужно обязательно заполнять все неначатые шкалы нулями. Версия которая
     реализована сейчас является наиболее удобной и быстрой.
*/
/*var requestURL = 'http://127.0.0.1/';
var xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onload = () => {
  console.log(xhr.response);
};
xhr.onerror = () => {
  console.log(xhr.response);
}

xhr.send();*/

var progress = [5, 1, 0, 0]; // Описание 4 блоков прогресса
function load_progress_of_event(){
  var intro = document.getElementById("intro");
  var work = document.getElementById("work");
  var about = document.getElementById("about");
  var contacts = document.getElementById("contacts");

  intro.value = progress[0];
  if(progress[0] < 5){
    work.style.backgroundColor = "#f7ebc5";
    about.style.backgroundColor = "#f7ebc5";
    contacts.style.backgroundColor = "#f7ebc5";
  }
  else {
    work.value = progress[1];
    if(progress[1] < 5){
      about.style.backgroundColor = "#f7ebc5";
      contacts.style.backgroundColor = "#f7ebc5";
    }
    else {
      about.value = progress[2];
      if(progress[2] < 5){
        contacts.style.backgroundColor = "#f7ebc5";
      }
      else{
        contacts.value = progress[3];
      }
    }
  }
}
// Copyright : Булгаков Всеволод Денисович - +7 919 398 28 32 - sewaca7@gmail.com
