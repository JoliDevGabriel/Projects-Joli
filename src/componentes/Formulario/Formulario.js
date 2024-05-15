import { useState } from 'react'
import Botao from '../Botao/Botao'


import './Formulario.css'


function Formulario (props) {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [projetos, setProjeto] = useState('');

    const enviando = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            projetos
        })

        setNome('')
        setImagem('')
        setProjeto('')
        
    }

    return (
        <section className="formulario">
            <form onSubmit={enviando}>
                <div className='campo-texto'>
                <label>Nome</label>
                    <input 
                    placeholder='Digite aqui seu Nome'
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}>
                    </input>

                    <label>Imagem</label>
                    <input 
                    placeholder='Digite aqui a URL da sua imagem'
                    value={imagem}
                    onChange={(event) => setImagem(event.target.value)}>
                    </input>

                    <div className='lista-suspensa '>
                        <label>Projetos</label>
                        <select
                        onChange={(event) => setProjeto(event.target.value)}
                        value={projetos}>
                        
                        
                        {props.nome_projeto.map(projetos => <option key={projetos}>{projetos}</option>)}

                        </select>
                    </div>
                </div>
                <Botao> Ingressar </Botao>
                {/* <button type="submit">Enviar</button> */}
            </form>
        </section>
    )
}

export default Formulario

// const Formulario = (props) => {

//     const [nome, setNome] = useState('')
//     const [imagem, setImagem] = useState('')
//     const [projeto, setProjeto] = useState('')
   
//     const aoSalvar = (evento) => {
//         evento.preventDefault(); //ele vai previnir o comportamento padrão que é recarregar
//         props.aoColaboradorCadastrado({
//             nome,
//             imagem,
//             projeto
//         })
//         setNome('');
//     };
        

//     return (
//         <section className="formulario">
//             <form onSubmit={aoSalvar}>
//                 <h2>Preencha os dados para ingressar no projeto</h2>
//                 <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite aqui seu nome" value={nome} alterado={valor => setNome(valor)} />

//                 <CampoTexto label="Imagem" placeholder="Digite aqui a URL da sua imagem" value={imagem} alterado={valor => setImagem(valor)} />

//                 <ListaSuspensa obrigatorio={true}  label="Projeto" itens={props.nome_projeto} value={projeto} alterado={valor => setProjeto(valor)}/>
//                 <Botao> 
//                     Ingressar
//                 </Botao>

//             </form>
//         </section>

//     )
// }

// export default Formulario