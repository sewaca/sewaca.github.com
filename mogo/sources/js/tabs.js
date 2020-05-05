/*
Реализовано через массив "отображающихся эллементов"
Основная задумка в том, что на функцию передается параметр, обозначающий
  текст под каким номером нажно открыть/закрыть. Для закрытия/открытия используется
  display none/block; чтобы оптимизировать код и сделать его более компактным и понятным
*/
var displaying = [0, 0, 0];
function change_tab(param){
  if(param == 1){
    var tab = document.getElementById('tabN1');
    var text = document.getElementById('scrollTextN1');
    var button_to_up = document.getElementById('upArrow1');
    var button_to_down = document.getElementById('downArrow1');
    var i = 0;
  }
  else if(param == 2){
    var tab = document.getElementById('tabN2');
    var text = document.getElementById('scrollTextN2');
    var button_to_up = document.getElementById('upArrow2');
    var button_to_down = document.getElementById('downArrow2');
    var i = 1;
  }
  else {
    var tab = document.getElementById('tabN3');
    var text = document.getElementById('scrollTextN3');
    var button_to_up = document.getElementById('upArrow3');
    var button_to_down = document.getElementById('downArrow3');
    var i = 2;
  }

  if(displaying[i] == 0){
    text.style.display = 'block';
    button_to_up.style.display = 'none';
    button_to_down.style.display = 'block';
    tab.style.borderBottomRightRadius = '0';
    tab.style.borderBottomLeftRadius = '0';
    displaying[i] = 1;
    //	border-bottom-right-radius: 10px;
    //	border-bottom-left-radius: 10px;
  }
  else {
    text.style.display = 'none';
    button_to_up.style.display = 'block';
    button_to_down.style.display = 'none';
    tab.style.borderBottomRightRadius = '10px';
    tab.style.borderBottomLeftRadius = '10px';
    displaying[i] = 0;
  }
}
