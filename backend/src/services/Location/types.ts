import { Prisma, locations } from "@prisma/client";

export interface ILocationService {
  getClientLocation(clientIp: string | null): void;
  postClientLocation(clientLocation: Prisma.locationsCreateInput | undefined): Promise<locations | string | undefined>;
}
