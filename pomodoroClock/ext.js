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

//start click controller
function startMinute() {
	toggle = true;
	
	minute = setInterval(minuteTimer, 60m000);
}

function startSeconds() {
	toggle = true;
	seconds = setInterval(secondsTimer, 1000);
}

//setInterval helper functions
function minuteTimer() {
	var breakTime = document.getElementById('break-length');
	var workTime = document.getElementById('work-length');
	if (workTime.innerHTML > 0 && toggle === true) {
		workTime.innerHTML --;
	} else if (workTime.innerHTML == 0 && breakTime.innerHTML > 0 && toggle === true) {
		if (beep === true) {
			audio.play();
		}
		breakTime.innerHTML --;
		beep = false;
	} else {
		clearInterval(seconds);
		clearInterval(minute);
		beep = true;
	}
}

function secondsTimer() {
	var breakTime = document.getElementById('break-seconds');
	var workTime = document.getElementById('work-seconds');
	if (workTime.innerHTML == 0 && toggle === true) {
		workTime.innerHTML = 59;
	} else if (workTime.innerHTML > 0 && toggle === true) {
		workTime.innerHTML --;
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
 * use a timer that shows seconds.
 * hide work when break is counting down and vice versa
 * multiple start button clicks will trigger function multiple times
 */
