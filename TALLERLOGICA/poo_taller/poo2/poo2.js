class vehiculo {
    marca
    constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo 
}
    arrancar () {
        return `El vehiculo de marca ${this.marca} modelo ${this.modelo} ha arrancado`
    }
    detener (){
        return `El vehiculo de marca ${this.marca} modelo ${this.modelo} ha detenido su marcha`
    }
}

class Coche extends vehiculo {
    constructor(marca, modelo){
        super(marca, modelo)
    }
    acelerar(){
        return `El vehiculo de marca ${this.marca} modelo ${this.modelo} esta acelerando`

    }
}

let print = document.querySelector("#print")
let print2 = document.querySelector("#print2")
let print3 = document.querySelector("#print3")

let x = new Coche("Chevrolet",2023)
print.innerHTML += (x.arrancar())
print2.innerHTML += (x.acelerar())
print3.innerHTML += (x.detener())