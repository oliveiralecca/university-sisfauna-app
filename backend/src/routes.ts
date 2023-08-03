import { Router } from "express";
import { RelatorioController } from "./controllers/Relatorio";
import { LocationController } from "./controllers/Location";

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

/* V2 Routes -> with authentication */
routes.post(`${BASE_URL_V2}/location`, LocationController.postClientLocation);

routes.post(`${BASE_URL_V2}/register`, AuthController.createUser);
routes.post(`${BASE_URL_V2}/login`, AuthController.userLogin);

routes.get(`${BASE_URL_V2}/sergipe`, AuthController.checkToken, RelatorioController.getCountSergipe);
routes.get(`${BASE_URL_V2}/sergipe/filtro`, AuthController.checkToken, RelatorioController.getCountSergipeByPeriod);

routes.get(`${BASE_URL_V2}/ativas`, AuthController.checkToken, RelatorioController.getCountActive);

routes.get(`${BASE_URL_V2}/classes`, AuthController.checkToken, RelatorioController.getClasses);

routes.get(`${BASE_URL_V2}/estados`, AuthController.checkToken, RelatorioController.getEstados);

routes.get(`${BASE_URL_V2}/municipios`, AuthController.checkToken, RelatorioController.getMunicipios);

routes.get(`${BASE_URL_V2}/nomespopulares`, AuthController.checkToken, RelatorioController.getNomesPopulares);

routes.get(`${BASE_URL_V2}/atividade`, AuthController.checkToken, RelatorioController.getActivity);

routes.get(`${BASE_URL_V2}/detalhes`, AuthController.checkToken, RelatorioController.getDetails);

routes.get(`${BASE_URL_V2}/obitos`, AuthController.checkToken, RelatorioController.get50Obitos);

routes.get(`${BASE_URL_V2}/ordemanimal`, AuthController.checkToken, RelatorioController.getOrdemAnimal);

export { routes };
