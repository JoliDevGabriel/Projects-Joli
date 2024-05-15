import './Colaborador.css'

const Colaborador = (props) => {
    const css = { backgroundColor: props.fundo }
    return (
        <div className='colaborador' >
            <div className='cabecalho' style={css}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
            </div>
        </div>
    )
}

export default Colaborador