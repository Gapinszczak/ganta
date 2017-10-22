var kombisciezka = "1";
var liczbaOsob = 0;

function wpisz()
{
var imieNazwisko = document.getElementById("kto").value;
var kombi = document.getElementById("listaOsob");
var nowaOsoba = document.createElement("option");
liczbaOsob++;
nowaOsoba.text = imieNazwisko;
kombi.add(nowaOsoba);
}

function zadanie()
{	
	var polezzadaniem = document.getElementById('jakiezadanie').value;
	var kanwa = document.getElementById('kanwa');
	var dlugosczadania = document.getElementById('dni').value;
	var zadanieDiv  = document.createElement('div');

	zadanieDiv.style.marginTop = (parseInt(kombisciezka)-1)*40 + "px";
	
	switch(dlugosczadania)
	{
		case "1 Dzień":
			zadanieDiv.style.width = "100px";
			break;
		case "2 Dni":
			zadanieDiv.style.width = "200px";
			break;
		case "3 Dni":
			zadanieDiv.style.width = "300px";
			break;
		case "4 Dni":
			zadanieDiv.style.width = "400px";
			break;
		case "5 Dni":
			zadanieDiv.style.width = "500px";
			break;
	}	
	zadanieDiv.innerHTML = polezzadaniem;
	zadanieDiv.classList.add('obiekt');
	zadanieDiv.onclick = function(){
		alert("Zadanie: "+polezzadaniem+"\n"+"Długość: "+parseInt(zadanieDiv.style.width.substr(0,3))/100+" Dni");
	};
	kanwa.appendChild(zadanieDiv);
}

function funkcjasciezka()
{
	kombisciezka = document.getElementById('sciezka').value;
	var trojkacik = document.getElementById('trojkat');

	trojkacik.style.top = (parseInt(kombisciezka)-1)*40 + "px";
}

function przypiszosobe()
{
	var nazwa = kombisciezka+'osoba';
	var prawakanwa = document.getElementById(nazwa);
	var osobaprzypisywana = document.getElementById('listaOsob').value;
	var osobaDiv = document.createElement('div');


	osobaDiv.classList.add('kolo');
	osobaDiv.title = osobaprzypisywana;
	osobaDiv.onclick = function(){alert("Osoba odpowiedzialna: "+osobaprzypisywana)};
	
	prawakanwa.appendChild(osobaDiv);
}