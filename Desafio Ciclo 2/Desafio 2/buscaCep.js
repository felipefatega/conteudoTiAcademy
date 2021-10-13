const buscaCep = async function(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let data = await fetch(url);
    let json = await data.json();
    dadosCep(json);
}

const dadosCep = function(json) {
    for(let p in json) {
        if(document.querySelector(`#${p}`)) {
            document.querySelector(`#${p}`).value = json[p];
        }
    }
}

export { buscaCep };