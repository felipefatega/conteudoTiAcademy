import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListarCliente } from './views/Cliente/Listar';
import { ListarPedido } from './views/Pedido/Listar';
import { ListarServico } from './views/Servico/Listar';
import { Menu } from './components/Menu';

import { Home } from './views/Home'

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={ListarCliente}/>
          <Route path="/listar-pedido" component={ListarPedido}/>
          <Route path="/listar-servico" component={ListarServico}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
