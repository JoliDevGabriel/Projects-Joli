
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aodigitar = (evento) => {
        props.alterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aodigitar} required={props.obrigatorio} placeholder= {props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;
