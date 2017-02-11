var now = new Date().getTime();
//console.log(countdown);

//change value of session timer when plus or minus is clicked
function sessionUp() {
	document.getElementById('session-length').innerHTML ++;		
}
function sessionDown() {
	document.getElementById('session-length').innerHTML --;		
}

//change value of break time when plus or minus is clicked
function breakUp() {
	document.getElementById('break-length').innerHTML ++;		
}
function breakDown() {
	document.getElementById('break-length').innerHTML --;		
}
