class animal {
    constructor(){

    }
   hablar (){

   }
}

class gato extends animal{
    constructor(){
       super ()
    }
    hablar(){
        return "estoy maullando"
    }
}

class perro extends animal{
    constructor () {
        super ()  
    }
    hablar(){
        return "Perro que ladra no muerde"  
    }
}

let perro11 = new perro()
let gato11 = new gato()
console.log(perro11.hablar())
console.log(gato11.hablar())