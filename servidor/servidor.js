const http = require("http")
const fs = require("fs")
const caminho = require("path")

const porta = 3000
const host = "localhost"

const servidor = http.createServer((requisicao, resposta)=>{
    if(requisicao.url === '/') {
        const caminhoArquivo = caminho.join(__dirname, 'index.html')
        fs.readFile(caminhoArquivo, (erro, conteudo) =>{
            if(erro) {
                resposta.writeHead(500)
                resposta.end("Erro ao ler arquivo HTML0")
                return
            }
            resposta.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
            resposta.end(conteudo)
        })
    }
    else if (requisicao.url === '/mensagem') {
        resposta.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        resposta.end("Ola, esse é uma mensagem do servidor http")
    }
    else {
        resposta.writeHead(404)
        resposta.end("Pagina nao encontrada")
    }
})

servidor.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})