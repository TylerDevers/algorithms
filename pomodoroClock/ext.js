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
