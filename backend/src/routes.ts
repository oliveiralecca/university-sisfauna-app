import { Router } from "express";
import RelatorioController from "./controllers/RelatorioController";

const routes = Router();

routes.get('/', RelatorioController.getSergipe);

export default routes;
