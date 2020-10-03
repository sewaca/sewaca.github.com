document.querySelector('a[href="#menu"]').onclick = ()=>{
  document.querySelector('a[href="#menu"] > p').classList.toggle('active');
  document.querySelector('#mainHeader .desctop').classList.toggle('active');
}
window.addEventListener('scroll', ()=>{
  var firstParallax = document.querySelector("#firstscreen > img");
  if(window.scrollY < document.querySelector("#firstscreen").offsetTop)firstParallax.style.top = '0px';
  else firstParallax.style.top = Math.abs(window.scrollY - document.querySelector("#firstscreen").offsetTop)+'px';

  var firstOfferParallax = document.querySelector("body > section:nth-child(4) > article.min > img");
  if(window.scrollY < document.querySelector("body > section:nth-child(4) > article.min").offsetTop) firstOfferParallax.style.top = '0px';
  else firstOfferParallax.style.top = Math.abs(window.scrollY - document.querySelector("body > section:nth-child(4) > article.min").offsetTop)+'px';

  var secondOfferParallax = document.querySelector("body > section.splitBlocks.sec > article.min > img");
  if(window.scrollY < document.querySelector("body > section.splitBlocks.sec > article.min").offsetTop) secondOfferParallax.style.top = '0px';
  else secondOfferParallax.style.top = Math.abs(window.scrollY - document.querySelector("body > section.splitBlocks.sec > article.min").offsetTop)+'px';
})
document.querySelector('#infoF input').onfocus = ()=>{
  if(event.target.value == 'Ваша почта') event.target.value = '';
}
document.querySelector('#infoF input').onblur= ()=>{
  if(event.target.value == '') event.target.value = 'Ваша почта';
}
