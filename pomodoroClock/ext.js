var controls = true;
var now = new Date().getTime();

function timer() {
	//disable controls when session timer is clicked
	if (controls === true) {
		controls = false;
	} else {
			controls = true;
	}
	console.log(controls);
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

