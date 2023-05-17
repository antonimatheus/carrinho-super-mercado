// Variável para armazenar o total acumulado
let total = 0;

// Função para processar o envio do formulário
function enviar() {
    // Obtém os elementos do formulário
    let produto = document.getElementById('iproduto'); // Campo de entrada para o produto
    let quantidade = document.getElementById('iquantidade'); // Campo de entrada para a quantidade
    let preço = document.getElementById('ipreço'); // Campo de entrada para o preço
    let res = document.getElementById('res'); // Elemento para exibir os resultados
    let tot = document.getElementById('tot'); // Elemento para exibir o total

    // Verifica se algum campo está vazio
    if (produto.value == 0 || quantidade.value == 0 || preço.value == 0) {
        window.alert('Faltando Informação!'); // Exibe um alerta informando que informações estão faltando
    } else {
        // Converte os valores para números
        let quant = Number(quantidade.value); // Valor da quantidade convertido para número
        let preç = Number(preço.value); // Valor do preço convertido para número
        let mult = preç * quant; // Calcula o total do produto atual

        // Exibe o produto e o total na caixa de resultados
        res.innerHTML += `${quant} ${produto.value} R$${mult.toFixed(2)}<br>`;

        // Atualiza o total acumulado
        total += mult;
        tot.innerHTML = `Total: R$ ${total.toFixed(2)}<br>`;
    }
}
