function buscarUsuario(id){
    return new Promise((resolve, reject) => {
    // Iniciamos uma nova promise que pode ter dois resultados:
    // resolve, quando tem sucesso ou reject, quando da erro
    console.log(`Buscando usuario com o ID: $(id)`)
    setTimeout(() => { //Para simular um atraso de 2s
    const usuario = {id: id, nome: "João"}
    // Criamos um objeto representado um usuário encontrado
    if(usuario) {
    resolve(usuario) 
    //Seusuârio existir o resolve acionado indicandoque a tarefa foi concluida com sucesso
    }else {
    reject("Usuário não encontrado")
    // Se não existir rejectQ acionado indicando quetarefa falhou
    }
}, 2000)
    })
}

buscarUsuario(1)
    .then((usuario)=> {
        console.log("usuario encontrado:", usuario)
    })
    .catch((erro)=>{
        console.log("erro", erro)
    })