let product = document.getElementById("product")
let budget = 100
let prijs = prompt("hoe duur?")
let genoeg = document.getElementById('genoeg')

if(budget > prijs) {
    console.log("ik heb genoeg geld")
    genoeg.innerText = "ik heb genoeg geld"
    genoeg.style.color = "green"
} else {
    console.log("blijven sparen")
    genoeg.innerText = "blijven sparen"
    genoeg.style.color = "red"
}