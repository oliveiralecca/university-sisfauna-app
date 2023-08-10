export interface IRelatorioService {
  getEstados(): void; 
  getAnos(): void;

  getCountSergipe(): void;
  getCountSergipeByPeriod(inicio: number, fim: number): void;

  getCountActive(): void;

  getClasses(): void;

  getMunicipios(): void;

  getNomesPopulares(): void;

  getActivity(): void;

  getDetails(): void;

  get50Obitos(): void;

  getOrdemAnimal(): void;
}
