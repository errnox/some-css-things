var embeddedSVG = document.getElementById('embedded-svg');
var svgDocument = null;

try {
  svgDocument = embeddedSVG.getSVGDocument();
} catch(exception) {
  alert('`getSVGDocument\' not supported.');
}

if (svgDocument && svgDocument.defaultView)  // try the W3C standard way first
  svgWindow = svgDocument.defaultView;
else if (embeddedSVG.window)
  svgWindow = embeddedSVG.window;
else try {
  svgWindow = embeddedSVG.getWindow();
}
catch(exception) {
  alert('The DocumentView interface is not supported\r\n' +
        'Non-W3C methods of obtaining "window" also failed');
}

// var redSquare = svgDocument.getElementById('red-square');
// console.log(redSquare.innerHTML);  // DEBUG
// redSquare.setAttribute('onclick', function() {
//   alert("Click.");
// });
