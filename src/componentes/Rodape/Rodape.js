import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='conteudo'>
                <div className="redesocial">
                    <a><img src="/imagens/fb.png" alt="Facebook"></img></a>
                    <a><img src="/imagens/ig.png" alt="Facebook"></img></a>
                    <a><img src="/imagens/tw.png" alt="Facebook"></img></a>
                </div>
                
                <p className="projeto">Projetos Joli</p>
                <div className="menus">
                    <a>Entenda nossos projetos</a>
                    <a>Faça parte do Time</a>
                    <a>Conheça nosso TI</a>
                </div>
                {/* <p>Desenvolvido por TI</p> */}
            </div>
        </div>
    )
}

export default Rodape