import { soma } from './soma.js';

let cestaDeProdutos = [];

    const addPro = function(produto, listaDeProdutos) {
    let cestaCliente = document.querySelector('#cestaDoCliente');    
    let li = document.createElement('li');     

        if(cestaDeProdutos.includes(produto.target.innerText, 0) === false) {
            cestaCliente.appendChild(li).textContent = produto.target.innerText;
            cestaDeProdutos.push(produto.target.innerText);
            soma(produto, listaDeProdutos);
        } else {
            alert(`Este item ${produto.target.innerText} já foi adicionado à sua cesta`)
        }
}

export {addPro};