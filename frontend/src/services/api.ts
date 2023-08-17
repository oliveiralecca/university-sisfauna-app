/* eslint-disable camelcase */
import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "https://sisfauna-api.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@sisfauna:token")}`,
  }
});

const API_V2 = "/api/v2";

export async function setUserLocation() {
  return api.post(`${API_V2}/location`);
}

export async function getLocations() {
  return api
    .get(`${API_V2}/locations`)
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function userLogin(email: string, password: string) {
  return api
    .post(`${API_V2}/login`, { email, password })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function createUser(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  return api
    .post(`${API_V2}/register`, {
      name,
      email,
      password,
      confirmPassword,
    })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getEstados() {
  return api
    .get(`${API_V2}/estados`)
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getAnos() {
  return api
    .get(`${API_V2}/anos`)
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getCountReportDelivery(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/entregarelatorio`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getCountActive(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/ativas`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getClasses(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/classes`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getBirths(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/nascimentos`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getMunicipios(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/municipios`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getAcquired(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/aquisicoes`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getReptiles(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/repteis`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getStolen(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/furtados`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getDeaths(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/obitos`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}

export async function getAnimalOrder(
  estado: string,
  ano_inicio: number,
  ano_fim: number
) {
  return api
    .get(`${API_V2}/ordemanimal`, { params: { estado, ano_inicio, ano_fim } })
    .then((response: AxiosResponse) => response.data)
    .catch((reason: AxiosError) => {
      if (reason.response?.status === 400) {
        return reason.response;
      }
      return false;
    });
}
