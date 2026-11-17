function boasVindas() {
    let nome = prompt("Qual é o seu nome?");

    if (nome == null || nome.trim() == "") {
        alert("Bem-vindo à Smart Way!");
    } else {
        alert("Olá, " + nome + "! Bem-vindo à Smart Way!");
    }
}

function consultarLinha() {
    let linha = prompt("Digite o número da linha (1 a 4):");

    if (linha == "1") {
        alert("Linha 1 - Azul: funcionamento normal.");
    } else if (linha == "2") {
        alert("Linha 2 - Verde: funcionamento normal.");
    } else if (linha == "3") {
        alert("Linha 3 - Vermelha: trens lotados. Se puder, espere o próximo.");
    } else if (linha == "4") {
        alert("Linha 4 - Amarela: atraso na linha.");
    } else if (linha !== null) {
        alert("Linha inválida! Digite um número de 1 a 4.");
    }
}

function lotacaoVagao() {
    let vagao = prompt("Digite o número do vagão (1 a 6):");

    if (vagao == "1") {
        alert("Vagão 1: 49% de lotação (moderado).");
    } else if (vagao == "2") {
        alert("Vagão 2: 62% de lotação (moderado).");
    } else if (vagao == "3") {
        alert("Vagão 3: 12% de lotação (vazio).");
    } else if (vagao == "4") {
        alert("Vagão 4: 89% de lotação (cheio).");
    } else if (vagao == "5") {
        alert("Vagão 5: 14% de lotação (vazio).");
    } else if (vagao == "6") {
        alert("Vagão 6: 71% de lotação (moderado).");
    } else if (vagao !== null) {
        alert("Vagão inválido! Digite um número de 1 a 6.");
    }
}

const imagens = document.querySelectorAll(".slideshow img");

let indice = 0;

function slideShow() {
    imagens[indice].classList.remove("active");

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    imagens[indice].classList.add("active");
}

// Só inicia se a página tiver slideshow
if (imagens.length > 0) {
    setInterval(slideShow, 3000);
}