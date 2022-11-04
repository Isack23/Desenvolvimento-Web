function calcular() {
    //var txtv = document.querySelector('input#txtvel')
    
    var resultado = document.getElementById('resultado')
    var anoNascimento = Number(document.getElementById('ano').value)
    var data = new Date()

    var idade = data.getFullYear() - anoNascimento
    resultado.innerHTML = `<p>Sua idade atual é <strong>${idade}!</strong></p>`
}