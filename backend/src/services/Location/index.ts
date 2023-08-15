import { IErrors } from "../types";
import { ILocationService } from "./types";
import { Prisma, PrismaClient, locations } from "@prisma/client";

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

  async postClientLocation(clientLocation: Prisma.locationsCreateInput | undefined): Promise<locations | string | undefined> {
    try {
      if (!clientLocation || clientLocation.error) {
        this.errors['invalidLocation'] = {
          message: 'Dados de localização inválidos'
        };
        return;
      }

      const locationExists = await prisma.locations.findFirst({
        where: {
          ip: clientLocation.ip
        }
      });

      if (locationExists) {
        this.errors['existentLocation'] = {
          message: 'Localização já registrada'
        };
        return;
      }
      
      const register = await prisma.locations.create({
        data: clientLocation
      });

      return register;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAllLocations() {
    try {
      const locations = await prisma.locations.findMany({
        select: {
          city: true,
          latitude: true,
          longitude: true,
        },
        distinct: ['latitude', 'longitude']
      });

      if (!locations.length) {
        return "Nenhuma localização registrada";
      }

      return locations;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}
