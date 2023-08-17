/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import {
  getAcquired,
  getAnimalOrder,
  getAnos,
  getBirths,
  getClasses,
  getCountActive,
  getCountReportDelivery,
  getDeaths,
  getEstados,
  getLocations,
  getMunicipios,
  getReptiles,
  getStolen,
} from "../services/api";

type EmptyFilterError = {
  categoria: string;
  estado: string;
  ano_inicial: string;
};

type ValuesKeys = {
  value: string;
  displayValue: string;
};

type CurrentBoxValue = {
  categoria: ValuesKeys;
  estado: ValuesKeys;
  ano_inicial: ValuesKeys;
  ano_final: ValuesKeys;
};

type DataState = {
  fetchData: (params: CurrentBoxValue) => void;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  loadError: string;
  setLoadError: Dispatch<SetStateAction<string>>;
  data: any;
  setData: Dispatch<SetStateAction<any>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  currentBoxValue: CurrentBoxValue;
  setCurrentBoxValue: Dispatch<SetStateAction<CurrentBoxValue>>;
  emptyFilterError: EmptyFilterError;
  setEmptyFilterError: Dispatch<SetStateAction<EmptyFilterError>>;
  emptyLocations: string;
  setEmptyLocations: Dispatch<SetStateAction<string>>;
  statesResponse: any;
  yearsResponse: any;
  locationsResponse: any;
};

type DataProviderProps = {
  children: ReactNode;
};

const DataContext = createContext<DataState | null>(null);

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<any>("");
  const [statesResponse, setStatesResponse] = useState([]);
  const [yearsResponse, setYearsResponse] = useState([]);
  const [locationsResponse, setLocationsResponse] = useState([]);
  const [currentBoxValue, setCurrentBoxValue] = useState<CurrentBoxValue>({
    categoria: {
      value: "",
      displayValue: "",
    },
    estado: {
      value: "",
      displayValue: "",
    },
    ano_inicial: {
      value: "",
      displayValue: "",
    },
    ano_final: {
      value: "",
      displayValue: "",
    },
  });
  const [error, setError] = useState<string>("");
  const [loadError, setLoadError] = useState<string>("");
  const [emptyFilterError, setEmptyFilterError] = useState<EmptyFilterError>({
    categoria: "",
    estado: "",
    ano_inicial: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [emptyLocations, setEmptyLocations] = useState<string>("");

  function responseTreatment(response: any) {
    if (response.status === 400) {
      setLoading(false);
      setError(response.data.error); // TODO: usar esse error na caixa de respostas
      return;
    }

    setData(response);
    setLoading(false);
  }

  const fetchData = useCallback(async (params: CurrentBoxValue) => {
    const estado = params.estado.value;
    const inicio = Number(params.ano_inicial.value);
    const fim = Number(params.ano_final.value);

    switch (params.categoria.value) {
      case "question_entrega": {
        setLoading(true);
        const response = await getCountReportDelivery(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_ativas": {
        setLoading(true);
        const response = await getCountActive(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_classes": {
        setLoading(true);
        const response = await getClasses(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_nascimentos": {
        setLoading(true);
        const response = await getBirths(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_municipios": {
        setLoading(true);
        const response = await getMunicipios(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_aquisicoes": {
        setLoading(true);
        const response = await getAcquired(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_repteis": {
        setLoading(true);
        const response = await getReptiles(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_furtados": {
        setLoading(true);
        const response = await getStolen(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_obitos": {
        setLoading(true);
        const response = await getDeaths(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      case "question_ordem": {
        setLoading(true);
        const response = await getAnimalOrder(estado, inicio, fim);
        responseTreatment(response);
        break;
      }

      default:
        break;
    }
  }, []);

  useEffect(() => {
    (async () => {
      const states = await getEstados();
      setStatesResponse(states);

      const years = await getAnos();
      setYearsResponse(years);

      const locations = await getLocations();
      setLocationsResponse(locations);

      if (!states || !years || !locations) {
        setLoadError("Algo deu errado, tente novamente.");
      }
    })();
  }, []);

  const values = useMemo(
    () => ({
      fetchData,
      error,
      setError,
      loadError,
      setLoadError,
      data,
      setData,
      loading,
      setLoading,
      currentBoxValue,
      setCurrentBoxValue,
      emptyFilterError,
      setEmptyFilterError,
      emptyLocations,
      setEmptyLocations,
      statesResponse,
      yearsResponse,
      locationsResponse,
    }),
    [
      currentBoxValue,
      data,
      emptyFilterError,
      emptyLocations,
      error,
      fetchData,
      loadError,
      loading,
      locationsResponse,
      statesResponse,
      yearsResponse,
    ]
  );

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("Data context must not be used outside its provider");
  }

  return context;
}

export { DataContext, DataProvider, useDataContext };
