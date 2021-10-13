    let total = 0;

    const soma = function(produto, listaDeProdutos) {
    let totalCompra = document.querySelector('#mostraTotalCompra');    

    total += listaDeProdutos[produto.target.id].preco;
    totalCompra.value = `R$ ${total.toFixed(2)}`;
}

export {soma};