window.onload = function() {


  var element;
  var p;
  var scale = 40;
    
  for (var i = 0; i < 50; ++i) {
    element = document.createElement('div');

    element.style.backgroundColor = 'hsla(' +
      i * 19 + ',' +
      75 + '%, ' +
      i * 2 + '%, 1)';

    p = document.createElement('div');
    p.innerHTML = i;
    element.appendChild(p)
    document.documentElement.appendChild(element);
  }


};
