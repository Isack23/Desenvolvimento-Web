
let apelido = prompt('Digite seu nome: ')

amarelo = document.getElementById("yellow")
amarelo.addEventListener("click", btnYellow)

verde = document.getElementById("green")
verde.addEventListener("click", btnGreen)

cinza = document.getElementById("gray")
cinza.addEventListener("click", btnGray)



function btnYellow() {
    var nome = document.querySelector('#nome')
    nome.textContent = apelido

    nome.style.color = 'black'
    nome.style.background = 'yellow'
}

function btnGreen() {
    var nome = document.querySelector('#nome')
    nome.textContent = apelido

    nome.style.color = 'black'
    nome.style.background = 'yellow'
}

function btnGray() {
    var nome = document.querySelector('#nome')
    nome.textContent = apelido

    nome.style.color = 'black'
    nome.style.background = 'yellow'
}