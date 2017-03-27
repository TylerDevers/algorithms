// note that all prior code is saved within tested.js
/*
var pointer = document.getElementsByClassName('modifier');

pointer.addEventListener("mouseover", function (event) {
	event.target.style.color = "yellow";
}, false);

pointer.addEventListener('mouseleave', function (event) {
	event.target.style.color = 'white';
}, false );
*/

var count;

//start click controller
function start() {
	count = setInterval(timer, 1000);
}

//setInterval helper function
function timer() {
	var breakTime = document.getElementById('break-length');
	var workTime = document.getElementById('work-length');
	if (workTime.innerHTML > 0 ) {
		workTime.innerHTML --;
	} else if (workTime.innerHTML == 0 && breakTime.innerHTML > 0) {
		console.log('work done');
		breakTime.innerHTML --;
	} else {
		clearInterval(count);
		console.log('cleared');
	}
}
//break time controllers
function breakDown() {
		var value = document.getElementById('break-length');
		if (value.innerHTML > 0){
			value.innerHTML --;
		}
}

function breakUp() {
		var value = document.getElementById('break-length');
		value.innerHTML ++;
}

//work time controllers
function workDown() {
	var value = document.getElementById('work-length');
	if (value.innerHTML > 0){
		value.innerHTML --;
	}
}

function workUp() {
	var value = document.getElementById('work-length');
	value.innerHTML ++;
}


/*
 * play a sound when work is done
 * use a timer that shows seconds.
 * hide work when break is counting down and vice versa
 */
