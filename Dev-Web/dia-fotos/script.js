function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")

    var data = new Date()
    var hora = data.getHours()

    hora = 21

    if (hora > 1 && hora <12){
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'fotomanha.png'
    }

    if (hora > 13 && hora <18){
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'fototarde.png'
    }

    if (hora > 18 && hora < 23){
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'fotonoite.png'
    }
    
}