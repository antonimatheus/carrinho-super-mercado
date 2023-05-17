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
        let c = quant; // Armazena a quantidade em uma variável temporária
        let mult = 0; // Variável para armazenar o total do produto atual

        // Calcula o total do produto atual
        if (c > 1) {
            while (c > 1) {
                mult += c * preç; // Multiplica a quantidade pelo preço e adiciona ao total do produto
                c--; // Decrementa a quantidade em 1
            }
        } else {
            mult = preç; // Se a quantidade for igual a 1, o total é igual ao preço
        }

        // Exibe o produto e o total na caixa de resultados
        res.innerHTML += `${quant} ${produto.value} R$${mult.toFixed(2)}<br>`;

        // Atualiza o total acumulado
        total += mult;
        tot.innerHTML = `Total: R$ ${total.toFixed(2)}<br>`;
    }
}
