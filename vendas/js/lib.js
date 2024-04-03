function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    var resultado;
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const parcela = parseInt(document.getElementById('parcela').value);
    
    // Verifica se os valores inseridos são válidos
    if (!isNaN(valor1) && !isNaN(parcela) && parcela >= 1) {
        // Verifica a quantidade de parcelas e calcula o resultado correspondente
        if (parcela <= 1) {
            resultado = valor1 - (valor1 * 0.1);
            document.getElementById('resultado').innerText = `O valor com desconto foi: ${resultado}`;
        } else {
            // Calcula o valor da parcela com juros
            resultado = valor1 + (valor1 * 0.1);
            const valorParcela = resultado / parcela;

            // Obtém a data atual
            const dataAtual = new Date();
            let output = '';

            // Imprime todas as parcelas com juros calculados e data de vencimento
            for (let i = 1; i <= parcela; i++) {
                // Calcula a data de vencimento adicionando 30 dias à data atual
                const dataVencimento = new Date(dataAtual);
                dataVencimento.setDate(dataVencimento.getDate() + (30 * i));
                
                // Formata a data de vencimento no formato dd/mm/aaaa
                const dia = String(dataVencimento.getDate()).padStart(2, '0');
                const mes = String(dataVencimento.getMonth() + 1).padStart(2, '0');
                const ano = dataVencimento.getFullYear();
                const dataFormatada = `${dia}/${mes}/${ano}`;

                // Adiciona a parcela com juros e a data de vencimento ao output
                output += `Parcela ${i}: Valor ${valorParcela.toFixed(2)} - Vencimento ${dataFormatada}\n`;
            }

            document.getElementById('resultado').innerText = output;
        }
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos e uma quantidade de parcelas válida.';
    }
}
