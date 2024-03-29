import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"
import { useState } from "react";
export default function FormCadCliente(props) {
    //Os atributos deste objeto devem estar associados aos inputs do formulario
    const clienteVazio = {
        cpf: '',
        nome: '',
        endereco: '',
        bairro: '',
        numero: '',
        cidade: '',
        uf: 'AC',
        cep: ''
    };
    const estadoInicialCliente = props.clienteParaEdicao;
    const [cliente, setCliente] = useState(estadoInicialCliente);
    const [formValidado, setFormValidado] = useState(false);
    //Para depurar é necessário instalar a extensão react dev tools do chrome, em F12 aparecerá novas guias "Components", aqui é onde podemos efetivamente depurar o código, selecionando o componente e clicando em "<>"

    //handleChange, onChange
    function manipularMudancas(e) {//e = evento
        const componente = e.currentTarget;//
        //console.log(componente.value);
        setCliente({ ...cliente, [componente.name]: componente.value })//Queremos alterar somente um atributo(os outros continuam do jeito que estão)
        //[nome do atributo](não é um valor)

    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            //Todos os campos preenchidos
            //Enviar dados para o Backend

            //Enviar o cliente aqui, já que todas as informações estão corretas
            //props.inserirCliente(cliente);minha resolução
            if (!props.modoEdicao) {
                props.setListaClientes([...props.listaClientes, cliente]);
                //ótimo momento para enviar os dados ao backend
                props.setMensagem('Cliente incluído com sucesso');
                props.setTipoMensagem('sucess');
                props.setMostrarMensagem(true);
            }
            else {
                //alterar dados do cliente(filtra e adiciona)
                props.setListaClientes([...props.listaClientes.filter((itemCliente) => itemCliente.cpf !== cliente.cpf), cliente]);
                //Espalha o clientes filtrando o selecionado
                props.setModoEdicao(false);
                props.setClienteParaEdicao(clienteVazio);
            }

            //OU
            /*
                let listaNova = props.listaClientes;
                listaNova.push(cliente);
                props.setListaCliente(listaNova);
            */

            //Limpar os campos do formulario//Em outras palavras, reiniciar o estado do componente
            setCliente(clienteVazio);//Se manter a tela de formulario aberta//Ou sair da tela de formulário
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="CPF:"
                                className="mb-3"
                            >

                                <Form.Control
                                    type="text"
                                    placeholder="000.000.000-00"
                                    id="cpf"
                                    name="cpf" onChange={manipularMudancas}
                                    value={cliente.cpf}
                                    required />

                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CPF!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="Nome completo:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o nome completo"
                                    id="nome"
                                    name="nome"
                                    onChange={manipularMudancas}
                                    value={cliente.nome}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel

                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Avenida/Rua/Alameda/Viela"
                                    id="endereco"
                                    name="endereco"
                                    onChange={manipularMudancas}
                                    value={cliente.endereco}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel

                                label="Numero:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="N°"
                                    id="numero"
                                    name="numero"
                                    onChange={manipularMudancas}
                                    value={cliente.numero}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel

                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Bairro/Vila..."
                                    id="bairro"
                                    name="bairro"
                                    onChange={manipularMudancas}
                                    value={cliente.bairro}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel

                                label="Cidade:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Cidade"
                                    id="cidade"
                                    name="cidade"
                                    onChange={manipularMudancas}
                                    value={cliente.cidade}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select
                                aria-label="Unidades Federativas brasileiras"
                                name="uf"
                                id="uf"
                                onChange={manipularMudancas}
                                value={cliente.uf}>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>

                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel

                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="CEP"
                                    id="cep"
                                    name="cep"
                                    onChange={manipularMudancas}
                                    value={cliente.cep} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"} >{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>

                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                            props.exibirFormulario(false);
                        }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}