window.addEventListener("load", function(e) {
    reservedWords = {
	"green": "highlightedGreen",
	"red": "highlightedRed",
	"grey": "highlightedGrey"
    };

    function getByClass(className, parent) {
	parent || (parent = document)
	var descendants = parent.getElementsByTagName('*');
	var i = 0;
	var e;
	var result = [];

	while (e = descendants[i++]) {
	    ((" " + (e['class'] || e.className) + " ").indexOf(
		" " + className + " ") > -1) && result.push(e);

	}
    }
    console.log("Working correctly");

    if ("getElementsByTagName" in document) {
	// var table = document.getByClass("table");
	var table = getByClass("table");
	var rows = document.getElementsByTagName("tr");

	for (i = 0; i < rows.length; i++) {
	    rows[i].className = i % 2 ? "evenTableRow" : "oddTableRow";
	    for (rw = 0; rw < Object.keys(reservedWords).length; rw++) {
		// if (rows[i].cells[0].innerHTML == reservedWords[rw]) {
		if (rows[i].cells[0].innerHTML == Object.keys(reservedWords)[rw]) {
		    rows[i].cells[0].innerHTML += "&#9733";
		    // rows[i].cells[0].className = "highlighted";
		    rows[i].cells[0].className = reservedWords[Object.keys(reservedWords)[rw]];
		}
	    }
	}
    }

}, false);
