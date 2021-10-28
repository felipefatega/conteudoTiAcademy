import axios from "axios";
import { api } from "../../../config";
import { Alert, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pedidos = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/pedidos")
            .then((response) => {
                setData(response.data.pedidos);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Erro: Sem conexão com a API.'
                });
            });
    };

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div>
            <Container>
            <div className="d-flex">
                    <div>
                        <h1>Pedidos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link
                            to="/pedidos/cadastrar"
                            className="btn btn-outline-primary btn-sm"
                        >
                            Cadastrar
                        </Link>
                    </div>
                    {status.type == 'Error' ?
                        <Alert color="danger">
                            {status.message}
                        </Alert> : ""
                    }
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Cliente</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.ClienteId}</td>
                                <td>{item.data}</td>
                                <td className="text-center/">
                                    <Link
                                        to={"/pedidos/"+item.id}
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