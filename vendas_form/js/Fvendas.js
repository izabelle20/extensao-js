//Cadastrar
function cadastrarResultado() {
    let venda = [];

    let nome = document.getElementById("nome").value;
    let vendaValor = document.getElementById("venda").value;

    venda.push(nome);
    venda.push(vendaValor);

    console.log("Nome:", nome);
    console.log("Valor da Venda:", vendaValor);

    console.log("Venda :", venda);
}

//Remover
function removerResultado() {
    let venda = [];
    let ultimaVenda = venda.pop();
    console.log(venda); 
    console.log(ultimaVenda); 
}
