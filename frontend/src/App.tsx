import "./App.css";
import Questions from "./components/Questions/Questions";
import { useFetch } from "./hooks/useFetch";
import Answers from "./components/Answers/Answers";

type ObjectResponse = {
  [key: string]: string[];
} & { count: number; }

type ObjectArrayResponse = {
  [key: string]: string;
} & { id: number;}

type OrdemResponse = {
  ordem: string;
  total: number;
}

function App() {
  const { data: classes } = useFetch<string[]>("/classes"); // array
  const { data: ativas } = useFetch<number>("/ativas"); // number
  const { data: sergipe } = useFetch<number>("/sergipe"); // number
  const { data: municipios } = useFetch<ObjectResponse>("/municipios"); // count: number, municipios: array
  const { data: estados } = useFetch<string[]>("/estados"); // array
  const { data: nomePopulares } = useFetch<string[]>("/nomespopulares"); // array
  const { data: atividade } = useFetch<ObjectResponse>("/atividade");
  const { data: detalhes } = useFetch<ObjectArrayResponse[]>("/detalhes");
  const { data: obitos } = useFetch<ObjectArrayResponse[]>("/50obitos");
  const { data: ordemAnimal } = useFetch<OrdemResponse>("/ordemanimal");

  return (
    <>
      <h1>University Sisfauna App</h1>
      <div className="card">
        <Questions pergunta="1º Quantas pessoas jurídicas entregaram o Relatório de Atividades PotencialmentePoluidoras (RAPP) no estado de Sergipe?" />
        <Answers resposta={sergipe} />

        <Questions pergunta="2º Qual a quantidade da Situação Cadastral Ativa?" />
        <Answers resposta={ativas} />

        <Questions pergunta="3º Apresente quais são as Classes dos animais presentes no BD?" />
        <Answers resposta={classes} />

        <Questions pergunta="4º Quais os Estados que fazem parte do Sisfauna?" />
        <Answers resposta={estados} />

        <Questions pergunta="5° Liste todos os Municípios presentes no banco de dados, e a quantidade total dos mesmos." />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              {municipios?.municipios.map((municipio: string) => <span>{municipio}</span>)}
            </div>
            <span>{municipios?.count}</span>
          </div>
        } />

        <Questions pergunta="6º Liste o nome popular de todos os animais presentes na Sisfauna." />
        <Answers resposta={nomePopulares} />

        <Questions pergunta="7º Qual a Categoria de Atividade que mais se repete e o total dessa Categoria?" />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{atividade?.categoria}</span>
            <span>{atividade?.count}</span>
          </div>
        } />

        <Questions pergunta="8º Quais são os detalhes informados?" />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {detalhes?.map((detalhe: ObjectArrayResponse ) => <span>{detalhe.detalhe}</span>)}
          </div>
        } />

        <Questions pergunta="9º Qual o nome, ou os nomes Populares dos animais que tiveram óbitos igual a 50?" />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {obitos?.map((obito: ObjectArrayResponse ) => <span>{obito.nome_popular}</span>)}
          </div>
        } />

        <Questions pergunta="10º Qual a Ordem de animal que mais se repete e o total deste item?" />
        <Answers resposta={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{ordemAnimal?.ordem}</span>
            <span>{ordemAnimal?.total}</span>
          </div>
        } />
      </div>
    </>
  );
}

export default App;
