import { useEffect } from "react";
import Pagina from "../../templates/Pagina";
import { Alert } from "react-bootstrap";

export default function TelaMensagem(props){
    useEffect(()=>{ //didMount -> se ele foi montado
        setTimeout(()=>{
            props.setMostrarMensagem(false)
        },3000);
    },[]); 
    return(
        <Pagina>
            <Alert variant={props.tipo}>
                <p>{props.mensagem}</p>
            </Alert>
        </Pagina>
    );
}