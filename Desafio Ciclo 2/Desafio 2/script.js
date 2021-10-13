import { buscaCep } from './buscaCep.js';

let cep = document.querySelector('#ent-cep');
let buscaBtn = document.querySelector('#buscar');

    buscaBtn.addEventListener('click', function() {
    buscaCep(cep.value);
});