let nbr = document.getElementById("nbr")
let getal = 0



function add() {
    getal++
    nbr.innerText = getal
    if(getal == 10) {
        getal = -1
    }
}

console.log(getal)