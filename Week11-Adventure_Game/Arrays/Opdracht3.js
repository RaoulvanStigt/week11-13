var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

for (var i = 0; i <= 9; i++) {
	document.write (arrayEen[i] + '+' + arrayTwee[i] + '= ')
	optellen();
	document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i <= 9; i++) {
	document.write (arrayTwee[i] + '-' + arrayEen[i] + '= ')
	aftrekken();
	document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i <= 9; i++) {
	document.write (arrayEen[i] + 'x' + arrayTwee[i] + '= ')
	vermenigvuldigen();
	document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i <= 9; i++) {
	document.write (arrayTwee[i] + '/' + arrayEen[i] + '= ')
	delenDoor();
	document.write ("<br>")
}


function optellen () {
	document.write (arrayEen[i] + arrayTwee[i])
}

function aftrekken () {
	document.write (arrayTwee[i] - arrayEen[i])
}

function vermenigvuldigen () {
	document.write (arrayEen[i] * arrayTwee[i])
}

function delenDoor () {
	document.write (arrayTwee[i] / arrayEen[i])
}