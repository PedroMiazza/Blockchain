const SHA256 = require('crypto-js').SHA256

class Block{

    constructor(timestamp, transactions, hashAnterior='') {
        this.timestamp = timestamp
        this.transactions = transactions
        this.hashAnterior = hashAnterior
        this.indice = 0
        this.hash = this.calcularHash()
    }

    calcularHash() {
        return SHA256(this.timestamp + this.hashAnterior + JSON.stringify(this.transactions) + this.indice).toString()
    }

    // Es un método
    minarBloque(dificultad) {
        while (this.hash.substring(0, dificultad) !== Array(dificultad + 1).join('0')) {
            this.indice++
            this.hash = this.calcularHash()
        }
        console.log('Bloque Minado: ' + this.hash)
    }
}

module.exports = Block