//De keuzes die je kan maken in de game
var keuze1 = document.getElementById('keuze1');
var keuze2 = document.getElementById('keuze2');
var keuze3 = document.getElementById('keuze3');

//Container(achtergrond) + beschrijving
var container = document.getElementById("container");
var description = document.getElementById("description");

//PNG afbeeldingen
var item = document.getElementById ("inventoryItem");
var weapon = document.getElementById ("inventoryWeapon");
var pistol = document.getElementById ("inventoryPistol");
var deur = document.getElementById ("deur");
	//Spullen in de truck
	var bank = document.getElementById ("bank");
	var stoelen = document.getElementById ("stoelen")
	var ton = document.getElementById ("ton")

//Inventory van speler
var inventory = [];


//Start de game
startGame();

function startGame () {
	container.className = "container-level0";
	title.innerHTML = 'Prison Break';
	description.innerHTML = 'Je zit in de gevangenis. <br> Je kreeg levenslang voor een drievoudige moord in februari 2003. <br>Je zit al een tijdje in de gevangenis en je bent het zat en wil ontsnappen. <br> In deze game probeer jij te ontsnappen uit de gevangenis. <br><br> Druk op <a>START </a> om te beginnen'
	keuze1.onclick = level1;
	keuze1.innerHTML = 'Start'
	keuze2.style.display = 'none';
	keuze3.style.display = 'none';
	item.style.display = 'none';
	weapon.style.display = 'none';
	pistol.style.display = 'none';
	deur.style.display = 'none';
	bank.style.display = 'none';
	stoelen.style.display = 'none';
	ton.style.display = 'none';
}

//Alle levels
function level1(){
	container.className = "container-level1";
	description.innerHTML = 'Zoek de sleutel om uit je cel te komen'; 
	keuze1.innerHTML = 'Ga verder';
	item.style.display = 'block';
	item.onclick = pickUpKey;	
}

function level1_1(){
	container.className = "container-levelKey"
	description.innerHTML = 'Je hebt de sleutel gevonden'
	keuze1.onclick = level2;
}

function level2(){
	container.className = 'container-level2';
	item.style.display = 'none';
	weapon.style.display = 'inline-block';
	description.innerHTML = 'Er komt een bewaker richting jou cel lopen. Wat doe je?';
	keuze1.innerHTML = 'Terug';
	keuze1.onclick = levelDood1;
	weapon.onclick = bossFight;
}


function level3(){
	container.className = 'container-level3';
	description.innerHTML = 'Je loopt een trap af en je komt in een gang, je kan naar links of naar rechts. Wat doe je?';
	weapon.style.display = 'none';
	keuze2.style.display = 'inline-block'
	keuze1.innerHTML = 'Links';
	keuze2.innerHTML = 'Rechts';
	keuze1.onclick = level4;
	keuze2.onclick = level5_2;
}

function level4 () {
	container.className = 'container-level4';
	description.innerHTML = 'ONEE, er staan 3 bewapende mannen! Ze lopen op je af! Je kan niet meer terug! Ga je ze aanvallen of probeer je er langs te rennen?';
	keuze1.innerHTML = 'Schieten'
	keuze2.innerHTML = 'Sprint'
	keuze1.onclick = level5
	keuze2.onclick = levelDood2
}

function level5 () {
	container.className = 'container-level5';
	description.innerHTML = 'Je schiet de 3 bewapende mannen neer! Je kan door lopen. Je komt een deur tegen naar het buiten verblijf.';
	keuze1.style.display = 'none';
	keuze2.style.display = 'none';
	deur.style.display = 'inline-block'
	deur.onclick = level6
}

function level5_2 () {
	container.className = 'container-level5_2';
	description.innerHTML = 'Je loopt door. Je komt een deur tegen naar het buiten verblijf.';
	keuze1.style.display = 'none';
	keuze2.style.display = 'none';
	deur.style.display = 'inline-block'
	deur.onclick = level6
}

function level6 () {
	container.className = 'container-level6';
	deur.style.display = 'none'
	description.innerHTML = 'Je bent buiten gekomen, waar ga je verstoppen?';
	keuze1.style.display = 'inline-block'
	keuze2.style.display = 'inline-block'
	keuze3.style.display = 'inline-block'
	keuze1.innerHTML = 'In de truck'
	keuze2.innerHTML = 'Onder de truck'
	keuze3.innerHTML = 'In de waskar'
	keuze1.onclick = level7
	keuze2.onclick = level7_2
	keuze3.onclick = level7_3
}

function level7() {
	container.className = 'container-level7'
	description.innerHTML = 'Je hebt besloten om in de truck te gaan zitten. Je ziet een aantal meubels. Klik op een van de meubels om er achter te gaan zitten.'
	keuze1.style.display = 'none'
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	bank.style.display = 'inline-block'
	stoelen.style.display = 'inline-block'
	ton.style.display = 'inline-block'
	bank.onclick = hideAchterBank
	stoelen.onclick = hideAchterStoelen
	ton.onclick = hideAchterTon
}

function level7_2() {
	container.className = 'container-level7_2'
	description.innerHTML = 'Je hebt besloten om onder de truck te gaan zitten.'
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	keuze1.innerHTML = 'Ga verder'
	keuze1.onclick = levelDood3

}

function level7_3() {
	container.className = 'container-level7_3'
	description.innerHTML = 'Je hebt besloten om in de waskar te zitten. Je voelt de kar bewegen! Er worden kleren weggehaald!'
	keuze1.innerHTML = 'Ga verder'
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	keuze1.onclick = levelDood5
}

function level8 () {
	container.className = 'container-level8'
	description.innerHTML = 'Er is een controle!'
	keuze1.onclick = level9
}

