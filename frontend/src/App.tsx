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
};
type Loading = {
  isLoading: boolean;
};

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

interface ILoading {
  sergipe: Loading;
  ativas: Loading;
  classes: Loading;
  estados: Loading;
  municipios: Loading;
  nomesPopulares: Loading;
  atividade: Loading;
  detalhes: Loading;
  obitos: Loading;
  ordemAnimal: Loading;
}

function App() {
  const [data, setData] = useState<IState | null>(null);
  const [loading, setLoading] = useState<ILoading>({
    sergipe: { isLoading: true },
    ativas: { isLoading: true },
    classes: { isLoading: true },
    estados: { isLoading: true },
    municipios: { isLoading: true },
    nomesPopulares: { isLoading: true },
    atividade: { isLoading: true },
    detalhes: { isLoading: true },
    obitos: { isLoading: true },
    ordemAnimal: { isLoading: true },
  });

  async function handleFetchData<T>(endpoint: string) {
    const response = await api.get<T>(`/api/v1${endpoint}`);

    // chamar esse post na função de login quando implementada
    if (endpoint === '/sergipe') {
      const location = await api.post('/api/v2/location');
      console.log(location.data);
    }

    if (response) {
      setData({
        ...data,
        [`${endpoint.slice(1)}`]: response.data,
      });
      setLoading({
        ...loading,
        [`${endpoint.slice(1)}`]: { isLoading: false },
      });
    }
  }

  return (
    <>
      <h1>University Sisfauna App</h1>
      <div className="card">
        <Questions pergunta="1º Quantas pessoas jurídicas entregaram o Relatório de Atividades PotencialmentePoluidoras (RAPP) no estado de Sergipe?" />
        <Answers onClick={() => handleFetchData<number>("/sergipe")} resposta={data?.sergipe} isLoading={loading?.sergipe?.isLoading} />

        <Questions pergunta="2º Qual a quantidade da Situação Cadastral Ativa?" />
        <Answers onClick={() => handleFetchData<number>("/ativas")} resposta={data?.ativas} isLoading={loading?.ativas?.isLoading} />

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
          isLoading={loading?.classes?.isLoading}
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
          isLoading={loading?.estados?.isLoading}
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
          isLoading={loading?.municipios?.isLoading}
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
          isLoading={loading?.nomesPopulares?.isLoading}
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
          isLoading={loading?.atividade?.isLoading}
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
          isLoading={loading?.detalhes?.isLoading}
        />

        <Questions pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?" />
        <Answers
          onClick={() => handleFetchData<ObjectArrayResponse[]>("/obitos")}
          resposta={
            <div className="deads-container-list">
              <ul className="deads-list">
                {data?.obitos?.map((obito: ObjectArrayResponse, index: number) => (
                  <li key={index}>{obito.nome_popular}</li>
                ))}
              </ul>
            </div>
          }
          isLoading={loading?.obitos?.isLoading}
        />

        <Questions pergunta="10º Qual a Ordem de animal que mais se repete e o total deste item?" />
        <Answers
          onClick={() => handleFetchData<OrdemResponse>("/ordemAnimal")}
          resposta={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Ordem: {data?.ordemAnimal?.ordem}</span>
              <span>Total: {data?.ordemAnimal?.total}</span>
            </div>
          }
          isLoading={loading?.ordemAnimal?.isLoading}
        />
      </div>
    </>
  );
}
export default App;
