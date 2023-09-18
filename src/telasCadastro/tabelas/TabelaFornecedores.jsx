import { Container, Table, Button } from "react-bootstrap";

export default function TabelaFornecedores(props){
    return(
        <Container>
            <Button type="button">Novo Fornecedor</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome Fantasia</th>
                        <th>CNPJ</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>N°</th>
                        <th>CEP</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Distribuidora Rio</td>
                        <td>11.111.111/0001-11</td>
                        <td>rio@rio.com</td>
                        <td>(18)90909-9090</td>
                        <td>Rua rio, 10</td>
                        <td>10</td>
                        <td>19000-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}