function level9(){
	container.className = 'container-level9'
	description.innerHTML = 'Hij ziet je niet! Je bent veilig!'
	keuze1.onclick = level10
}

function level10(){
	container.className = 'container-level10'
	description.innerHTML = 'JE HEBT HET GEHAALD! JE BENT UIT DE GEVANGENIS!'
	title.innerHTML = 'VICTORY'
	keuze1.innerHTML = 'Opnieuw Beginnen'
	keuze1.onclick = startGame
}










//Hide Levels
function hideAchterBank(){
	container.className = 'container-levelhideAchterBank'
	description.innerHTML = 'Je zit achter de bank!'
	bank.style.display = 'none'
	stoelen.style.display = 'none'
	ton.style.display = 'none'
	keuze1.style.display= 'inline-block'
	keuze1.innerHTML = 'Ga verder'
	keuze1.onclick = level8
}

function hideAchterStoelen(){
	container.className = 'container-levelhideAchterStoelen'
	description.innerHTML = 'Je zit achter de stoelen!'
	bank.style.display = 'none'
	stoelen.style.display = 'none'
	ton.style.display = 'none'
	keuze1.style.display= 'inline-block'
	keuze1.innerHTML = 'Ga verder'
	keuze1.onclick = level8
}

function hideAchterTon(){
	container.className = 'container-levelhideAchterTon'
	description.innerHTML = 'Je zit achter de Ton! '
	bank.style.display = 'none'
	stoelen.style.display = 'none'
	ton.style.display = 'none'
	keuze1.style.display= 'inline-block'
	keuze1.innerHTML = 'Ga verder'
	keuze1.onclick = levelDood4

}







//GAME OVER LEVELS
function levelDood1() {
	container.className = 'container-levelDood1';
	title.innerHTML = 'GAME OVER';
	description.innerHTML = 'Je celdeur stond nog open!';
	keuze1.innerHTML = 'Restart';
	keuze1.onclick = startGame;
	keuze2.style.display = 'none';
	weapon.style.display = 'none';
}

function levelDood2() {
	container.className = 'container-levelDood2';
	title.innerHTML = 'GAME OVER';
	description.innerHTML = 'De derde man schiet je neer met een pistool!';
	keuze1.innerHTML = 'Restart';
	keuze1.onclick = startGame;
	keuze2.style.display = 'none';
}

function levelDood3 () {
	container.className = 'container-levelDood3'
	title.innerHTML = 'GAME OVER';
	keuze1.innerHTML = 'Restart';
	keuze1.onclick = startGame;
	keuze2.style.display = 'none';
	keuze3.style.display = 'none';
	description.innerHTML = 'Er is een controle er kijkt een agent onder de truck! <br> Hij ziet je! <br> Hij pakt zijn pistool en richt op je! Je geeft je over. Je gaat de isoleercel in!'
}



function levelDood4 () {
	title.innerHTML = 'GAME OVER';
	keuze1.innerHTML = 'Restart';
	keuze1.onclick = startGame;
	keuze2.style.display = 'none';
	keuze3.style.display = 'none';
	description.innerHTML = 'Er is een controle er kijkt een agent in de truck! <br> Hij ziet je! <br> Hij pakt zijn pistool en richt op je! Je geeft je over. Je gaat de isoleercel in!'
}

function levelDood5 () {
	container.className = 'container-levelDood5'
	title.innerHTML = 'GAME OVER';
	keuze1.innerHTML = 'Restart';
	keuze1.onclick = startGame;
	keuze2.style.display = 'none';
	keuze3.style.display = 'none';
	description.innerHTML = 'Er kijkt een agent in de waskar! <br> Hij ziet je! <br> Hij pakt zijn pistool en richt op je! Je geeft je over. Je gaat de isoleercel in!'
}








//Agent fight
function levelSlaan() {
	container.className = 'container-levelSlaan';
	description.innerHTML = 'Je hebt de agent geslagen hij gaat neer. Pak zijn wapen. en ga verder';
	keuze1.style.display = 'none';
	keuze2.style.display = 'none';
	pistol.style.display = 'block'
	pistol.onclick = pickUpPistol;
	
}

function levelSchoppen() {
	container.className = 'container-levelSchoppen';
	description.innerHTML = 'Je hebt de agent geschopt met een gekke ninja trap hij gaat neer. Pak zijn wapen. en ga verder';
	keuze1.style.display = 'none';
	keuze2.style.display = 'none';
	pistol.style.display = 'block';
	pistol.onclick = pickUpPistol;
}



//Items + BossFight
function pickUpKey(){
	item.style.display = 'none';
	inventory['key']=true;
	if(inventory['key'] != null) {
		keuze1.onclick = level1_1;
	}
}

function pickUpPistol(){
	container.className = 'container-levelPistol'
	pistol.style.display = 'none';
	inventory['pistol']=true;
	if(inventory['pistol'] != null) {
		keuze1.style.display = 'inline-block';
		keuze1.innerHTML = 'Ga verder';
		keuze1.onclick = level3;
	}
}

function bossFight(){	
	weapon.style.display = 'none';
	description.innerHTML = 'Je gaat vechten met de agent! Wat doe je?';
	inventory['weapon']=true;
	if(inventory['weapon'] != null) {
		container.className = 'container-levelWeapon';
		keuze1.style.display = 'inline-block';
		keuze2.style.display = 'inline-block';
		keuze1.innerHTML = 'Slaan';
		keuze2.innerHTML = 'Schoppen';
		keuze1.onclick = levelSlaan;
		keuze2.onclick = levelSchoppen;
	}
}