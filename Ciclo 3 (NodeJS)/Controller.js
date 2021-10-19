const express = require('express');
const {Sequelize} = require('./models');

const models = require('./models');

const app = express();
app.use(express.json());

let cliente=models.Cliente;
let pedido = models.Pedido;
let servico = models.Servico;
let itempedido = models.ItemPedido;

app.post('/servicos', async(req,res)=>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Servico criado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
})

app.post('/clientes', async(req,res)=>{
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente Cadastrado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
})

app.post('/pedidos', async(req,res)=>{
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido realizado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
})

app.post('/itens', async(req,res)=>{
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Item selecionado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Impossível se conectar."
        })
    });
})

app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order: [['nome','ASC']]
    }).then(function(servicos){
        res.json({
            error: false,
            servicos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar serviços."
        });
    });
});

app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
        order: [['clienteDesde', 'ASC']]
    }).then(function(clientes){
        res.json({
            error: false,
            clientes
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar clientes."
        });
    });
});

app.get('/listapedidos', async(req, res)=>{
    await pedido.findAll({
        order: [['data', 'ASC']]
    }).then(function(pedidos){
        res.json({
            error: false,
            pedidos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar pedidos."
        });
    });
});

app.get('/listaitens', async(req, res)=>{
    await itempedido.findAll({
        order: [['PedidoId', 'ASC']]
    }).then(function(itemPedidos){
        res.json({
            error: false,
            itemPedidos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar itens."
        });
    });
});

app.get('/servico/:id', async(req, res) => {
    if(!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Servico não encontrado."
        });
    };

    await servico.findByPk(req.params.id, {include: [{all: true}]})
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o serviço."
        });
    });
});

app.get('/cliente/:id', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado(a)."
        });
    };

    await cliente.findByPk(req.params.id, {include: [{all: true}]})
    .then(client => {
        return res.json({
            error: false,
            client
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar cliente."
        });
    });
});

app.get('/pedido/:id', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    await pedido.findByPk(req.params.id, {include: [{all: true}]})
    .then(pedid => {
        return res.json({
            error: false,
            pedid
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o pedido."
        });
    });
});

app.put('/editarservico/:id', async(req, res) => {
    if(!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Servico não encontrado."
        });
    };

    const servic = {
        nome: req.body.nome,
        descricao: req.body.descricao
    };

    await servico.update(servic, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar serviço."
        });
    });
});

app.put('/editarcliente/:id', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    const client = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        nascimento: req.body.nascimento,
        clienteDesde: req.body.clienteDesde
    };

    await cliente.update(client, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar cliente."
        });
    });
});

app.put('/editarpedido/:id', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    const pedid = {
        data: req.body.data
    };

    await pedido.update(pedid, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar pedido."
        });
    });
});

app.put('/pedido/:id/editaritem', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    if(!await servico.findByPk(req.body.ServicoId)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    const itemPed = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    await itempedido.update(itemPed, {
        where: Sequelize.and(
            {ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id}
        )
    }).then(function(itensPed) {
        return res.json({
            error: false,
            message: "O pedido foi alterado com sucesso!",
            itensPed
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Ocorreu um erro na alteraração o pedido."
        });
    });
});

app.get('/excluirservico/:id', async(req, res)=>{
    await servico.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço excluído com sucesso."
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o serviço."
        });
    });
});

app.get('/excluircliente/:id', async(req, res)=>{
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente excluído com sucesso."
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o cliente."
        });
    });
});

app.get('/excluirpedido/:id', async(req, res)=>{
    await pedido.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido excluído com sucesso."
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o pedido."
        });
    });
});

app.get('/pedidos/:id/excluiritem', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    await itempedido.destroy({        
        where: Sequelize.and({
            ServicoId: req.body.ServicoId, 
            PedidoId: req.params.id
        })
    }).then(function() {
        return res.json({
            error: false,
            message: "O item foi excluído!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Ocorreu um erro ao excluir o item."
        });
    });
});


let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001');
});