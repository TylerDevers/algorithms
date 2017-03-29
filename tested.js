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

var minutes, seconds;
var audio = new Audio('beep-06.mp3');
var toggle = true;
var beep = true;
var breakMinutes = document.getElementById('break-length');
var workMinutes = document.getElementById('work-length');
var breakSeconds = document.getElementById('break-seconds');
var workSeconds = document.getElementById('work-seconds');

//start click controller
function startMinute() {
	toggle = true;
	minutes = setInterval(minuteTimer, 60000);
}

function startSeconds() {
	toggle = true;
	seconds = setInterval(secondsTimer, 1000);
}

//setInterval helper functions
function minuteTimer() {
	if (workMinutes.innerHTML > 0 && toggle === true) {
		workMinutes.innerHTML --;
	} else if (workMinutes.innerHTML == 0 && breakMinutes.innerHTML > 0 && toggle === true) {
		if (beep === true) {
			audio.play();
		}
		breakMinutes.innerHTML --;
		beep = false;
	} else {
		clearInterval(seconds);
		clearInterval(minutes);
		beep = true;
	}
}

function secondsTimer() {
	if (workSeconds.innerHTML == 0 && toggle === true && workMinutes.innerHTML > 0) {
		workSeconds.innerHTML = 59;
	} else if (workSeconds.innerHTML > 0 && toggle === true) {
		workSeconds.innerHTML --;
	}
}
//break time controllers
function breakDown() {
	toggle = false;
	var value = document.getElementById('break-length');
	if (value.innerHTML > 0){
		value.innerHTML --;
	}
}

function breakUp() {
	toggle = false;
	var value = document.getElementById('break-length');
	value.innerHTML ++;
}

//work time controllers
function workDown() {
	toggle = false;
	var value = document.getElementById('work-length');
	if (value.innerHTML > 0){
		value.innerHTML --;
	}
}

function workUp() {
	toggle = false;
	var value = document.getElementById('work-length');
	value.innerHTML ++;
}


/*
 * break seconds don't work
 * need to take away minute value at start of break/work countdown start.
 * use a timer that shows seconds.
 * hide work when break is counting down and vice versa
 * multiple start button clicks will trigger function multiple times
 */
