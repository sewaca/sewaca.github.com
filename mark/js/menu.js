function rendermenu(){
  if(document.getElementById('links').style.opacity == 0){
    document.getElementById('links').style.opacity = 1;
    document.getElementById('hamburgerMenuButton').style.borderBottomRightRadius = '0px';
    document.getElementById('hamburgerMenuButton').style.borderBottomLeftRadius = '0px';

  }
  else {
    document.getElementById('links').style.opacity = 0;
    document.getElementById('hamburgerMenuButton').style.borderBottomRightRadius = '10px';
    document.getElementById('hamburgerMenuButton').style.borderBottomLeftRadius = '10px';
  }
}
