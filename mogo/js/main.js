document.querySelectorAll('ul.tabs li button').forEach((item, i) => {
  item.onclick = ()=>{
    event.path[1].classList.toggle('active');
  }
});
