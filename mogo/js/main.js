document.querySelectorAll('ul.tabs li button').forEach((item, i) => {
  item.onclick = ()=>{
    event.target.parentElement.classList.toggle('active');
  }
});
var image = document.getElementsByClassName('paralaxImage');
var ints = new simpleParallax(image, {
  orientation: 'down',
  overflow: true,
  transition: '0s',
  delay: 0,
  scale: 2.8
});
