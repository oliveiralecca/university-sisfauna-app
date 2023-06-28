import "./App.css";
import Questions from "./components/Questions/Questions";
import Answers from "./components/Answers/Answers";
import { useState } from "react";
import api from "./services/api";

type ObjectResponse = {
  [key: string]: string[];
} & { count: number };

type ObjectArrayResponse = {
  [key: string]: string;
} & { id: number };

type OrdemResponse = {
  ordem: string;
  total: number;
}

interface IState {
  sergipe?: number;
  ativas?: number;
  classes?: string[];
  estados?: string[];
  municipios?: ObjectResponse;
  nomesPopulares?: string[];
  atividade?: ObjectResponse;
  detalhes?: ObjectArrayResponse[];
  obitos?: ObjectArrayResponse[];
  ordemAnimal?: OrdemResponse;
}

function App() {
  const [data, setData] = useState<IState | null>(null);

  async function handleFetchData<T>(endpoint: string) {
    const response = await api.get<T>(endpoint);
    
    if (response)
      setData({
        ...data,
        [`${endpoint.slice(1)}`]: response.data,
      });
    console.log(response.data);
  }

  return (
    <>
      <h1>University Sisfauna App</h1>
      <div className="card">
        <Questions pergunta="1º Quantas pessoas jurídicas entregaram o Relatório de Atividades PotencialmentePoluidoras (RAPP) no estado de Sergipe?" />
        <Answers onClick={() => handleFetchData<number>("/sergipe")} resposta={data?.sergipe} />

        <Questions pergunta="2º Qual a quantidade da Situação Cadastral Ativa?" />
        <Answers onClick={() => handleFetchData<number>("/ativas")} resposta={data?.ativas} />

        <Questions pergunta="3º Apresente quais são as Classes dos animais presentes no BD?" />
        <Answers
          onClick={() => handleFetchData<string[]>("/classes")}
          resposta={
            <div className="classe-list-container">
              <ul className="classe-list">
                {data?.classes?.map((c: string, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            </div>
          }
        />

        <Questions pergunta="4º Quais os Estados que fazem parte do Sisfauna?" />
        <Answers
          onClick={() => handleFetchData<string[]>("/estados")}
          resposta={
            <div className="states-list-container">
              <ul className="states-list">
                {data?.estados?.map((est: string, index) => (
                  <li key={index}>{est}</li>
                ))}
              </ul>
            </div>
          }
        />

        <Questions pergunta="5° Liste todos os Municípios presentes no banco de dados, e a quantidade total dos mesmos." />
        <Answers
          onClick={() => handleFetchData<ObjectResponse>("/municipios")}
          resposta={
            <div className="city-list-container">
              <ul className="city-list">
                {data?.municipios?.municipios?.map((municipio: string, index: number) => (
                  <li key={index}>
                    <span className="are">{municipio}</span>
                  </li>
                ))}
              </ul>
              <span>{data?.municipios?.count}</span>
            </div>
          }
        />

        <Questions pergunta="6º Liste o nome popular de todos os animais presentes na Sisfauna." />
        <Answers
          onClick={() => handleFetchData<string[]>("/nomesPopulares")}
          resposta={
            <div className="name-list-container">
              <ul className="name-list">
                {data?.nomesPopulares?.map((name: string, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          }
        />

        <Questions pergunta="7º Qual a Categoria de Atividade que mais se repete e o total dessa Categoria?" />
        <Answers
          onClick={() => handleFetchData<ObjectResponse>("/atividade")}
          resposta={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Categoria: {data?.atividade?.categoria}</span>
              <span>Total: {data?.atividade?.count}</span>
            </div>
          }
        />

        <Questions pergunta="8º Quais são os detalhes informados?" />
        <Answers
          onClick={() => handleFetchData<ObjectArrayResponse[]>("/detalhes")}
          resposta={
            <div style={{ display: "flex", flexDirection: "column" }}>
              {data?.detalhes?.map((detalhe: ObjectArrayResponse, index: number) => (
                <li className="details" key={index}>
                  <span>{detalhe.detalhe}</span>
                </li>
              ))}
            </div>
          }
        />

        <Questions pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?" />
        <Answers
          onClick={() => handleFetchData<ObjectArrayResponse[]>("/50obitos")}
          resposta={
            <div className="deads-container-list">
              <ul className="deads-list">
                {data?.obitos?.map((obito: ObjectArrayResponse) => (
                  <li>{obito.nome_popular}</li>
                ))}
              </ul>
            </div>
          }
        />

        <Questions pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?" />
        {/* <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {obitos?.map((obito: ObjectArrayResponse ) => <span>{obito.nome_popular}</span>)}
          </div>
        } /> */}

        <Questions pergunta="10º Qual a Ordem de animal que mais se repete e o total deste item?" />
        <Answers
          onClick={() => handleFetchData<OrdemResponse>("/ordemAnimal")}
          resposta={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Ordem: {data?.ordemAnimal?.ordem}</span>
              <span>Total: {data?.ordemAnimal?.total}</span>
            </div>
          }
        />
      </div>
    </>
  );
}
export default App;
