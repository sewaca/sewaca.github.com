var imgs = [
  0,
  ['https://i.ibb.co/t8KrrYp/2007.jpg', '2007'],
  ['https://i.ibb.co/y0z4Rzy/2008.jpg', '2008'],
  ['https://i.ibb.co/1d8Ldx3/2009.jpg', '2009'],
  ['https://i.ibb.co/sg9nqjF/2009-2.jpg', '2009'],
  ['https://i.ibb.co/rZmtdhM/2010.jpg', '2010'],
  ['https://i.ibb.co/Zcg50NV/2011.jpg', '2011'],
  ['https://i.ibb.co/0MrKQGJ/2013.jpg', '2013'],
  ['https://i.ibb.co/MsJLL4P/2013-2.jpg', '2013'],
  ['https://i.ibb.co/Qf3LzSC/2014.jpg', '2014'],
  ['https://i.ibb.co/2jhXfH2/2014-2.jpg', '2014'],
  ['https://i.ibb.co/wLKqxNx/2015.jpg', '2015'],
  ['https://i.ibb.co/6b4gvtW/2015-2.jpg', '2015'],
  ['https://i.ibb.co/VVvgC1G/2016.jpg', '2016'],
  ['https://i.ibb.co/XWh7wHn/2016-2.jpg', '2016'],
  ['https://i.ibb.co/J78L9yV/2017.jpg', '2017'],
  ['https://i.ibb.co/QKF06v9/2018.jpg', '2018'],
  ['https://i.ibb.co/PGR1pRH/2019.jpg', '2019'],
  ['https://i.ibb.co/MncVZNR/2019-2.jpg', '2019'],
  ['https://i.ibb.co/Zd3cwgt/2020.jpg', '2020']
];
let min_slide_value = 1;
let max_slide_value = imgs.length - 1;
let cur_slide = min_slide_value;
function slide(a){
  if(a == -1){
    if(cur_slide == 1) cur_slide = max_slide_value;
    else cur_slide -= 1;
  }
  else {
    if(cur_slide == max_slide_value) cur_slide = min_slide_value;
    else cur_slide += 1;
  }
  console.log(imgs[cur_slide]);
  document.getElementById('photog').style.backgroundImage = 'url("'+imgs[cur_slide][0]+'")';
  document.getElementById('photoYearText').innerHTML = imgs[cur_slide][1];
}
