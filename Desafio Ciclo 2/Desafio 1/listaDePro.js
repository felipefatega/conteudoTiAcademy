import { addPro } from './addPro.js';

const listaDePro = function(listaDeProdutos, produtos) {
    for (let item of listaDeProdutos) {
        let li = document.createElement('li');
        produtos.appendChild(li).textContent = item.produto;
    }

    const pLi = document.querySelectorAll(`#produtos > li`); 
    let index = 0;  

    for(let produto of pLi) {              
        produto.addEventListener('click', function(produto){            
        addPro(produto, listaDeProdutos);            
        })
        produto.setAttribute('id', index);
        index++;
    }
}

export {listaDePro};
