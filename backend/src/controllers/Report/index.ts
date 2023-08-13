import { Request, Response } from "express";
import { ReportService } from "../../services/Report";

export const ReportController = {
  async getStates(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const states = await report.getEstados(); 
      return res.json(states);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getYears(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const years = await report.getAnos(); 
      return res.json(years);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getCountReportDelivery(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const countDelivery = await report.getCountReportDelivery(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(countDelivery);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getCountActive(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const countActive = await report.getCountActive(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(countActive);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getClasses(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const classes = await report.getClasses(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(classes);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getBirths(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const births = await report.getBirths(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(births);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getCities(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const cities = await report.getCities(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(cities);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getAcquired(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const acquired = await report.getAcquired(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(acquired);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getReptiles(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const reptiles = await report.getReptiles(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(reptiles);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getStolen(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const stolen = await report.getStolen(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(stolen);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getDeaths(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const deaths = await report.getDeaths(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(deaths);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async getAnimalOrder(req: Request, res: Response) {
    const report = new ReportService();

    try {
      const { estado, ano_inicio, ano_fim } = req.query;
      const order = await report.getAnimalOrder(String(estado), Number(ano_inicio), Number(ano_fim)); 

      if (Object.keys(report.errors).length && report.errors['invalidData']) {
        return res.status(400).send({ error: report.errors['invalidData'].message });
      }

      if (Object.keys(report.errors).length && report.errors['invalidYear']) {
        return res.status(400).send({ error: report.errors['invalidYear'].message });
      }

      return res.json(order);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },
}
