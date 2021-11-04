// Inizio script con un alert
alert ("Ciao! Per generare la tua password perfetta ti verranno chiesti 3 dati");

// Dichiarazione e assegnazione delle variabili
let nome, cognome, colorePreferito;
    nome = prompt("Inserisci il tuo nome");
    cognome = prompt("Inserisci il tuo cognome");
    colorePreferito = prompt("Inserisci il tuo colore preferito");

// Inizio generazione password
    // Dichiarazione e assegnazione a password i dati da inserire in #titolo
    let password = nome + " " + cognome;
    document.getElementById("utente").innerHTML = password;
    
    // Assegnazione a password gli elementi della password
    password = nome + cognome + colorePreferito;
   
    /* Assegnamo a password un valore numerico (la sua lunghezza) 
    così la password sarà più sicura...*/
    password = password + password.length;

    // Assegnazione alla value di #myInput il valore di password
    document.getElementById("myInput").value = password;


    
// Definizione funzione: myFunction
function myFunction() {
    let x = document.getElementById("myInput");
    let y;

    /* Viene verifica la codizione "x.type === "password"" ogni volta che 
    #show-password verrà cliccato garzie all'attributo "onclick = "myFunction()""*/
    if (x.type === "password") {
      x.type = "text"; // Se di tipo text non ci sarà la censura
      y = document.getElementById("show-password").classList.remove('fa-eye');
      y = document.getElementById("show-password").classList.add('fa-eye-slash');
    } else {
      x.type = "password"; // Per tornare con la censura
      y = document.getElementById("show-password").classList.remove('fa-eye-slash');
      y = document.getElementById("show-password").classList.add('fa-eye')
    }
}