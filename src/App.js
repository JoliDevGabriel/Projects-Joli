import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario.js';
import Time from './componentes/Time/Time.js';
import Rodape from './componentes/Rodape/Rodape.js';


function App() {

  const projetos = [
    {
      nome: '-',
      corPrimaria: '',
      corSegundaria: ''
      },
    {
    nome: 'Projeto 1',
    corPrimaria: '#0b3c43',
    corSegundaria: '#0b3c43c2'
    },
    {
    nome: 'Projeto 2',
    corPrimaria: '#ff396b',
    corSegundaria: '#ffc7df'
    },
    {
    nome: 'Projeto 3',
    corPrimaria: '#36a4c7',
    corSegundaria: '#8ac8dc'
    },
    {
    nome: 'Projeto 5',
    corPrimaria: '#b61a20',
    corSegundaria: '#b61a20a3'
    }
  ] 

  const [colaboradores, setColaboradores] = useState([])

  const aoNovocolaoradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    colaboradores === 0 ? console.log('Ta vazia') : console.log(colaboradores.length)

  }

  return (
    <div className="App">
      <Banner />
      <Formulario nome_projeto={projetos.map(projeto => projeto.nome)} aoColaboradorCadastrado={colaborador => aoNovocolaoradorAdicionado(colaborador)}/>

      {projetos.map(coletar_projetos => <Time 
      key={coletar_projetos.nome} 
      titulo_projeto={coletar_projetos.nome}
      corPrimaria={coletar_projetos.corPrimaria} corSecundaria={coletar_projetos.corSegundaria}
      colaboradores={colaboradores.filter(colaboradores => colaboradores.projetos === coletar_projetos.nome)}></Time>)}

       {/* {projetos.map(projetos => <Time key={projetos.nome} nome_time={projetos.nome} corPrimaria={projetos.corPrimaria} corSecundaria={projetos.corSegundaria} colaboradores={colaboradores.filter(colaboradores => colaboradores.projeto === projetos.nome)}/> )}  */}
       
       {/*isso é um for pra pegar cada um e recriar  */}


      <Rodape />
    </div>
  );
}

export default App;
