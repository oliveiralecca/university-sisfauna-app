import { Prisma, location } from "@prisma/client";

export interface ILocationService {
  getClientLocation(clientIp: string | null): void;
  postClientLocation(clientLocation: Prisma.locationCreateInput | undefined): Promise<location | string | undefined>;
}
