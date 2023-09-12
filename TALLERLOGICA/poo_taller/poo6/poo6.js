let print = document.querySelector("#print")


class CuentaBancaria {
    constructor(saldo){
         this.saldo = saldo
    }
    Depositar (valor){
        if (valor > 0){
        this.saldo +=  valor
        console.log(`Deposito finalizado correctamente, el saldo actual es: ${this.saldo}`) }
        else { 
        console.log("El valor de deposito debe ser mayor a 0")
        }
    }
    Retirar (valor) {
      try {
        if (valor <= 0) {
            throw new Error("El valor a retirar debe ser mayor a 0");    
        }
        else if (valor > this.saldo) {
            throw new Error("Fondos insuficientes");
        }

        this.saldo -=  valor
         console.log(`Retiro efectuado. Su saldo actual es ${this.saldo}`)
      } catch(error) {
        console.error(error.message)
      }
    }
    Retirar2 (value) {
        if (value <=0) {
            console.log ("el valor debe ser mayor a 0")            
        } else if (value > this.saldo) {
            console.log("Fondos insuficientes")
        } else { 
        this.saldo -=  value
         console.log(`Retiro efectuado. Su saldo actual es ${this.saldo}`)
        }
    }

}   

let valorsaldo = new CuentaBancaria(10000)

valorsaldo.Depositar(7000)
valorsaldo.Retirar2(9000)
valorsaldo.Retirar2(10000)
    // print.innerHTML += (valorsaldo.Depositar(400))