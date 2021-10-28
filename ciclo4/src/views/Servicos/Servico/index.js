import axios from "axios";
import { api } from "../../../config";
import { Alert, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Servico = (props) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [id, setId] = useState(props.match.params.id);

    const getItems = async () => {
        await axios.get(api + "/servicos/" + id + "/pedidos")
            .then((response) => {
                setData(response.data.serv.servico_item);                
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Erro: Sem conexão com a API.'
                });
            });
    };

    useEffect(() => {
        getItems();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <h1>Informações do serviço</h1>
                </div>
                {status.type == 'Error' ?
                    <Alert color="danger">
                        {status.message}
                    </Alert> : ""
                }
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.PedidoId}>
                                <th>{item.PedidoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link 
                                        to={"/pedidos/"+item.PedidoId} 
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};