class Direccion {
constructor (calle, ciudad, codigopostal){
    this.calle = calle
    this.ciudad = ciudad
    this.codigopostal = codigopostal
}
}

class persona{
constructor (direccion){
    this.direccion = direccion
}

}

let calle1 = new Direccion("Av rojas", "Bogota", "123456")
console.log(calle1)
let p1 = new persona(calle1)
console.log(p1)
