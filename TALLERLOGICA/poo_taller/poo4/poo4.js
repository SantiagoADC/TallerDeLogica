class figura {
    constructor(){
    }
 calcularArea(valor1 , valor2) {}
}

class circulo extends figura {
    constructor (){    
        super()
    }
    calcularArea(pi, radio){
       let areacirculo = pi * radio
       return areacirculo
    }    
}

class rectangulo extends figura {
    constructor (){
        super()
    }
    calcularArea(base, altura){
        let arearectangulo = base * altura
        return arearectangulo
    }    
}

let rect = new rectangulo ()
let circu = new circulo ()

console.log(circu.calcularArea(3.14, 45))
console.log(rect.calcularArea(3, 4))
