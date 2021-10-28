import axios from "axios";
import { api } from "../../../config";
import { Alert, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Servicos = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/servicos")
            .then((response) => {
                setData(response.data.servicos);
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
                        <h1>Serviços</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link 
                            to="/servicos/cadastrar"
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
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center/">
                                    <Link 
                                        to={"/servicos/"+item.id} 
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