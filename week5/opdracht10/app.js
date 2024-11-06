let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let answ = document.getElementById("answ")

function add() {
    let product = Number(num1.value) + Number(num2.value)
    answ.innerText = product
}
function min() {
    let product = num1.value - num2.value
    answ.innerText = product
}
function multi() {
    let product = num1.value * num2.value
    answ.innerText = product
}
function devi() {
    let product = num1.value / num2.value
    answ.innerText = product
}

