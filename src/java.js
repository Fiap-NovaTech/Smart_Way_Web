function boasVindas() {
    let nome = prompt("Qual é o seu nome?");

    if (nome == null || nome.trim() == "") {
        alert("Bem-vindo à Smart Way!");
    } else {
        alert("Olá, " + nome + "! Bem-vindo à Smart Way!");
    }
}