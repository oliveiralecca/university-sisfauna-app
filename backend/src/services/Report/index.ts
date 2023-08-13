import { IErrors } from "../types";
import { IReportService } from "./types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ReportService implements IReportService {
  errors: IErrors;

  constructor() {
    this.errors = {};
  }

  private validateInputData(estado: string, inicio: number, fim?: number) {
    if (!estado || !inicio) {
      this.errors["invalidData"] = {
        message: "Estado e ano inicial são obrigatórios",
      };
      return;
    }

    const inicioDigits = inicio.toString().length;
    const fimDigits = fim ? fim.toString().length : undefined;

    if (inicioDigits !== 4 || (fimDigits && fimDigits !== 4)) {
      this.errors["invalidYear"] = {
        message: "Ano inválido",
      };
      return;
    }
  }

  async getEstados() {
    try {
      const estados: string[] = [];
      const result = await prisma.reports.findMany({
        select: {
          estado: true,
        },
        distinct: ["estado"],
      });

      result.forEach((item) => estados.push(item.estado));

      return estados.sort();
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAnos() {
    try {
      const anos: string[] = [];
      const anosNum: number[] = [];

      const result = await prisma.reports.findMany({
        select: {
          ano: true,
        },
        distinct: ["ano"],
      });

      result.forEach((item) => anosNum.push(item.ano));
      anosNum
        .sort((a, b) => a - b)
        .forEach((item) => anos.push(item.toString()));

      return anos;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getCountReportDelivery(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const result = await prisma.reports.count({
        where: {
          AND: [
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      return result;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getCountActive(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const result = await prisma.reports.count({
        where: {
          situacao_cadastral: "Ativa",
          AND: [
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      return result;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getClasses(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const classes: { classe: string; count: number }[] = [];

      const result = await prisma.reports.groupBy({
        by: ["classe"],
        orderBy: {
          _count: {
            classe: "desc",
          },
        },
        _count: {
          classe: true,
        },
        where: {
          AND: [
            { classe: { not: "Not Assigned" } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      result.forEach((item) =>
        classes.push({ classe: item.classe, count: item._count.classe })
      );

      return classes;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getBirths(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const result = await prisma.reports.groupBy({
        by: ["nome_popular"],
        orderBy: {
          _count: {
            nascimentos: "desc",
          },
        },
        _count: {
          nascimentos: true,
        },
        take: 1,
        where: {
          AND: [
            { nome_popular: { not: "não consta" } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      const nome_popular = result[0].nome_popular;
      const nascimentos = result[0]._count.nascimentos;

      return [
        {
          nome_popular,
          nascimentos,
        },
      ];
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getCities(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const cities: string[] = [];

      const result = await prisma.reports.findMany({
        select: {
          municipio: true,
        },
        distinct: ["municipio"],
        where: {
          AND: [
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      result.forEach((item) => cities.push(item.municipio));

      return cities.sort();
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAcquired(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const result = await prisma.reports.groupBy({
        by: ["nome_popular"],
        orderBy: {
          _count: {
            aquisicoes: "desc",
          },
        },
        _count: {
          aquisicoes: true,
        },
        take: 1,
        where: {
          AND: [
            { nome_popular: { not: "não consta" } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      const nome_popular = result[0].nome_popular;
      const aquisicoes = result[0]._count.aquisicoes;

      return [
        {
          nome_popular,
          aquisicoes,
        },
      ];
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getReptiles(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const reptiles: {
        animal: string;
        genres: { male: number; female: number };
      }[] = [];

      const result = await prisma.reports.groupBy({
        by: ["nome_popular"],
        _count: {
          machos_plantel_atual: true,
          femeas_plantel_atual: true,
        },
        where: {
          classe: "Reptilia",
          AND: [
            { nome_popular: { not: "não consta" } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      result.forEach((item) =>
        reptiles.push({
          animal: item.nome_popular,
          genres: {
            male: item._count.machos_plantel_atual,
            female: item._count.femeas_plantel_atual,
          },
        })
      );

      return reptiles;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getStolen(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const stolen: { animal: string; furtos_roubos: number }[] = [];

      const result = await prisma.reports.groupBy({
        by: ["nome_popular"],
        orderBy: {
          _count: {
            furtos_roubos: "desc",
          },
        },
        _count: {
          furtos_roubos: true,
        },
        where: {
          AND: [
            { nome_popular: { not: "não consta" } },
            { furtos_roubos: { gt: 0 } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      result.forEach((item) =>
        stolen.push({
          animal: item.nome_popular,
          furtos_roubos: item._count.furtos_roubos,
        })
      );

      if (!stolen.length) {
        return "Nenhum furto ou roubo no período selecionado";
      }

      return stolen;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getDeaths(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const result = await prisma.reports.groupBy({
        by: ["nome_popular"],
        orderBy: {
          _count: {
            obitos: "desc",
          },
        },
        _count: {
          obitos: true,
        },
        take: 1,
        where: {
          AND: [
            { nome_popular: { not: "não consta" } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      const nome_popular = result[0].nome_popular;
      const obitos = result[0]._count.obitos;

      return [
        {
          nome_popular,
          obitos,
        },
      ];
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAnimalOrder(estado: string, inicio: number, fim?: number) {
    try {
      this.validateInputData(estado, inicio, fim);

      const orders: { ordem: string; count: number }[] = [];

      const result = await prisma.reports.groupBy({
        by: ["ordem"],
        orderBy: {
          _count: {
            ordem: "desc",
          },
        },
        _count: {
          ordem: true,
        },
        where: {
          AND: [
            { ordem: { not: "Not Assigned" } },
            { estado: estado.toUpperCase() },
            {
              ano: { gte: inicio, lte: fim ? fim : undefined },
            },
          ],
        },
      });

      if (!result) {
        return "Nenhum registro encontrado";
      }

      result.forEach((item) =>
        orders.push({ ordem: item.ordem, count: item._count.ordem })
      );

      return orders;
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}
