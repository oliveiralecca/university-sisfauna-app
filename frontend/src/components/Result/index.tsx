/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useMemo } from "react";

import { useDataContext } from "../../contexts/dataContext";
import { BarGraph } from "../Graphs/Bar";
import * as S from "./styles";

export type ResultProps = {
  data: any[];
  category: string;
};

function generateKey(data: any) {
  return `${JSON.stringify(data)}-${Math.random().toString(36).substr(2, 9)}`;
}

// TODO: talvez usar o StackedBarChart nesse caso
// [
//   {
//     animal: "Teiú-Vermelho",
//     genres: {
//       male: 4,
//       female: 0,
//     },
//   },
//   {
//     animal: "Suaçubóia",
//     genres: {
//       male: 0,
//       female: 0,
//     },
//   },
//   {
//     animal: "Jiboia",
//     genres: {
//       male: 6,
//       female: 6,
//     },
//   },
//   {
//     animal: "Jararaca",
//     genres: {
//       male: 0,
//       female: 1,
//     },
//   },
//   {
//     animal: "Jabuti-Piranga",
//     genres: {
//       male: 6,
//       female: 6,
//     },
//   },
//   {
//     animal: "Surucucu",
//     genres: {
//       male: 1,
//       female: 1,
//     },
//   },
//   {
//     animal: "Jacaré-Do-Papo-Amarelo",
//     genres: {
//       male: 11,
//       female: 8,
//     },
//   },
//   {
//     animal: "Iguana",
//     genres: {
//       male: 8,
//       female: 7,
//     },
//   },
//   {
//     animal: "Teiú",
//     genres: {
//       male: 10,
//       female: 10,
//     },
//   },
//   {
//     animal: "Cascavel",
//     genres: {
//       male: 1,
//       female: 1,
//     },
//   },
//   {
//     animal: "Boa",
//     genres: {
//       male: 1,
//       female: 1,
//     },
//   },
//   {
//     animal: "Jacaré-Paguá",
//     genres: {
//       male: 0,
//       female: 0,
//     },
//   },
//   {
//     animal: "Salamanta",
//     genres: {
//       male: 2,
//       female: 2,
//     },
//   },
//   {
//     animal: "Jibóia",
//     genres: {
//       male: 2,
//       female: 2,
//     },
//   },
//   {
//     animal: "Píton-Real",
//     genres: {
//       male: 2,
//       female: 2,
//     },
//   },
//   {
//     animal: "Sucuri",
//     genres: {
//       male: 3,
//       female: 0,
//     },
//   },
//   {
//     animal: "Jararaca do Cerrado",
//     genres: {
//       male: 0,
//       female: 1,
//     },
//   },
//   {
//     animal: "Píton-Bola",
//     genres: {
//       male: 0,
//       female: 0,
//     },
//   },
//   {
//     animal: "Tartaruga-De-Esporões",
//     genres: {
//       male: 0,
//       female: 0,
//     },
//   },
//   {
//     animal: "Jabuti-Tinga",
//     genres: {
//       male: 4,
//       female: 4,
//     },
//   },
//   {
//     animal: "Tartaruga-Da-Amazônia",
//     genres: {
//       male: 0,
//       female: 0,
//     },
//   },
// ];

export function Result({ data, category }: ResultProps) {
  const { setData } = useDataContext();

  const numberData = useMemo(() => {
    if (category === "question_entrega" || category === "question_ativas") {
      setData([]);
      return true;
    }
    return false;
  }, [category, setData]);

  const textData = useMemo(() => {
    if (
      category === "question_nascimentos" ||
      category === "question_aquisicoes" ||
      category === "question_obitos"
    ) {
      setData([]);
      return true;
    }
    return false;
  }, [category, setData]);

  const barChartData = useMemo(() => {
    if (
      category === "question_classes" ||
      category === "question_furtados" ||
      category === "question_ordem"
    ) {
      setData([]);
      return true;
    }
    return false;
  }, [category, setData]);

  const citiesData = useMemo(() => {
    if (category === "question_municipios") {
      setData([]);
      return true;
    }
    return false;
  }, [category, setData]);

  if (data && typeof data === "string") {
    return <p>{data}</p>;
  }

  // TODO: add exibição do {error}
  return (
    <S.Container $checktype={typeof data}>
      {numberData && data ? <div>{data}</div> : null}
      {textData && data.length ? (
        <S.TextData>
          {data.map((d) => {
            const {
              nome_popular: nomePopular,
              nascimentos,
              aquisicoes,
              obitos,
            } = d;

            return (
              <Fragment key={generateKey(d)}>
                <p>{nomePopular}</p>
                <p>
                  {(nascimentos && "Nascimentos: ") ||
                    (aquisicoes && "Aquisições: ") ||
                    (obitos && "Óbitos: ")}
                  {nascimentos || aquisicoes || obitos}
                </p>
              </Fragment>
            );
          })}
        </S.TextData>
      ) : null}
      {barChartData && data.length ? <BarGraph data={data} /> : null}
      {citiesData && data.length ? (
        <S.CitiesData>
          {data.map((d) => (
            <p key={generateKey(d)}>{d}</p>
          ))}
        </S.CitiesData>
      ) : null}
    </S.Container>
  );
}
