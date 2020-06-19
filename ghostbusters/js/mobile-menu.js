function open_mobile_menu() {
  if(document.getElementById('overscreen-mobile-menu').style.display === "none")
    document.getElementById('overscreen-mobile-menu').style.display = 'block';
  else document.getElementById('overscreen-mobile-menu').style.display = 'none';
}
function render_menu(){document.getElementById('overscreen-mobile-menu').style.display = 'none'}
