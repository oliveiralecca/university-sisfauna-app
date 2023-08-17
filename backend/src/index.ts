import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { PrismaClient } from "@prisma/client";

const app = express();

const PORT = process.env.PORT || 3333;

const prisma = new PrismaClient();

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin"],
  })
);
app.use(express.json());
app.use(routes);

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.info("Conectado ao banco de dados");
  } catch (e) {
    console.error(e);
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
    console.info(`Aplicação rodando na porta ${PORT}`);
  });
});
