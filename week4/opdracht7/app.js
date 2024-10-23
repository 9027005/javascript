let budget = 100
let prijs = 60
let price = document.getElementById("price")
let geld = document.getElementById("geld")
let genoeg = document.getElementById("genoeg")

price.innerText = prijs
geld.innerText = budget

function kopen() {
    
}

if(budget > prijs) {
    console.log("ik heb genoeg geld")
    genoeg.innerText = "ik heb genoeg geld"
    genoeg.style.color = "green"
} else {
    console.log("blijven sparen")
    genoeg.innerText = "blijven sparen"
    genoeg.style.color = "red"
}