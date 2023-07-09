var msg = document.getElementById('mensagem')
var img = document.getElementById('imagem')
var img2 = document.getElementById('image2')
var hora_agora = new Date()
var min_agora = new Date()
var hora = hora_agora.getHours()
var minuto = min_agora.getMinutes()

if (hora >= 6 && hora < 12){
    title.innerHTML = "BOM DIA !!"
    document.body.style.backgroundImage = 'linear-gradient(rgb(255, 255, 162), rgb(255, 199, 94))'
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    img.src = 'manhã.png'
    img2.src = 'sol.png'
}
else if (hora >= 12 && hora < 19){
    title.innerHTML = "BOA TARDE."
    document.body.style.backgroundImage = 'linear-gradient(rgb(121, 198, 231), rgb(224, 222, 222))'
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    img.src = 'tarde.png'
    img2.src = 'sol.png'
}
else{
    title.innerHTML = "BOA NOITE."
    document.body.style.backgroundImage = 'linear-gradient(rgb(7, 44, 60), rgb(61, 98, 195))'
    document.body.style.backgroundrepeat = 'no-repeat'
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    img.src = 'noite.png'
    img2.src = 'lua.png'
}