let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let answ = document.getElementById("answ")

function add() {
    if (num1.value>0&&num2.value>0) {
        let product = Number(num1.value) + Number(num2.value)
        answ.innerText = product
    } else {
        answ.innerText = "getal is te laag"
    }
}
function min() {
    if (num1.value>0&&num2.value>0) {
        let product = num1.value - num2.value
        answ.innerText = product
    } else {
        answ.innerText = "getal is te laag"
    }
}
function multi() {
    if (num1.value>0&&num2.value>0) {
        let product = num1.value * num2.value
        answ.innerText = product
    } else {
        answ.innerText = "getal is te laag"
    }
}
function devi() {
    if (num1.value>0&&num2.value>0) {
        let product = num1.value / num2.value
        answ.innerText = product
    } else {
        answ.innerText = "getal is te laag"
    }
}

