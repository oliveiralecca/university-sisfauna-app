import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  async getSergipe(req: Request, res: Response) {
    try {
      const se = await prisma.relatorio.findMany({
        where: {
          estado: 'SERGIPE',
          ano: 2020,
          municipio: 'ARACAJU'
        }
      });
  
      return res.json(se);
    } catch (e: any) {
      return res.json({ error: e.message });
    }
  }
}
