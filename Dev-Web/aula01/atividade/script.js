var nome = prompt("Digite seu nome: ")
var sexo = prompt("Sexo: ")
var d = document.querySelector('div#msg') 
d.style.background = 'green'
corpo.style.background = 'yellow'

corpo = document.body


if (sexo == "masculino") {
    corpo.style.background = "black"
    document.write(nome)
    nome.style.color = "white"
    
    
}
if (sexo == "feminino") {
    corpo.style.background = "pink"
    document.write(nome)
    corpo.style.color = "black"
}




    



