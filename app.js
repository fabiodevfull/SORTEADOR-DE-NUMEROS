// Abaixo temos uma função "sortear", onde temos três vareaveis descritas como "quantidade", "de" e "ate", cada uma está buscando o id no HTML com o "document.getElementById" querendo o "value", valor do input
// Rodamos alguns "Alert", para saber como está "alert (`Quantidade: ${quantidade}`);"
// O parseInt, faz com que o que é digitado no input, seja um Numero e nao uma Sting (texto);

function sortear() {
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt(document.getElementById ('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push (numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
}


function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}