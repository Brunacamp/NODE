const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false,
    livro: false,
    janela: false,
    armario: false
};

function menuPrincipal() {
    console.log("\n🔒 Você está preso em uma sala misteriosa e precisa encontrar 6 chaves escondidas em objetos para sair.");
    console.log("Olhe ao redor e veja:");
    console.log("1. 📎 Um grampeador velho sobre a mesa");
    console.log("2. 📄 Papéis amassados na mesa");
    console.log("3. 🛋️ Uma almofada jogada no sofá");
    console.log("4. 📚 Um livro antigo caído no chão");
    console.log("5. 🪟 Uma janela trancada com algo colado no vidro");
    console.log("6. 🥇 Uma medalha com algo escrito atras");
    console.log("7. 🚪 Tentar abrir a porta");

    rl.question("\n O que você deseja investigar? ", (resposta) => {
        switch (resposta.trim()) {
            case "1":
                investigarGrampeador();
                break;
            case "2":
                investigarPapeis();
                break;
            case "3":
                investigarAlmofada();
                break;
            case "4":
                investigarLivro();
                break;
            case "5":
                investigarJanela();
                break;
            case "6":
                investigarArmario();
                break;
            case "7":
                verificarSaida();
                break;
            default:
                console.log("❌ Escolha inválida. Tente novamente.");
                menuPrincipal();
        }
    });
}

function investigarGrampeador() {
    if (resolvidos.grampeador) {
        console.log("✅ Você já resolveu esse enigma.");
        return menuPrincipal();
    }
    rl.question("\n📎 Dentro do grampeador há um papel dizendo: 'Sou cheia de buracos, mas seguro a água. O que sou?'\n", (resposta) => {
        if (resposta.trim().toLowerCase() === "esponja") {
            console.log("🎉 Acertou!");
            resolvidos.grampeador = true;
        } else {
            console.log("❌ Resposta errada.");
        }
        menuPrincipal();
    });
}

function investigarPapeis() {
    if (resolvidos.papeis) {
        console.log("✅ Você já resolveu esse enigma.");
        return menuPrincipal();
    }
    rl.question("\n📄 Um dos papéis diz: 'Qual palavra está sempre escrita errada no dicionário?'\n👉 ", (resposta) => {
        if (resposta.trim().toLowerCase() === "errada") {
            console.log("🎉 Acertou!");
            resolvidos.papeis = true;
        } else {
            console.log("❌ Resposta errada.");
        }
        menuPrincipal();
    });
}

function investigarAlmofada() {
    if (resolvidos.almofada) {
        console.log("✅ Você já resolveu esse enigma.");
        return menuPrincipal();
    }
    rl.question("\n🛋️ Dentro da almofada tem um papel amassado: 'Tenho teclas, mas não portas. Tenho espaço, mas não salas. O que sou eu?'\n ", (resposta) => {
        if (resposta.trim().toLowerCase() === "teclado") {
            console.log("🎉 Acertou!");
            resolvidos.almofada = true;
        } else {
            console.log("❌ Quase! Tente de novo depois.");
        }
        menuPrincipal();
    });
}

function investigarLivro() {
    if (resolvidos.livro) {
        console.log("✅ Você já resolveu esse enigma.");
        return menuPrincipal();
    }
    rl.question("\n📚 Ao abrir o livro, uma página destaca-se com a frase: 'Quanto mais você tira de mim, maior eu fico. O que sou?'\n", (resposta) => {
        if (resposta.trim().toLowerCase() === "buraco") {
            console.log("🎉 Acertou!");
            resolvidos.livro = true;
        } else {
            console.log("❌ Não é isso.");
        }
        menuPrincipal();
    });
}

function investigarJanela() {
    if (resolvidos.janela) {
        console.log("✅ Você já resolveu esse enigma.");
        return menuPrincipal();
    }
    rl.question("\n🪟 Um bilhete está preso na janela: 'Sou invisível, mas te faço suar quando estou por perto. Quem sou eu?'\n ", (resposta) => {
        if (resposta.trim().toLowerCase() === "calor") {
            console.log("🎉 Acertou!");
            resolvidos.janela = true;
        } else {
            console.log("❌ Resposta incorreta.");
        }
        menuPrincipal();
    });
}

function investigarArmario() {
    if (resolvidos.armario) {
        console.log("✅ Você já resolveu esse enigma.");
        return menuPrincipal();
    }
    rl.question("\n🚪 Dentro do armário tem uma anotação na parede: 'Tenho cabeça e cauda, mas não tenho corpo. O que sou?'\n ", (resposta) => {
        if (resposta.trim().toLowerCase() === "moeda") {
            console.log("🎉 Acertou!");
            resolvidos.armario = true;
        } else {
            console.log("❌ Não é essa a resposta.");
        }
        menuPrincipal();
    });
}

function verificarSaida() {
    if (Object.values(resolvidos).every(Boolean)) {
        console.log("\n🎉 Parabéns!! Você encontrou todas as 6 chaves escondidas!");
        console.log("🔓 A porta se abre lentamente... Você ESCAPOU da sala! 🏃‍♂️");
        rl.close();
    } else {
        console.log("🚪 A porta ainda está trancada. Encontre todas as chaves antes de sair.");
        menuPrincipal();
    }
}

console.log("👋 Bem-vindo ao Escape Room!");
menuPrincipal();
