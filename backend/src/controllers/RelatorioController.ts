import { Request, Response } from "express";
import RelatorioService from "../services/RelatorioService";

export default {
  async getCountSergipe(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const qtdSergipe = await relatorio.getCountSergipe(); 
      return res.json(qtdSergipe);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getCountSergipeByPeriod(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const { ano_inicio, ano_fim } = req.query;
      const qtdSergipe = await relatorio.getCountSergipeByPeriod(Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(relatorio.errors).length) {
        return res.status(400).send({ error: relatorio.errors['invalidYear'].message });
      }

      return res.json(qtdSergipe);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getCountActive(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const ativas = await relatorio.getCountActive(); 
      return res.json(ativas);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getClasses(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const classes = await relatorio.getClasses(); 
      return res.json(classes);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getEstados(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const estados = await relatorio.getEstados(); 
      return res.json(estados);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getMunicipios(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const municipios = await relatorio.getMunicipios(); 
      return res.json(municipios);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getNomesPopulares(req: Request, res: Response) {
    const relatorio = new RelatorioService();

    try {
      const nomesPopulares = await relatorio.getNomesPopulares(); 
      return res.json(nomesPopulares);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  }
}
