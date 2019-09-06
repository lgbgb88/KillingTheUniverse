let p1 = document.getElementById("vidaPlayerUno");
let p2 = document.getElementById("vidaPlayerDos");

let score1 = 10;
let score2 = 10;

function ataquePlayerUno() {
    if(!score1) {
        alert("Acabaste con un planeta, que verguenza!");
    } else {
        if(!score2) {
            alert("Ya desapareciste, adios!");
        } else {
            score1 -= 1;
            p2.innerHTML = score1 ;
        }
    }
}

function ataquePlayerDos() {
    if(!score2) {
        alert("Felicidades! Destruiste a un meteorito!");
    } else {
        if(!score1) {
            alert("No te preocupes, puedes volver a revivir!");
        } else {
            score2 -= 1;
            p1.innerHTML = score2 ;
        }
    }
}