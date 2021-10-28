const express = require('express');
const {Sequelize} = require('./models');

const models = require('./models');

const app = express();
app.use(express.json());

let cliente=models.Cliente;
let pedido = models.Pedido;
let servico = models.Servico;
let itempedido = models.ItemPedido;

app.post('/servicos/cadastrar', async(req, res) => {
    await servico.create(
        req.body        
    ).then(function() {
        return res.json({
            error: false,
            message: "Serviço cadastrado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar o serviço."
        })
    });    
});


app.post('/clientes/cadastrar', async(req, res) => {
    await cliente.create(
        req.body        
    ).then(function() {
        return res.json({
            error: false,
            message: "Cliente cadastrado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar o cliente."
        })
    });
});

app.post('/pedidos/cadastrar', async(req, res) => {
    await pedido.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Pedido cadastrado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar o pedido."
        })
    });
});

app.post('/itempedidos/cadastrar', async(req, res) => {
    await itempedido.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "O item foi adicionado ao pedido!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao adicionar item ao pedido."
        })
    });
});

app.post('/compras/cadastrar', async(req, res) => {
    await compra.create(
        req.body        
    ).then(function() {
        return res.json({
            error: false,
            message: "Compra cadastrada com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar a compra."
        })
    });    
});

app.post('/produtos/cadastrar', async(req, res) => {
    await produto.create(
        req.body        
    ).then(function() {
        return res.json({
            error: false,
            message: "Produto cadastrado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar o produto."
        })
    });    
});

app.post('/itemcompras/cadastrar', async(req, res) => {
    await itemcompra.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "O item foi adicionado à compra!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao adicionar item à compra."
        })
    });
});

app.post('/servicos', async(req,res)=>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
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

app.post('/itempedidos', async(req,res)=>{
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

app.post('/compras', async(req,res)=>{
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Compra realizada com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Impossível se conectar."
        })
    });
})

app.post('/produtos', async(req,res)=>{
    await produto.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Produto selecionado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Impossível se conectar."
        })
    });
})

app.post('/itemcompras', async(req,res)=>{
    await itemcompra.create(
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
        order: [['clienteDesde', 'DESC']]
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

app.get('/listacompras', async(req, res)=>{
    await compra.findAll({
        order: [['data', 'ASC']]
    }).then(function(compras){
        res.json({
            error: false,
            compras
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar compras."
        });
    });
});

app.get('/listaprodutos', async(req, res)=>{
    await produto.findAll({
        order: [['nome', 'ASC']]
    }).then(function(produtos){
        res.json({
            error: false,
            produtos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar produtos."
        });
    });
});

app.get('/listaitempedidos', async(req, res)=>{
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

app.get('/listaitemcompras', async(req, res)=>{
    await itemcompra.findAll({
        order: [['CompraId', 'ASC']]
    }).then(function(itemCompras){
        res.json({
            error: false,
            itemCompras
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

app.get('/compra/:id', async(req, res) => {
    if(!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    await compra.findByPk(req.params.id, {include: [{all: true}]})
    .then(comp => {
        return res.json({
            error: false,
            comp
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar a compra."
        });
    });
});

app.get('/produto/:id', async(req, res) => {
    if(!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Produto não encontrado."
        });
    };

    await produto.findByPk(req.params.id, {include: [{all: true}]})
    .then(produt => {
        return res.json({
            error: false,
            produt
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o produto."
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

app.put('/pedido/:id/editaritempedido', async(req, res) => {
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
            message: "Ocorreu um erro na alteração do pedido."
        });
    });
});

app.put('/editarcompra/:id', async(req, res) => {
    if(!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    const comp = {
        data: req.body.data
    };

    await compra.update(comp, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Compra alterada com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar a compra."
        });
    });
});

app.put('/editarproduto/:id', async(req, res) => {
    if(!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Produto não encontrado."
        });
    };

    const produt = {
        nome: req.body.nome,
        descricao: req.body.descricao
    };

    await produto.update(produt, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Produto alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar produto."
        });
    });
});

app.put('/compra/:id/editaritemcompra', async(req, res) => {
    if(!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    if(!await produto.findByPk(req.body.ProdutoId)) {
        return res.status(400).json({
            erro: true,
            message: "Produto não encontrado."
        });
    };

    const itemComp = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    await itemcompra.update(itemComp, {
        where: Sequelize.and(
            {ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id}
        )
    }).then(function(itensComp) {
        return res.json({
            error: false,
            message: "A compra foi alterada com sucesso!",
            itensComp
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Ocorreu um erro na alteração da compra."
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

app.get('/pedidos/:id/excluiritempedido', async(req, res) => {
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

app.get('/excluircompra/:id', async(req, res)=>{
    await compra.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Compra excluída com sucesso."
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir a compra."
        });
    });
});

app.get('/excluirproduto/:id', async(req, res)=>{
    await produto.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Produto excluído com sucesso."
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o produto."
        });
    });
});

app.get('/compras/:id/excluiritemcompra', async(req, res) => {
    if(!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    await itemcompra.destroy({        
        where: Sequelize.and({
            ProdutoId: req.body.ProdutoId, 
            CompraId: req.params.id
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