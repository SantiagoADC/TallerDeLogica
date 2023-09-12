let click1 = document.querySelector("#tecla1")
click1.addEventListener("click", () => {
    let tecla1 = new TeclaPiano("assets/nota1.mp3")
    tecla1.reproducir()
})

let click2 = document.querySelector("#tecla2")
click2.addEventListener("click", () => {
    let tecla2 = new TeclaPiano("assets/nota2.mp3")
    tecla2.reproducir()
})

let click3 = document.querySelector("#tecla3")
click3.addEventListener("click", () => {
    let tecla3 = new TeclaPiano("assets/nota3.mp3")
    tecla3.reproducir()
})

let click4 = document.querySelector("#tecla4")
click4.addEventListener("click", () => {
    let tecla4 = new TeclaPiano("assets/nota4.mp3")
    tecla4.reproducir()
})

let click5 = document.querySelector("#tecla5")
click5.addEventListener("click", () => {
    let tecla5 = new TeclaPiano("assets/nota5.mp3")
    tecla5.reproducir()
})

let click6 = document.querySelector("#tecla6")
click6.addEventListener("click", () => {
    let tecla6 = new TeclaPiano("assets/nota6.mp3")
    tecla6.reproducir()
})


let click7 = document.querySelector("#tecla7")
click7.addEventListener("click", () => {
    let tecla7 = new TeclaPiano("assets/nota7.mp3")
    tecla7.reproducir()
})

let click8 = document.querySelector("#tecla8")
click8.addEventListener("click", () => {
    let tecla8 = new TeclaPiano("assets/nota8.mp3")
    tecla8.reproducir()
})


window.addEventListener("keypress", (e) => {
    console.log(e.key)

    switch (e.key) {
        case "a":
            let tecla6 = new TeclaPiano("assets/nota6.mp3")
            tecla6.reproducir()
            break;
        case "s":
            let tecla7 = new TeclaPiano("assets/nota7.mp3")
            tecla7.reproducir()
            break;

        default:
            break;
    }
})


class TeclaPiano {
    constructor(audio) {
        this.audio = audio
    }

    reproducir() {
        const sonido = new Audio(this.audio)
        sonido.play();
    }
}






