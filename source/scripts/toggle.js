

// ADD a new function to the array.
var functions = [
	function (arg) {
			if  (arg === undefined) {return null;} 
			return arg.population;
		},
    function (arg) {
			if  (arg === undefined) {return null;}
			return arg.age;
		},
    function (arg) {
			if  (arg === undefined) {return null;}
			return arg.pct_emply;
		},
	function (arg) {
			if  (arg === undefined) {return null;}
			return arg.est;
		},
	function (arg) {
			if  (arg === undefined) {return null;}
			return arg.money;
		},
	function (arg) {
			if  (arg === undefined) {return null;}
			return arg.births;
		},
	function (arg) {
			if  (arg === undefined) {return null;}
			return arg.deaths;
		}
];



// Keys and their functions
// ADD a new key 'listener' and functionality
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key === 82) { // 'r'
	    // Toggle the display of the thresholds.
		toggleThresh = !toggleThresh;
		redraw();
	} else if (key === 49) {
	    // '1'
		// Change the information obtained by the function.
	    getInfo = functions[0];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 10000000;
		
		// Set the bounds on the threshold chart.
		domain_lower = 19; domain_upper = 10000000;
		
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Population';
	} else if (key === 50) { // '2'
	    getInfo = functions[1];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 100;
		
		// Set the bounds on the threshold chart.
		domain_lower = 19; domain_upper = 71;
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Median Age';
	}
	else if (key === 51) { // '3'
	    getInfo = functions[2];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 3;
		
		// Set the bounds on the threshold chart.
		domain_lower = 0.00; domain_upper = 1.0;
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Percentage of Population Employed';
	}
	else if (key === 52) { // '4'
	    getInfo = functions[3];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 10000000;
		
		// Set the bounds on the threshold chart.
		domain_lower = 0.00; domain_upper = 10000000;
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Private nonfarm Establishments';
	}
	else if (key === 53) { // '5'
	    getInfo = functions[4];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 1000000000;
		
		// Set the bounds on the threshold chart.
		domain_lower = 0.00; domain_upper = 1000000000;
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Private nonfarm annual payroll';
	}
	else if (key === 54) { // '6'
	    getInfo = functions[5];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 1000;
		
		// Set the bounds on the threshold chart.
		domain_lower = 0.00; domain_upper = 100;
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Births Per 1000 People';
	}
	else if (key === 55) { // '7'
	    getInfo = functions[6];
		// Set the initial threshold bounds.
		unemp_lower = 0; unemp_upper = 1000;
		
		// Set the bounds on the threshold chart.
		domain_lower = 0.00; domain_upper = 100;
		calculateMaxAndMin();
		redraw();
		document.getElementById('title_text').innerHTML = 'Deaths Per 1000 People';
	}
}


// Calculate the min and max for a given 'getInfo' call
function calculateMaxAndMin () {
    counties.attr("class", function (d) {
		if (rateById.get(min) == null){ min = d.id; }
		if (rateById.get(max) == null) { max = d.id; }
		if ((rateById.get(min) != null) && (rateById.get(d.id) != null)) {
		    if (getInfo(rateById.get(min)) > getInfo(rateById.get(d.id))) { min = d.id; }
		    if (getInfo(rateById.get(max)) < getInfo(rateById.get(d.id))) { max = d.id; }
		}
	});
	//console.log('Max: ' + getInfo(rateById.get(max)) + ' ' +  getInfo(rateById.get(d.id)) + ' ' + (getInfo(rateById.get(d.id)) > getInfo(rateById.get(max))));
	
}

function redraw() {
	if (toggleThresh) {
	    // Turn on the thresholds again.
	    counties.attr("fill", thres_color);
	} else {
		// Turn on all the counties on the maps, regardless of the thresholds.
		counties.attr("fill", getColor);
	}
}

