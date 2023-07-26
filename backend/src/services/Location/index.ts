import { IErrors } from "../types";
import { ILocationService } from "./types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class LocationService implements ILocationService {
  errors: IErrors;

  constructor() {
    this.errors = {};
  }

  async getClientLocation(clientIp?: string) {
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
}
