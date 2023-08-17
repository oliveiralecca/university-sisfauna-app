import { useCallback, useEffect, useState } from "react";

import { Box } from "../../components/Box";
import { BrazilMap } from "../../components/BrazilMap";
import { Button } from "../../components/Button";
import { PieGraph } from "../../components/Graphs/Pie";
import { Data } from "../../components/Graphs/Pie/types";
import { Loader } from "../../components/Loader";
import { Result } from "../../components/Result";
import { useDataContext } from "../../contexts/dataContext";
import { questionsOptions } from "./helpers";
import * as S from "./styles";

export function Dashboard() {
  const [statesOptions, setStatesOptions] = useState([]);
  const [yearsOptions, setYearsOptions] = useState([]);
  const [locationsData, setLocationsData] = useState<Data[]>([]);

  const {
    data,
    loading,
    loadError,
    emptyFilterError,
    setEmptyFilterError,
    currentBoxValue,
    fetchData,
    locationsResponse,
    emptyLocations,
    statesResponse,
    yearsResponse,
  } = useDataContext();

  const onFetchData = useCallback(() => {
    const hasSelectedCategory = Object.values(currentBoxValue.categoria).every(
      (v) => v.length > 0
    );

    const hasSelectedState = Object.values(currentBoxValue.estado).every(
      (v) => v.length > 0
    );

    const hasSelectedInitYear = Object.values(
      currentBoxValue.ano_inicial
    ).every((v) => v.length > 0);

    if (!hasSelectedCategory) {
      setEmptyFilterError((oldValue) => ({
        ...oldValue,
        categoria: "Selecione uma categoria.",
      }));
    }

    if (!hasSelectedState) {
      setEmptyFilterError((oldValue) => ({
        ...oldValue,
        estado: "Selecione um estado.",
      }));
    }

    if (!hasSelectedInitYear) {
      setEmptyFilterError((oldValue) => ({
        ...oldValue,
        ano_inicial: "Selecione um ano inicial.",
      }));
    }

    if (hasSelectedCategory && hasSelectedState && hasSelectedInitYear) {
      return fetchData(currentBoxValue);
    }

    return false;
  }, [currentBoxValue, fetchData, setEmptyFilterError]);

  const onReload = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }, []);

  useEffect(() => {
    if (statesResponse.length) {
      const states = statesResponse.map((state: string) => ({
        value: state.toLowerCase(),
        text: state,
      }));

      setStatesOptions(states);
    }

    if (yearsResponse.length) {
      const years = yearsResponse.map((year: string) => ({
        value: year,
        text: year,
      }));

      setYearsOptions(years);
    }
  }, [statesResponse, yearsResponse]);

  useEffect(() => {
    if (locationsResponse.length) {
      const locationsCount = locationsResponse?.reduce(
        (acc: { [key: string]: number }, location: { city: string }) => {
          const { city } = location;

          if (acc[city]) {
            acc[city] += 1;
          } else {
            acc[city] = 1;
          }

          return acc;
        },
        {} as { [key: string]: number }
      );

      Object.entries(locationsCount).forEach(([name, value]) => {
        const loc: Data[] = [];
        loc.push({ name, value: Number(value) });

        setLocationsData(loc);
      });
    }
  }, [locationsResponse]);

  if (loadError) {
    return (
      <S.ErrorState>
        {loadError}
        <Button path="" label="Recarregar" onClick={onReload} />
      </S.ErrorState>
    );
  }

  return (
    <>
      {!statesOptions.length || !yearsOptions.length ? (
        <Loader size="50" />
      ) : (
        <S.Container>
          <Box
            size="m"
            title="Categoria da busca"
            boxId="categoria"
            options={questionsOptions}
            $hasSelect
            $error={emptyFilterError.categoria}
          >
            {emptyFilterError.categoria ||
              currentBoxValue.categoria.displayValue}
          </Box>

          <S.Filters>
            <Box
              size="s"
              title="Estado"
              boxId="estado"
              options={statesOptions}
              $hasSelect
              $error={emptyFilterError.estado}
            >
              {emptyFilterError.estado || currentBoxValue.estado.displayValue}
            </Box>
            <Box
              size="s"
              title="Ano inicial"
              boxId="ano_inicial"
              options={yearsOptions}
              $hasSelect
              $error={emptyFilterError.ano_inicial}
            >
              {emptyFilterError.ano_inicial ||
                currentBoxValue.ano_inicial.displayValue}
            </Box>
            <Box
              size="s"
              title="Ano final"
              boxId="ano_final"
              options={yearsOptions}
              $hasSelect
            >
              {currentBoxValue.ano_final.displayValue}
            </Box>
          </S.Filters>

          <S.ButtonContainer disabled={loading}>
            <Button
              path=""
              label={loading ? <Loader /> : "Buscar"}
              disabled={loading}
              onClick={onFetchData}
            />
          </S.ButtonContainer>

          <Box size="l" title="Resultado" boxId="resultado">
            {loading ? <Loader /> : <Result data={data} />}
          </Box>
          <Box size="l" title="Acessos por localização" boxId="localizacao">
            {emptyLocations ? (
              <div className="emptyLocations">{emptyLocations}</div>
            ) : (
              <>
                <BrazilMap />
                <PieGraph data={locationsData} />
              </>
            )}
          </Box>
        </S.Container>
      )}
    </>
  );
}
