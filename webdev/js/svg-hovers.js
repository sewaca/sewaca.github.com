var paths = document.getElementsByClassName('facebookPath'),
  i = paths.length;
while (i--) {
  paths[i].parentElement.parentElement.parentElement.onmouseover = function() {
    this.children[0].children[0].children[0].setAttribute('fill', '#ffffff')
  }
  paths[i].parentElement.parentElement.parentElement.onmouseleave = function() {
    this.children[0].children[0].children[0].setAttribute('fill', '#00897b')
  }
}

var paths = document.getElementsByClassName('twitterPath'),
  i = paths.length;
while (i--) {
  paths[i].parentElement.parentElement.onmouseover = function() {
    this.children[0].children[0].setAttribute('fill', '#ffffff')
  }
  paths[i].parentElement.parentElement.onmouseleave = function() {
    this.children[0].children[0].setAttribute('fill', '#00897b')
  }
}

var paths = document.getElementsByClassName('wechatPath'),
  i = paths.length;
while (i--) {
  paths[i].parentElement.parentElement.onmouseover = function() {
    this.children[0].children[0].setAttribute('fill', '#ffffff')
  }
  paths[i].parentElement.parentElement.onmouseleave = function() {
    this.children[0].children[0].setAttribute('fill', '#00897b')
  }
}