export interface IErrors {
  [operation: string]: {
    message: string;
  }
}

export interface IRelatorioService {
  getCountSergipe(): void;
  getCountSergipeByPeriod(inicio: number, fim: number): void;

  getCountActive(): void;

  getClasses(): void;

  getEstados(): void;

  getMunicipios(): void;

  getNomesPopulares(): void;

  getActivity(): void;

  getDetails(): void;

  get50Obitos(): void;

  getOrdemAnimal(): void;
}
