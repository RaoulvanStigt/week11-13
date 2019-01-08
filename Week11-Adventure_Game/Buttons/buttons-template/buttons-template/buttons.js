var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var teller = [0,0,0]

button1.onclick = button1Clicked;
button2.onclick = button2Clicked;
button3.onclick = button3Clicked;


function button1Clicked(){
    container.className = "container1";
    teller[0]++;
    button1.innerHTML = teller[0];
    imageNumber.src = 'images/1.jpg';
}

function button1Clicked(){
    container.className = "container2";
    teller[1]++;
    button2.innerHTML = teller[1];
    imageNumber.src = 'images/2.jpg';
}

function button1Clicked(){
    container.className = "container3";
    teller[2]++;
    button3.innerHTML = teller[2];
    imageNumber.src = 'images/3.jpg';
}