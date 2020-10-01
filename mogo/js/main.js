document.querySelectorAll('ul.tabs li button').forEach((item, i) => {
  item.onclick = ()=>{
    event.target.parentElement.classList.toggle('active');
  }
});
var clientsPar, firstScreenParallax;
function setParallaxClients(){
  var a = setInterval(()=>{
    if(document.querySelectorAll('#aboutUs .lazyload').length + document.querySelectorAll('#ourteam .lazyload').length +   document.querySelectorAll('#gallery .lazyload').length == 0){
      var imgrev = document.querySelectorAll('#whatPeopleSay > .paralaxImage');
      clientsPar = new simpleParallax(imgrev, {
        orientation: 'down',
        transition: '0s',
        delay: 0,
        overflow: true,
        scale: 2.4,
      });

      clearInterval(a);
   }
  }, 100);
}
function setFirstScreenParallax(){
  let image = document.querySelector('#firstScreen > .paralaxImage');
  firstScreenParallax = new simpleParallax(image, {
    orientation: 'down',
    overflow: true,
    transition: '0s',
    delay: 0,
    scale: 2.8
  });
}
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    window.scroll(0,0);
  }, 1);

  setFirstScreenParallax();
  setParallaxClients();
})

window.addEventListener('resize', ()=>{
  clientsPar.destroy();
  firstScreenParallax.destroy();
  setTimeout(()=>{
    setParallaxClients();
    setFirstScreenParallax();
  }, 1);
})
document.querySelector('#mainfooter input').oninput = ()=>{
  if ( document.querySelector('#mainfooter input').value.length == 0 ) document.querySelector('#mainfooter input').classList.add('empty');
  else document.querySelector('#mainfooter input').classList.remove('empty');
}
document.querySelector('#mainfooter input').onfocus = ()=>{
  if(document.querySelector('#mainfooter input').value == 'Your Email...')document.querySelector('#mainfooter input').value = '';
}
document.querySelector('#mainfooter input').onblur = ()=>{
  if(document.querySelector('#mainfooter input').value == '')document.querySelector('#mainfooter input').value = 'Your Email...';
}
