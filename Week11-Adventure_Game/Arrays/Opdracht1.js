var week = [];
week [0] = "maandag";
week [1] = "dinsdag";
week [2] = "woensdag";
week [3] = "donderdag";
week [4] = "vrijdag";
week [5] = "zaterdag";
week [6] = "zondag";

document.write ("Alle dagen van de week zijn: <br>")
for (var i = 0; i <= 6; i++) {
	document.write (week [i])
	document.write ("<br>")
}

document.write ("<br>")

document.write ("De werkdagen zijn: <br>")
for (i = 0; i <= 4; i++) {
	document.write (week [i])
	document.write ("<br>")
}

document.write ("<br>")

document.write ("De weekenddagen zijn: <br>")
for (i = 4; i <= 6; i++) {
	document.write (week [i])
	document.write ("<br>")
}

document.write ("<br>")

document.write ("Alle dagen van de week in omgekeerde volgorde zijn: <br>")
for (i = 6; 0 <= i; i--) {
	document.write (week [i])
	document.write ("<br>")
}

document.write ("<br>")

document.write ("De werkdagen in omgekeerde volgorde zijn: <br>")
for (i = 4; 0 <= i; i--) {
	document.write (week [i])
	document.write ("<br>")
}

document.write ("<br>")

document.write ("De weekenddagen in omgekeerde volgorde zijn: <br>")
for (i = 6; 4 <= i; i--) {
	document.write (week [i])
	document.write ("<br>")
}