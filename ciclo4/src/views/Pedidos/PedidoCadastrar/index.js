import axios from "axios";
import { api } from "../../../config";
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Label, Input, Alert } from "reactstrap"

export const PedidoCadastrar = () => {

    const [pedido, setPedido] = useState({
        data: '',
        ClienteId: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setPedido({
        ...pedido, 
        [e.target.name]: e.target.value
    });

    const limparInput = () => setPedido({
        data: '',
        ClienteId: ''
    });

    const cadPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api+"/pedidos/cadastrar", pedido, {headers})
        .then((response) => {
            if(response.data.error) {
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            } else {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            };
        })
        .catch(() => {
            console.log("Erro: Sem conexão com a API.");
        });
    };

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Pedido</h1>
                </div>
                <div className="p-2">
                    <Link
                        to="/pedidos"
                        className="btn btn-outline-success btn-sm"
                    >
                        Pedidos
                    </Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

            <Form className="p-2" onSubmit={cadPedido}>
                <FormGroup className="p-2">
                    <Label>Data</Label>
                    <Input type="date" name="data" placeholder="Data do Pedido" value={pedido.data} onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Cliente ID</Label>
                    <Input type="text" name="ClienteId" placeholder="Cliente Id" value={pedido.ClienteId} onChange={valorInput} />
                </FormGroup>       
                <Button className="m-2" type="submit" outline color = "success">Cadastrar</Button>
                <Button className="m-2" type="button" outline color = "secondary" onClick={limparInput}>Limpar</Button>
            </Form>
        </Container>
    )
}