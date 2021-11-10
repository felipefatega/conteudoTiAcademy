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

app.get('/servicos', async(req, res)=>{
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

app.get('/clientes', async(req, res)=>{
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

app.get('/pedidos', async(req, res)=>{
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

app.get('/compras', async(req, res)=>{
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

app.get('/produtos', async(req, res)=>{
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

app.get('/itempedidos/:PedidoId/:ServicoId', async(req, res) => {
    if(!await pedido.findByPk(req.params.PedidoId)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    if(!await servico.findByPk(req.params.ServicoId)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    await itempedido.findOne({where: 
        Sequelize.and(
            {ServicoId: req.params.ServicoId},
            {PedidoId: req.params.PedidoId}
        )
    })
    .then(item => {
        return res.json({
            error: false,
            item
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o pedido."
        });
    });
});

app.get('/itemcompras/:CompraId/:ProdutoId', async(req, res) => {
    if(!await compra.findByPk(req.params.CompraId)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    if(!await produto.findByPk(req.params.ProdutoId)) {
        return res.status(400).json({
            erro: true,
            message: "Produto não encontrado."
        });
    };

    await itemcompra.findOne({where: 
        Sequelize.and(
            {CompraId: req.params.CompraId},
            {ProdutoId: req.params.ProdutoId}
        )
    })
    .then(item => {
        return res.json({
            error: false,
            item
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o pedido."
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

app.put('/itempedidos/:PedidoId/:ServicoId/editar', async(req, res) => {
    if(!await pedido.findByPk(req.params.PedidoId)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    if(!await servico.findByPk(req.params.ServicoId)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    const item = {
        PedidoId: req.body.PedidoId,
        ServicoId: req.body.ServicoId,
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    await itempedido.update(item, {
        where: Sequelize.and(
            {ServicoId: req.params.ServicoId},
            {PedidoId: req.params.PedidoId}
        )
    }).then(function(itens) {
        return res.json({
            error: false,
            message: "Item alterado com sucesso!",
            itens
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar pedido."
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

app.put('/itemcompras/:CompraId/:ProdutoId/editar', async(req, res) => {
    if(!await compra.findByPk(req.params.CompraId)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    if(!await produto.findByPk(req.params.ProdutoId)) {
        return res.status(400).json({
            erro: true,
            message: "Produto não encontrado."
        });
    };

    const item = {
        CompraId: req.body.CompraId,
        ProdutoId: req.body.ProdutoId,
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    await itemcompra.update(item, {
        where: Sequelize.and(
            {ProdutoId: req.params.ProdutoId},
            {CompraId: req.params.CompraId}
        )
    }).then(function(itens) {
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            itens
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar pedido."
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

app.get('/itempedidos/:PedidoId/:ServicoId/excluir', async(req, res) => {
    if(!await pedido.findByPk(req.params.PedidoId)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    if(!await servico.findByPk(req.params.ServicoId)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    await itempedido.destroy({        
        where: Sequelize.and({
            ServicoId: req.params.ServicoId, 
            PedidoId: req.params.PedidoId
        })
    }).then(function() {
        return res.json({
            error: false,
            message: "Item excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o item."
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

app.get('/itemcompras/:CompraId/:ProdutoId/excluir', async(req, res) => {
    if(!await compra.findByPk(req.params.CompraId)) {
        return res.status(400).json({
            erro: true,
            message: "Compra não encontrada."
        });
    };

    if(!await produto.findByPk(req.params.ProdutoId)) {
        return res.status(400).json({
            erro: true,
            message: "Produto não encontrado."
        });
    };

    await itemcompra.destroy({        
        where: Sequelize.and({
            ProdutoId: req.params.ProdutoId, 
            CompraId: req.params.CompraId
        })
    }).then(function() {
        return res.json({
            error: false,
            message: "Item excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o item."
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001');
});