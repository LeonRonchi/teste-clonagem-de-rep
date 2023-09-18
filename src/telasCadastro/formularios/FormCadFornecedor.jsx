import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"
export default function FormCadFornecedor(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CNPJ:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="00.000.000/0001-00" id="cnpj" />

                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome Fantasia:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela" id="endereco" name="endereco" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="exemplo@dominio.com" id="email" name="email"/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o email!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nº:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Ex: 130" id="num" name="num" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="00000-000" id="cep" name="cep" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CEP!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="(00) 00000-0000" id="telefone" name="telefone" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Telefone!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5}>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>

                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>

        /*
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label=":"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="" id="" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
        */
    );
}