window.onload = function() {
  // Скролл для всех якорей на странице
  $(function() {
    $("a[href^='#']").click(function() {
      var _href = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(_href).offset().top + "px"
        }, 500 // Скорость прокрутки
      );
      return false;
    });
  });
  // Далее все относится к галерее
  $('.projects-controls').on('click', 'button', false, function() {
    let iM = document.getElementsByClassName('projects-controls')[0].children.length;
    while (iM--) {
      document.getElementsByClassName('projects-controls')[0].children[iM].classList = '';
    }
    this.classList.toggle('active');
    if (this.dataset.href === 'all') {
      display_all();
    } else {
      display_type(this.dataset.href);
    }
  })

}

function display_type(type) {
  document.getElementsByClassName('projects-displayer-to-js')[0].innerHTML = '<style> .proj-items .UI, .proj-items .WEB, .proj-items .MOCKUPS{display: none} .proj-items .' + type + '{display: block}</style>'
}

function display_all() {
  document.getElementsByClassName('projects-displayer-to-js')[0].innerHTML = '';
}
