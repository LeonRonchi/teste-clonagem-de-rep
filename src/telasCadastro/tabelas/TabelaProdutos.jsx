import { Container, Button, Table } from "react-bootstrap";
export default function TabelaProdutos(props){
    return(
        <Container>
            <Button type="button">Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Preço (R$)</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Cadeira</td>
                        <td>Serve pra sentar</td>
                        <td>30</td>
                        <td>19,90</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}