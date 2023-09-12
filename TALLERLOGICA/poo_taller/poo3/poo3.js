class CuentaBancaria {
    constructor(saldo){
        this.saldo = saldo
    }
    Depositar (valor){
        this.saldo +=  valor
        return this.saldo
    }
    Retirar (valor) {
        this.saldo -=  valor
        return this.saldo
    }
}
