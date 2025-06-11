const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false
};

function menuPrincipal() {
    console.log("\nVocê está em uma sala trancada");
    console.log("Ao seu redor, você vê:");
    console.log("1. Um grampeador velho");
    console.log("2. Um monte de papéis amassados na mesa");
    console.log("3. Uma almofada fora do lugar");
    console.log("4. Tentar abrir a porta");

    rl.question("\nO que você deseja fazer? ", (resposta) => {
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
                verificarSaida();
                break;
            default:
                console.log("Escolha inválida");
                menuPrincipal();
        }
    });
}

function investigarGrampeador() {
    if (resolvidos.grampeador) {
        console.log("Você já resolveu esse desafio.");
        return menuPrincipal();
    }
    rl.question("\nDentro do grampeador tem um bilhete: 'Sou cheia de buracos, mas seguro a água. O que sou? '", (resposta) => {
        if (resposta.trim().toLowerCase() === "esponja") {
            console.log("Acertou!");
            resolvidos.grampeador = true;
        } else {
            console.log("Resposta errada.");
        }
        menuPrincipal();
    });
}

function investigarPapeis() {
    if (resolvidos.papeis) {
        console.log("Você já resolveu esse desafio.");
        return menuPrincipal();
    }
    rl.question("\nUm dos papéis diz: 'Qual palavra está sempre escrita errada no dicionário?'", (resposta) => {
        if (resposta.trim().toLowerCase() === "errada") {
            console.log("Acertou!");
            resolvidos.papeis = true;
        } else {
            console.log("Resposta errada.");
        }
        menuPrincipal();
    });
}

function investigarAlmofada() {
    if (resolvidos.almofada) {
        console.log("Você já resolveu esse desafio.");
        return menuPrincipal();
    }
    rl.question("\nNa almofada tem um enigma: 'Estou no começo, no meio, mas nunca no fim. Quem sou eu?'", (resposta) => {
        if (resposta.trim().toLowerCase() === "letra e") {
            console.log("Acertou!");
            resolvidos.almofada = true;
        } else {
            console.log("Pense um pouco mais.");
        }
        menuPrincipal();
    });
}

function verificarSaida() {
    if (resolvidos.grampeador && resolvidos.almofada && resolvidos.papeis) {
        console.log("Parabéns, você escapou!");
        console.log("Você encontrou as 3 chaves.");
        rl.close();
    } else {
        console.log("A porta ainda está fechada. Você não resolveu todos os enigmas.");
        menuPrincipal();
    }
}

console.log("Bem-vindo ao Escape Room!");
menuPrincipal();