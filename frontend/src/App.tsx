import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Questions from "./components/Questions/Questions";
import { useFetch } from "./hooks/useFetch";
import Answers from "./components/Answers/Answers";


function App() {
  const [count, setCount] = useState(0);
  const { data: classes } = useFetch<string[]>("http://localhost:3333/api/v1/classes");
  const { data: ativas } = useFetch<string[]>("http://localhost:3333/api/v1/ativas");
  const { data: sergipe } = useFetch<string[]>("http://localhost:3333/api/v1/sergipe");
  //const { data: municipio } = useFetch<string[]>("http://localhost:3333/api/v1/municipios");
  const { data: estados } = useFetch<string[]>("http://localhost:3333/api/v1/estados");
  const { data: nomePopulares } = useFetch<string[]>("http://localhost:3333/api/v1/nomespopulares");
  //const { data: atividade } = useFetch<string[]>("http://localhost:3333/api/v1/atividade");
  //const { data: detalhes } = useFetch<string[]>("http://localhost:3333/api/v1/detalhes");
  //const { data: obitos } = useFetch<string[]>("http://localhost:3333/api/v1/obitos");
  //const { data: ordemAnimal } = useFetch<string[]>("http://localhost:3333/api/v1/ordemanimal");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>University Sisfauna App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Questions
          pergunta="1º Quantas pessoas jurídicas entregaram o Relatório de Atividades Potencialmente
Poluidoras (RAPP) no estado de Sergipe?"
        />
        <Answers resposta={sergipe} />

        <Questions
          pergunta="2º Qual a quantidade da Situação Cadastral Ativa?
"
        />
        <Answers resposta={ativas} />
        <Questions
          pergunta="3º Apresente quais são as Classes dos animais presentes no BD?"
        />
        <Answers resposta={classes} />
        <Questions
          pergunta="4º Quais os Estados que fazem parte do Sisfauna?
"
        />
        <Answers resposta={estados} />
        <Questions
          pergunta="5° Liste todos os Municípios presentes no banco de dados, e a quantidade total dos
          mesmos.

"
        />
        {/* <Answers resposta={console.log(municipios)}/> */}
        

        <Questions
          pergunta="6º Liste o nome popular de todos os animais presentes na Sisfauna.

"
        />
        <Answers  resposta={nomePopulares}/>
        <Questions
          pergunta="7º Qual a Categoria de Atividade que mais se repete e o total dessa Categoria?

"
        />
        
        <Questions
          pergunta="8º Quais são os detalhes informados?

"
        />
        
       

        <Questions
          pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?
"
        />
        
        <Questions
          pergunta="10º Qual a Ordem de animal que mais se repete e o total deste item?
"
        />
        
        
      </div>
    </>
  );
}

export default App;
