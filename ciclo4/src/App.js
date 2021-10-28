import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { Menu } from './components/Menu';
import { Clientes } from './views/Clientes/Clientes';
import { Cliente } from './views/Clientes/Cliente';
import { ClienteCadastrar } from './views/Clientes/ClienteCadastrar';
import { Pedidos } from './views/Pedidos/Pedidos';
import { Pedido } from './views/Pedidos/Pedido';
import { PedidoCadastrar } from './views/Pedidos/PedidoCadastrar';
import { Servicos } from './views/Servicos/Servicos';
import { Servico } from './views/Servicos/Servico';
import { ServicoCadastrar } from './views/Servicos/ServicoCadastrar';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clientes" component={Clientes} />
          <Route path="/clientes/cadastrar" component={ClienteCadastrar} />
          <Route path="/clientes/:id" component={Cliente} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route path="/pedidos/cadastrar" component={PedidoCadastrar} />
          <Route path="/pedidos/:id" component={Pedido} />
          <Route exact path="/servicos" component={Servicos} />
          <Route path="/servicos/cadastrar" component={ServicoCadastrar} />
          <Route path="/servicos/:id" component={Servico} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
