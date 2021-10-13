import { listaDePro } from './listaDePro.js';

window.onload = function() {    
    const produtos = document.querySelector('#produtos'); 
    let listaDeProdutos = [
        {produto: 'Abacaxi', preco: 5.75},
        {produto: 'Banana', preco: 3.50},
        {produto: 'Goiaba', preco: 2.50},
        {produto: 'Manga', preco: 8.00},
        {produto: 'Laranja', preco: 2.00},
        {produto: 'Limão', preco: 1.50}
    ];

    listaDePro(listaDeProdutos, produtos);    
}