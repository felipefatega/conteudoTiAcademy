const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models');

const models = require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let itemPedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get('/', function(req,res){
    res.send('Olá, mundo')
});

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
    await itemPedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Item selecionado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
})

app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order: [['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertaservicos', async(req,res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});

app.get('/servico/:id', async(req,res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar!"
        });  
    });
});

app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
        order: [['clienteDesde', 'ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

app.get('/qtdclientes', async(req,res)=>{
    await cliente.count('id').then(function(clientesqtd){
        res.json({clientesqtd});
    });
});

app.get('/qtdpedidos', async(req,res)=>{
    await pedido.count('id').then(function(pedidosqtd){
        res.json({pedidosqtd});
    });
});

app.put('/atualizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    })
});

app.get('/pedidos/:id', async(req,res)=>{
    await pedido.findByPk(req.params.id,{include:[{all: true}]})
    .then(ped=>{
        return res.json({ped});
    });
});

app.put('/pedidos/:id/editaritem', async(req,res)=>{
    const item ={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    if(!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: "Pedido não encontrado"
        });
    };

    if(!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            message: "Serviço não encontrado"
        });
    };

    await itemPedido.update(item, {
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            itens
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Não foi possível alterar"
            });
        });
    });
})

let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})