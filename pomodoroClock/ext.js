/*
 * to-do:
 * include break time into timer, so that it starts as soon as session  
 * time is up.
 * 
 */

var controls = true;
//var now = new Date().getTime();
var count; // will hold setInterval() once timer is triggered

//helper function for setInterval
function countdown() {
	var sessionTime = document.getElementById('session-time').innerHTML;
	var breakTime = document.getElementById('break-time').innerHTML;
	if (sessionTime > 0){
		document.getElementById('session-time').innerHTML --;
		console.log('countdown');
	} else if (sessionTime === 0) {
		clearInterval(count);
	}
}

//triggers when session timer is clicked
function timer() {
	//disable controls when session timer is clicked
	if (controls === true) {
		controls = false;
		count = setInterval(countdown, 1000);
		count;
	} else {
			controls = true;
			clearInterval(count);
			document.getElementById('session-time').innerHTML = document.getElementById('session-length').innerHTML;
	}
	
}


//change value of session length when plus or minus is clicked. Also changes session timer value
function sessionUp() {
	if (controls === true) {
		document.getElementById('session-length').innerHTML ++;	
		document.getElementById('session-time').innerHTML = document.getElementById('session-length').innerHTML;
	}
}
function sessionDown() {
		if (controls === true) {
		document.getElementById('session-length').innerHTML --;		
		document.getElementById('session-time').innerHTML = document.getElementById('session-length').innerHTML;
	}
}

//change value of break time when plus or minus is clicked
function breakUp() {
	if (controls === true) {
		document.getElementById('break-length').innerHTML ++;		
	}
}
function breakDown() {
	if (controls === true) {
		document.getElementById('break-length').innerHTML --;		
	}
}

