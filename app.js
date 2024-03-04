// Abaixo temos uma função "sortear", onde temos três vareaveis descritas como "quantidade", "de" e "ate", cada uma está buscando o id no HTML com o "document.getElementById" querendo o "value", valor do input
// Rodamos alguns "Alert", para saber como está "alert (`Quantidade: ${quantidade}`);"
function sortear() {
    let quantidade = document.getElementById ('quantidade').value;
    let de = document.getElementById ('de').value;
    let ate = document.getElementById ('ate').value;

    alert (`Quantidade: ${quantidade}`);
    alert (`Do numero: ${de}`);
    alert (`Até o número: ${ate}`);
}