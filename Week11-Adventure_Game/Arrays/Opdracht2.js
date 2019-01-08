var namen = [];



var aantal = prompt ("Hoeveel namen wilt u in de array stoppen? (minimaal 3)")

var naam;
for(var i=0; i < aantal; i++){
	naam = prompt("Voer een naam in");
	namen[i]=naam;
}

document.write ("De ingevoerde namen in de array zijn: <br>")


for (var i = 0; i < namen.length; i++) {
	document.write (namen[i] + "<br>")
}

document.write ("<br>")

document.write ("De ingevoerde namen in de array in omgekeerde volgorde zijn: <br>")

for (var i = aantal -1; i >= 0; i--) {
	document.write (namen[i] + "<br>")
}
