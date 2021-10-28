import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a
                            href="/clientes"
                            className="btn btn-outline-success btn-sm m-2"
                        >
                            Clientes
                        </a>
                        <a
                            href="/pedidos"
                            className="btn btn-outline-success btn-sm m-2"
                        >
                            Pedidos
                            
                        </a>
                        <a
                            href="/servicos"
                            className="btn btn-outline-success btn-sm m-2"
                        >
                            Serviços
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};