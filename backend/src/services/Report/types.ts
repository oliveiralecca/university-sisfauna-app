export interface IReportService {
  getEstados(): void; 
  getAnos(): void;

  getCountReportDelivery(estado: string, inicio: number, fim?: number): void;

  getCountActive(estado: string, inicio: number, fim?: number): void;

  getClasses(estado: string, inicio: number, fim?: number): void;

  getBirths(estado: string, inicio: number, fim?: number): void;

  getCities(estado: string, inicio: number, fim?: number): void;

  getAcquired(estado: string, inicio: number, fim?: number): void;

  getReptiles(estado: string, inicio: number, fim?: number): void;

  getStolen(estado: string, inicio: number, fim?: number): void;

  getDeaths(estado: string, inicio: number, fim?: number): void;

  getAnimalOrder(estado: string, inicio: number, fim?: number): void;
}
