import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
export default function FormCadProduto(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Ex: Cadeira" id="nome" name="nome" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Descrição:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="..." id="nome" name="nome" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Quantidade:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Ex: 100" id="qtde" name="qtde"/>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Preço (R$):"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Ex: 10,99" id="preco" name="preco" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col>
                        <Button type="submit" variant={"secondary"}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}