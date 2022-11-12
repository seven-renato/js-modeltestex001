function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let year = document.getElementById("year")
    let res = document.getElementById("res")
    if (year.value.length == 0 || year.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(year.value)
        let genero = ""
        let img = document.createElement("img") // Criou um img
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "hcrianca.jpg")
            } else if (idade < 21 ) {
                img.setAttribute("src", "hjovem.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "hadulto.jpg")
            } else {
                img.setAttribute("src", "velho.jpg")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "mcrianca.jpg")
            } else if (idade < 21 ) {
                img.setAttribute("src", "mjovem.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "madulta.jpg")
            } else {
                img.setAttribute("src", "velha.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // Adicionar objetos DOM
    }
}