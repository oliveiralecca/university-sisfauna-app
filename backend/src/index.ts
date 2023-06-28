import express from "express";
import cors from "cors";
import routes from "./routes";
import { PrismaClient } from "@prisma/client";

const app = express();

const PORT = process.env.PORT || 3333;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(routes);

try {
  prisma.$connect();
  app.listen(PORT, () => {
    console.info('Aplicação rodando em http://localhost:3333')
  });
} catch (e) {
  console.error(e);
}


