import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { Menu } from './components/Menu';
import { Clientes } from './views/Clientes/Clientes';
import { Cliente } from './views/Clientes/Cliente';
import { ClienteCadastrar } from './views/Clientes/ClienteCadastrar';
import { ClienteEditar } from './views/Clientes/ClienteEditar';
import { Pedidos } from './views/Pedidos/Pedidos';
import { Pedido } from './views/Pedidos/Pedido';
import { PedidoCadastrar } from './views/Pedidos/PedidoCadastro';
import { PedidoEditar } from './views/Pedidos/PedidoEditar';
import { Servicos } from './views/Servicos/Servicos';
import { Servico } from './views/Servicos/Servico';
import { ServicoCadastrar } from './views/Servicos/ServicoCadastrar';
import { ServicoEditar } from './views/Servicos/ServicoEditar';
import { ItemPedidos } from './views/ItemPedidos/ItemPedidos';
import { ItemPedido } from './views/ItemPedidos/ItemPedido';
import { ItemPedidosCadastrar } from './views/ItemPedidos/ItemPedidosCadastrar';
import { ItemPedidosEditar } from './views/ItemPedidos/ItemPedidosEditar';
import { Compras } from './views/Compras/Compras';
import { CompraCadastrar } from './views/Compras/CompraCadastro';
import { Compra } from './views/Compras/Compra';
import { CompraEditar } from './views/Compras/CompraEditar';
import { Produtos } from './views/Produtos/Produtos';
import { ProdutoCadastrar } from './views/Produtos/ProdutoCadastro';
import { Produto } from './views/Produtos/Produto';
import { ProdutoEditar } from './views/Produtos/ProdutoEditar';
import { ItemCompras } from './views/ItemCompras/ItemCompras';
import { ItemCompra } from './views/ItemCompras/ItemCompra';
import { ItemComprasCadastrar } from './views/ItemCompras/ItemComprasCadastrar';
import { ItemComprasEditar } from './views/ItemCompras/ItemComprasEditar';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clientes" component={Clientes} />
          <Route path="/clientes/cadastrar" component={ClienteCadastrar} />
          <Route exact path="/clientes/:id" component={Cliente} />
          <Route path="/editarcliente/:id" component={ClienteEditar} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route path="/pedidos/cadastrar" component={PedidoCadastrar} />
          <Route exact path="/pedidos/:id" component={Pedido} />
          <Route path="/editarpedido/:id" component={PedidoEditar} />
          <Route exact path="/servicos" component={Servicos} />
          <Route path="/servicos/cadastrar" component={ServicoCadastrar} />
          <Route exact path="/servicos/:id" component={Servico} />
          <Route path="/editarservico/:id" component={ServicoEditar} />          
          <Route exact path="/itempedidos" component={ItemPedidos} />
          <Route path="/itempedidos/cadastrar" component={ItemPedidosCadastrar} />
          <Route exact path="/itempedidos/:PedidoId/:ServicoId" component={ItemPedido} />         
          <Route path="/itempedidos/:PedidoId/:ServicoId/editar" component={ItemPedidosEditar} />   
          <Route exact path="/compras" component={Compras} />
          <Route path="/compras/cadastrar" component={CompraCadastrar} />
          <Route exact path="/compras/:id" component={Compra} />
          <Route path="/editarcompra/:id/" component={CompraEditar} />
          <Route exact path="/produtos" component={Produtos} />
          <Route path="/produtos/cadastrar" component={ProdutoCadastrar} />
          <Route exact path="/produtos/:id" component={Produto} />
          <Route path="/editarproduto/:id" component={ProdutoEditar} />
          <Route exact path="/itemcompras" component={ItemCompras} />
          <Route path="/itemcompras/cadastrar" component={ItemComprasCadastrar} />
          <Route exact path="/itemcompras/:CompraId/:ProdutoId" component={ItemCompra} />         
          <Route path="/itemcompras/:CompraId/:ProdutoId/editar" component={ItemComprasEditar} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;