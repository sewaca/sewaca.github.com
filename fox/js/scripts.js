var imgs = [
  0,
  ['./photo_bin/2007.jpg', '2007'],
  ['./photo_bin/2008.jpg', '2008'],
  ['./photo_bin/2009.jpg', '2009'],
  ['./photo_bin/2009_2.jpg', '2009'],
  ['./photo_bin/2010.jpg', '2010'],
  ['./photo_bin/2011.jpg', '2011'],
  ['./photo_bin/2013.jpg', '2013'],
  ['./photo_bin/2013_2.jpg', '2013'],
  ['./photo_bin/2014.jpg', '2014'],
  ['./photo_bin/2014_2.jpg', '2014'],
  ['./photo_bin/2015.jpg', '2015'],
  ['./photo_bin/2015_2.jpg', '2015'],
  ['./photo_bin/2016.jpg', '2016'],
  ['./photo_bin/2016_2.jpg', '2016'],
  ['./photo_bin/2017.jpg', '2017'],
  ['./photo_bin/2018.jpg', '2018'],
  ['./photo_bin/2019.jpg', '2019'],
  ['./photo_bin/2019_2.jpg', '2019'],
  ['./photo_bin/2020.jpg', '2020']
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
