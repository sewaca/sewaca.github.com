// presettings
class SNumeric{
  focused = null;
  ignoreClass = 'notSNumeric';
  preSettings( s ){
    if(s.ignore) this.ignoreClass = s.ignore;
    this.oninput = s.oninput;
    this.onblur = s.onblur;
    this.onfocus = s.onfocus;
    this.onclick = s.onclick;
    if(s.placeholder != undefined) this.placeholder = s.placeholder;
  }
  getAll( s ){ return document.querySelectorAll(s); }
  numCheck(s){
    s = (s.match(/[-\d]/g) || '');
    if(s.length == 0) s = '';
    else s = s.join('');
    return s;
  }
  increase( item ){
    let val = +(this.numCheck(item.value) || '0');
    let step = +(item.dataset.step || '1');
    val += step;
    if(item.dataset.max) val = Math.min(+item.dataset.max, val);
    item.value = val;
  }
  decrease( item ){
    let val = +(this.numCheck(item.value) || '0');
    let step = +(item.dataset.step || '1');
    val = val - step;
    if(item.dataset.min) val = Math.max(+item.dataset.min, val);
    item.value = val;
  }
  constructor( options = {} ){
    HTMLElement.prototype.on = function(l, f){this.addEventListener(l, f);}
    NodeList.prototype.each = NodeList.prototype.forEach;
    this.preSettings(options);
    this.getAll(`input[type=number]:not(.${this.ignoreClass})`).each((item, i) => {
      let input    = document.createElement('input'),
          settings = {
            max:  +(item.max || ''),
            min:  +(item.min || ''),
            step: +(item.step || 1),
            css:  item.style.cssText,
            readOnly: item.readOnly,
            firstVal: (item.value || ''),
          };
      input.classList.value = item.classList.value;
      input.classList.add('sNumeric');
      if(settings.readOnly) input.readOnly = true;
      input.value = settings.firstVal;
      if(!this.placeholder) input.placeholder = (item.placeholder || '');
      else input.placeholder = this.placeholder;
      if(item.max) input.dataset.max = +item.max;
      if(item.min) input.dataset.min = +item.min;
      input.dataset.step = (item.step || 1);
      if(item.style.cssText) input.style.cssText = item.style.cssText;
      item.replaceWith(input);
      var thisclass = this;
      input.on('focus', ()=>{
        this.focused = input;
        (thisclass.onfocus || function(){})();
      })
      input.on('blur', ()=>{
        this.focused = null;
        (thisclass.onblur || function(){})();
      })
      if(!settings.readOnly){
        input.on('keydown', function( e ){
          if(e.key == 'ArrowDown') thisclass.decrease(input);
          if(e.key == 'ArrowUp') thisclass.increase(input);
        });
        input.on('input', function( e ){
          input.value = thisclass.numCheck(this.value);
          (thisclass.oninput || function(){})();
        })
      } else {
        input.on('input', function( e ){
          input.value = settings.firstVal;
          (thisclass.oninput || function(){})();
        })
        input.on('focus', ()=>{
          input.blur();
          (thisclass.onfocus || function(){})();
        })
      }
      input.on('click', function( e ){
        (thisclass.onclick || function(){})();
      })
    });
  }
}
