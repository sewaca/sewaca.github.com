  document.querySelector('.mobile-menu-button').onclick = () => {
    var menu = document.querySelector('#mobile-menu');
    if (menu.classList.value.indexOf('visiable') != -1) {
      menu.classList.toggle('zoomOutUp');
      setTimeout(function() {
        menu.classList.toggle('zoomOutUp');
        menu.classList.toggle('visiable')
      }, 500);
    } else {
      menu.classList.toggle('visiable');
      menu.classList.toggle('zoomInDown')
      setTimeout(function() {
        menu.classList.toggle('zoomInDown');
      }, 500);
    }
  };
