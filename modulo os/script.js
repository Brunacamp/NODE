const os = require("os")

console.log("Sistema operacional:", os.platform())
console.log("Arquitetura:", os.arch())
console.log("Memória livre:", os.freemem(), "bytes")
console.log("Memória livre", os.totalmem(),"bytes")