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

  async getNomesPopulares() {
    try {
      const nomesPopulares: string[] = [];
      const result = await prisma.relatorio.findMany({
        select: {
          nome_popular: true,
        },
        distinct: ['nome_popular']
      });

      result.filter((item) =>  item.nome_popular !== 'não consta').forEach((item) => nomesPopulares.push(item.nome_popular));

      return nomesPopulares;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getActivity() {
    try {
      const result = await prisma.relatorio.groupBy({
        by: ['categoria_de_atividade'],
        _count: {
          categoria_de_atividade: true
        },
        orderBy: {
          _count: {
            categoria_de_atividade: 'desc'
          }
        },
        take: 1
      });

      const categoria = result[0].categoria_de_atividade;
      const count = result[0]._count.categoria_de_atividade;

      return {
        categoria,
        count
      };
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getDetails() {
    try {
      const detalhes: {id: number; detalhe: string}[] = [];
      const result = await prisma.relatorio.findMany({
        select: {
          detalhe: true,
        },
        distinct: ['detalhe']
      });

      let id = 0;
      result.forEach((item) => detalhes.push({ id: id++, detalhe: item.detalhe }));

      return detalhes;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async get50Obitos() {
    try {
      const nomesPopulares: {id: number; nome_popular: string}[] = [];
      const result = await prisma.relatorio.groupBy({
        by: ['nome_popular'],
        where: {
          obitos: {
            equals: 50
          },
          nome_popular: {
            not: 'não consta'
          }
        }
      });

      let id = 0;
      result.forEach((item) => nomesPopulares.push({ id: id++, nome_popular: item.nome_popular }));

      return nomesPopulares;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getOrdemAnimal() {
    try {
      const ordemEncontrada: { _id: string; count: number; }[] = [];
      const result = await prisma.relatorio.aggregateRaw({
        pipeline: [
          { $group: { _id: '$ordem', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 1 },
        ],
        options: { allowDiskUse: true }
      });

      ordemEncontrada.push(result[0] as { _id: string; count: number; });

      const ordem = ordemEncontrada[0]._id;
      const total = ordemEncontrada[0].count;

      return {
        ordem,
        total
      };
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default RelatorioService;
