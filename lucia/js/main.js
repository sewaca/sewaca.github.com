function get(s) {return document.querySelector(s);}
get('#floatingHeader .menu.mobile').onclick = () => {
  get('#floatingHeader .menu.mobile').classList.toggle('active');
  get('#floatingHeader nav').classList.toggle('active');
  get('body').classList.toggle('noscroll');
}
window.addEventListener('scroll', () => {
  // padding-top: 82px;
  // max : 699 : padding-top: 64px;
  // max : 550 : padding-top: 50px;

  if (window.scrollY > 0) {
    get('#floatingHeader').classList.add('floating');
  } else {
    get('#floatingHeader').classList.remove('floating');
  }
})
