import { useState } from "react";
import Pagina from "../templates/Pagina";

import TabelaProdutos from "./tabelas/TabelaProdutos";
import FormCadProduto from "./formularios/FormCadProduto";
import { Container } from "react-bootstrap";
export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadProduto /> : <TabelaProdutos />
                    //If else só funciona fora do return
                }
            </Pagina>
        </Container>
    );
}