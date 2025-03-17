let hours = 0;
let minutes = 0;
let seconds = 0;
let time = new Date();

console.log(time);

setInterval(function () {
	time = new Date();
	seconds = time.getSeconds() * 6;
	minutes = time.getMinutes() * 6;
	hours = time.getHours() * 30 + Math.round(minutes / 12);

	document.getElementById("second-hand").style.transform =
		"rotate(" + seconds + "deg)";

	document.getElementById("minute-hand").style.transform =
		"rotate(" + minutes + " deg)";

	document.getElementById("hour-hand").style.transform =
		"rotate(" + hours + "deg )";
}, 1000);
