// 1. seleziono i bottoni
var btnGenera = document.getElementById("genera");
var btnAnnulla =  document.getElementById("annulla");

// 2. al click del bottone genera
btnGenera.addEventListener("click", 
	function() {
		// tutta la logica di generazione del biglietto

		// 1. prendo i valori dei campi input e select
		var nome = document.getElementById("nome").value;
		var km = parseInt(document.getElementById("km").value);
		var fasciaEta = document.getElementById("fascia").value;

		if ( nome != "" && !isNaN(km) && km > 0 && fasciaEta != "" ) {
			// 2. calcolo il prezzo in base alla fascia d'eta
			var prezzo = km * 0.21;
			var tipoOfferta = "Biglietto Standard";

			if ( fasciaEta == "minorenne" ) {
				// prezzo biglietto - 20%
				prezzo = prezzo - (prezzo * 0.2);
				tipoOfferta = "Sconto Minorenne";
			} else if ( fasciaEta == "over" ) {
				//prezzo biglietto - 40%
				prezzo = prezzo - (prezzo * 0.4);
				tipoOfferta = "Sconto Silver";
			}
			// arrotondo a 2 decimali
			prezzo = prezzo.toFixed(2);
			// 3. stampo tutti i dati nel div del biglietto
			document.getElementById("nome-passeggero").innerHTML = nome;
			document.getElementById("tipo-offerta").innerHTML = tipoOfferta;
			document.getElementById("totale").innerHTML = prezzo + " $";
			document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;
			document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * (99999 - 90000) ) + 90000;
			// mostro il biglietto
			document.getElementById("biglietto").classList.add("open");
		} else {
			alert("Errore!");
		}
	}
);

//3. al click del bottone annulla
btnAnnulla.addEventListener("click", 
	function() {
		// nascondo il biglietto
		document.getElementById("biglietto").classList.remove("open");

		// reset tutti i campi input
		document.getElementById("nome").value = "";
		document.getElementById("km").value = "";
		document.getElementById("fascia").selectedIndex = "0";
	}
);
