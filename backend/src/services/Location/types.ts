export interface ILocationService {
  getClientLocation(clientIp: string | null): void;
}
