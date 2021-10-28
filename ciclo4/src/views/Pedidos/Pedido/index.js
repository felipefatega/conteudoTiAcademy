import axios from "axios";
import { api } from "../../../config";
import { Alert, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pedido = (props) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [id, setId] = useState(props.match.params.id);

    const getItems = async () => {
        await axios.get(api + "/pedidos/" + id)
            .then((response) => {
                setData(response.data.ped.pedido_itens);                
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
                    <h1>Informações do pedido</h1>
                </div>
                {status.type == 'Error' ?
                    <Alert color="danger">
                        {status.message}
                    </Alert> : ""
                }
                <Table striped>
                    <thead>
                        <tr>
                            <th>Serviço</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.ServicoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link 
                                        to={"/servicos/"+item.ServicoId} 
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