let button = document.querySelector("button")
let container = document.querySelector("body")
let titulos1 = document.querySelectorAll("h1")
let titulos2 = document.querySelectorAll("h2")
let dia = document.getElementById('dia')
let noite = document.getElementById('noite')
button.addEventListener("click",()=>{
    dia.classList.toggle('hide')
    noite.classList.toggle('hide')
    container.classList.toggle("darkmode")
    titulos1.forEach(element => {
        element.classList.toggle("corh1")
        titulos2.forEach(element => {
            element.classList.toggle("corh2")
         
    })   
})
})