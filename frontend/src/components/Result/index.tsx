/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useMemo } from "react";

import { useDataContext } from "../../contexts/dataContext";
import { BarGraph } from "../Graphs/Bar";
import { StackedBarGraph } from "../Graphs/StackedBar";
import * as S from "./styles";

export type ResultProps = {
  data: any[];
  category: string;
};

function generateKey(data: any) {
  return `${JSON.stringify(data)}-${Math.random().toString(36).substr(2, 9)}`;
}

export function Result({ data, category }: ResultProps) {
  const { error, setData } = useDataContext();

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

  const reptilesData = useMemo(() => {
    if (category === "question_repteis") {
      setData([]);
      return true;
    }
    return false;
  }, [category, setData]);

  if (data && typeof data === "string") {
    return <p>{data}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
      {reptilesData && data.length ? <StackedBarGraph data={data} /> : null}
    </S.Container>
  );
}
