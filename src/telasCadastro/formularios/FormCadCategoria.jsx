import { Container, Button, Row, Col, FloatingLabel, Form } from "react-bootstrap";
export default function FormCadCategoria(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="Categoria">
                            <Form.Select aria-label="Unidades Federativas brasileiras">
                                <option value="dispositivo">Dispositivos</option>
                                <option value="livro">Livro</option>
                                <option value="esportes" selected>Esportes</option>
                                <option value="informatica">Informática</option>
                                <option value="alcool">Bebidas Alcoólicas</option>
                                <option value="jogos">Jogos</option>
                                <option value="cozinha">Cozinha</option>
                                <option value="infantil">Infantil</option>
                                <option value="papelaria">Papelaria</option>
                                <option value="alimento">Alimento</option>
                                <option value="construcao">Construção</option>
                                <option value="beleza">Beleza</option>
                                <option value="roupa">Roupa</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                        <Button type="submit" variant={"secondary"}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}