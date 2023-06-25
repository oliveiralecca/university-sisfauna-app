import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Questions from "./components/Questions/Questions";

function App() {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Questions
          pergunta="1º Quantas pessoas jurídicas entregaram o Relatório de Atividades Potencialmente
Poluidoras (RAPP) no estado de Sergipe?"
          resposta="aassasas"
        />
        <Questions
          pergunta="2º Qual a quantidade da Situação Cadastral Ativa?
"
          resposta="aassasas"
        />
        <Questions
          pergunta="3º Apresente quais são as Classes dos animais presentes no BD?
"
          resposta="aassasas"
        />
        <Questions
          pergunta="4º Quais os Estados que fazem parte do Sisfauna?
"
          resposta="aassasas"
        />
        <Questions
          pergunta="5° Liste todos os Municípios presentes no banco de dados, e a quantidade total dos
          mesmos.

"
          resposta="aassasas"
        />
        <Questions
          pergunta="6º Liste o nome popular de todos os animais presentes na Sisfauna.

"
          resposta="aassasas"
        />
        <Questions
          pergunta="7º Qual a Categoria de Atividade que mais se repete e o total dessa Categoria?

"
          resposta="aassasas"
        />
        <Questions
          pergunta="8º Quais são os detalhes informados?

"
          resposta="aassasas"
        />
        <Questions
          pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?
"
          resposta="aassasas"
        />
        <Questions
          pergunta="10º Qual a Ordem de animal que mais se repete e o total deste item?
"
          resposta="aassasas"
        />
      </div>
    </>
  );
}

export default App;
