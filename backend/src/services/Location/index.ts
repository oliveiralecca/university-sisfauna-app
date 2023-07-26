import { IErrors } from "../types";
import { ILocationService } from "./types";
import { Prisma, PrismaClient, location } from "@prisma/client";

const prisma = new PrismaClient();

export class LocationService implements ILocationService {
  errors: IErrors;

  constructor() {
    this.errors = {};
  }

  async getClientLocation(clientIp: string | null) {
    try {
      if (!clientIp) {
        this.errors['invalidIp'] = {
          message: 'IP inválido'
        };
        return;
      }
      return (await fetch(`https://ipapi.co/${clientIp}/json/`)).json();
    } catch (e) {
      console.error(e);
    }
  }

  async postClientLocation(clientLocation: Prisma.locationCreateInput | undefined): Promise<location | string | undefined> {
    try {
      if (!clientLocation) {
        this.errors['invalidLocation'] = {
          message: 'Dados de localização inválidos'
        };
        return;
      }
      
      const register = await prisma.location.create({
        data: clientLocation
      });

      if (!register) {
        return 'Não foi possível registrar a localização';
      }

      return register;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}
