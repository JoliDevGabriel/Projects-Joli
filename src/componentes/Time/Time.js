import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
        
            <h3 style={{ borderColor: props.corPrimaria }}>{props.titulo_projeto}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} imagem={colaborador.imagem} fundo={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default Time