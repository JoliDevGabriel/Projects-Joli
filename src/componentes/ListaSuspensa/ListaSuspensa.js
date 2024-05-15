import './ListaSuspensa.css'
const ListaSuspensa = (props) => {


    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.alterado(evento.target.value)} required={props.obrigatorio}>
                {props.itens.map(projetos => <option key={projetos}>{projetos}</option>)} {/* Para cada item que recebe por parametro ele retorna uma option */}
            </select>
        </div>
    )
}

export default ListaSuspensa;