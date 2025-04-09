function tarefaDemorada(){
    const agora = new Date();
    const futuro = agora.getTime() + 3000  //add 3 seg
    while (new Date().getTime() < futuro) {} //espera 3 seg
}

console.log("Iniciando o programa...")
console.log("Executando tarefa 1")
tarefaDemorada() // simula processo de 3 seg
console.log("Tarefa 1 concluida")

console.log("Executando tarefa 2")
tarefaDemorada() // simula processo de 3 seg
console.log("Tarefa 2 concluida")
console.log("Programa finalizada")