import "./App.css";
import Questions from "./components/Questions/Questions";
import { useFetch } from "./hooks/useFetch";
import Answers from "./components/Answers/Answers";

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

function App() {
  const { data: sergipe } = useFetch<number>("/sergipe"); // number - q1 ✅
  const { data: ativas } = useFetch<number>("/ativas"); // number - q2 ✅
  const { data: classes } = useFetch<string[]>("/classes"); // array - q3 ✅
  const { data: estados } = useFetch<string[]>("/estados"); // array - q4 ✅
  const { data: municipios } = useFetch<ObjectResponse>("/municipios"); // count: number, municipios: array - q5 ✅
  const { data: nomesPopulares } = useFetch<string[]>("/nomespopulares"); // array - q6 ✅
  const { data: atividade } = useFetch<ObjectResponse>("/atividade"); // - q7 ✅
  const { data: detalhes } = useFetch<ObjectArrayResponse[]>("/detalhes"); // q8 ✅
  const { data: obitos } = useFetch<ObjectArrayResponse[]>("/50obitos"); // q9 ✅
  const { data: ordemAnimal } = useFetch<OrdemResponse>("/ordemanimal"); // q10 ✅

  return (
    <>
      <h1>University Sisfauna App</h1>
      <div className="card">
        <Questions pergunta="1º Quantas pessoas jurídicas entregaram o Relatório de Atividades PotencialmentePoluidoras (RAPP) no estado de Sergipe?" />
        <Answers resposta={sergipe} />

        <Questions pergunta="2º Qual a quantidade da Situação Cadastral Ativa?" />
        <Answers resposta={ativas} />

        <Questions pergunta="3º Apresente quais são as Classes dos animais presentes no BD?" />
        <Answers
          resposta={
            <div className="classe-list-container">
              <ul className="classe-list">
                {classes?.map((c: string, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            </div>
          }
        />

        <Questions pergunta="4º Quais os Estados que fazem parte do Sisfauna?" />
        <Answers resposta={<div className="states-list-container">
          <ul className="states-list">
            {estados?.map((est: string, index) => <li key={index}>{est}</li>)}
          </ul>
        </div>} />

        <Questions pergunta="5° Liste todos os Municípios presentes no banco de dados, e a quantidade total dos mesmos." />
        <Answers resposta={
          <div className="city-list-container">
            <ul className="city-list">
              {municipios?.municipios.map((municipio: string, index) => <li key={index}><span className="are">{municipio}</span></li>)}
            </ul>
            <span>{municipios?.count}</span>
          </div>
        } />

        <Questions pergunta="6º Liste o nome popular de todos os animais presentes na Sisfauna." />
        <Answers resposta={<div className="name-list-container">
          <ul className="name-list">
            {nomesPopulares?.map((name: string, index) => <li key={index}>{name}</li>)}
          </ul>
        </div>} />

        <Questions pergunta="7º Qual a Categoria de Atividade que mais se repete e o total dessa Categoria?" />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Categoria: {atividade?.categoria}</span>
            <span>Total: {atividade?.count}</span>
          </div>
        } />

        <Questions pergunta="8º Quais são os detalhes informados?" />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {detalhes?.map((detalhe: ObjectArrayResponse,index ) => <li className="details" key={index}><span>{detalhe.detalhe}</span></li>)}
          </div>
        } />

        <Questions pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?" />
        <Answers
          resposta={
            <div className="deads-container-list">
              <ul className="deads-list">
                {obitos?.map((obito: ObjectArrayResponse) => (
                  <li>{obito.nome_popular}</li>
                ))}
              </ul>
            </div>
          }
        />

        <Questions pergunta="10º Qual a Ordem de animal que mais se repete e o total deste item?" />
         <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Ordem: {ordemAnimal?.ordem}</span>
            <span>Total: {ordemAnimal?.total}</span>
          </div>
        } />
      </div>
    </>
  );
}

export default App;
