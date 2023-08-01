import { Router } from "express";
import { RelatorioController } from "./controllers/Relatorio";
import { LocationController } from "./controllers/Location";

import { getClientIp } from 'request-ip';
import { AuthController } from "./controllers/Auth";

const routes = Router();

const BASE_URL_V1 = '/api/v1';
const BASE_URL_V2 = '/api/v2';

/* V1 Routes */
routes.get(`${BASE_URL_V1}/sergipe`, RelatorioController.getCountSergipe);
routes.get(`${BASE_URL_V1}/sergipe/filtro`, RelatorioController.getCountSergipeByPeriod);

routes.get(`${BASE_URL_V1}/ativas`, RelatorioController.getCountActive);

routes.get(`${BASE_URL_V1}/classes`, RelatorioController.getClasses);

routes.get(`${BASE_URL_V1}/estados`, RelatorioController.getEstados);

routes.get(`${BASE_URL_V1}/municipios`, RelatorioController.getMunicipios);

routes.get(`${BASE_URL_V1}/nomespopulares`, RelatorioController.getNomesPopulares);

routes.get(`${BASE_URL_V1}/atividade`, RelatorioController.getActivity);

routes.get(`${BASE_URL_V1}/detalhes`, RelatorioController.getDetails);

routes.get(`${BASE_URL_V1}/obitos`, RelatorioController.get50Obitos);

routes.get(`${BASE_URL_V1}/ordemanimal`, RelatorioController.getOrdemAnimal);

/* V2 Routes */
// chamar essa rota no front ao fazer login (checa se o ip já existe no banco)
routes.post(`${BASE_URL_V2}/location`, LocationController.postClientLocation);

routes.post(`${BASE_URL_V2}/register`, AuthController.createUser);
routes.post(`${BASE_URL_V2}/login`, AuthController.userLogin);
// rota privada, tornar todas as anteriores (V1) como privadas
routes.get(`${BASE_URL_V2}/user`, AuthController.checkToken, AuthController.getUser);

export { routes };
