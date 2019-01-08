Arraytafel= [1,3,5];


function tafel(getal){
	for(var i=1; i<=10;i++){
		document.write(i + ' x ' + getal + ' = ' + i * getal + '<br>');
	}
	document.write('<br>');
}


for (var i =0; i <= Arraytafel.length-1; i++) {
	tafel(Arraytafel[i]);
}

