import { useState } from "react";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategoria";
import Pagina from "../templates/Pagina";
import { Container } from "react-bootstrap";
export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCategoria /> : <TabelaCategorias />
                }
            </Pagina>
        </Container>
    );
}