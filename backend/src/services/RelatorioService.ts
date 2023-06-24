import { IErrors, IRelatorioService } from "./types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RelatorioService implements IRelatorioService {
  errors: IErrors;

  constructor() {
    this.errors = {};
  }

  async getCountSergipe() {
    try {
      return await prisma.relatorio.count({
        where: {
          estado: 'SERGIPE',
        }
      });
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getCountSergipeByPeriod(inicio: number, fim: number) {
    try {
      const inicioDigits = inicio.toString().length;
      const fimDigits = fim.toString().length;

      if (inicioDigits !== 4 || fimDigits !== 4) {
        this.errors['invalidYear'] = {
          message: 'Ano inválido'
        };
        return;
      }

      const result = await prisma.relatorio.count({
        where: {
          AND: [
            { estado: 'SERGIPE' },
            {
              ano: { gte: inicio, lte: fim }
            }
          ]
        }
      });

      if (!result) {
        return 'Nenhum registro encontrado';
      }

      return result;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getCountActive() {
    try {
      return await prisma.relatorio.count({
        where: {
          situacao_cadastral: 'Ativa',
        }
      });
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getClasses() {
    try {
      const classes: string[] = [];
      const result = await prisma.relatorio.findMany({
        select: {
          classe: true,
        },
        distinct: ['classe']
      });

      result.forEach((item) => classes.push(item.classe));

      return classes;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getEstados() {
    try {
      const estados: string[] = [];
      const result = await prisma.relatorio.findMany({
        select: {
          estado: true,
        },
        distinct: ['estado']
      });

      result.forEach((item) => estados.push(item.estado));

      return estados;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getMunicipios() {
    try {
      const municipios: string[] = [];
      const result = await prisma.relatorio.findMany({
        select: {
          municipio: true,
        },
        distinct: ['municipio']
      });

      result.forEach((item) => municipios.push(item.municipio));

      return { 
        municipios, 
        count: municipios.length
      };
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default RelatorioService;
