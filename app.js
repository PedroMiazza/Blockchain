const Block = require('./block')
const Blockchain = require('./blockchain')
const Transaction = require('./transaction')

let t1 = new Transaction('neoland-address', 'mario-address', 50)
let t2 = new Transaction('neoland-address', 'mario-address', 100)

let neoCoin = new Blockchain()

neoCoin.agregarTransaccion(t1)
neoCoin.agregarTransaccion(t2)

neoCoin.minarTransaccionesPendientes('mario-address')

neoCoin.minarTransaccionesPendientes('neoland-address')

// let b1 = new Block(Date.now(), { amount: 100 })
// let b2 = new Block(Date.now(), { amount: 30 })

// console.log(b1)
// console.log(b1.calcularHash())

// let neoCoin = new Blockchain() //Aquí creamos un nuevo objeto llamado Blockchain
// neoCoin.agregarBloque(b1)
// neoCoin.agregarBloque(b2)

// Con ésto modificaríamos la cadena al no seguir los hashes anteriores
// b1.data = { amount: 200 }
// b1.hash = b1.calcularHash()

console.log(JSON.stringify(neoCoin, null, 4))
console.log('VALIDA: ', neoCoin.isValid())

console.log('BALANCE de MARIO: ', neoCoin.getBalance('mario-address'))
console.log('BALANCE de NEOLAND: ', neoCoin.getBalance('neoland-address'))