let premio = document.querySelector("#punto3")



premio.addEventListener("submit", (e) => {
    e.preventDefault()
    let premiacionB = e.target.anos.value
    if ( premiacionB >= 11 && premiacionB <=17){
        alert("No le toca nada") 
        return  
    }    
    if (premiacionB == '') {
        alert("le faltan datos")
        return
    } else if (premiacionB <= 10) {
        alert("Reclame un jugazo")
    } else if (premiacionB >= 18) {
        alert("Vaya por su pola")
    }
    let premiacionC = e.target.genero.value
    if (premiacionC == "Hombre") {
        alert("Ve por tu pizza 3 carnes")
    } else if (premiacionC == "Mujer")
        alert("Ve por tu pizza hawaiana")
})



