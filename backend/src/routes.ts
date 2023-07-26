import { Router } from "express";
import { RelatorioController } from "./controllers/Relatorio";
import { LocationController } from "./controllers/Location";

import { getClientIp } from 'request-ip';

const routes = Router();

const BASE_URL_V1 = '/api/v1';

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

const BASE_URL_V2 = '/api/v2';

// test route
routes.get(`${BASE_URL_V2}/location`, LocationController.getClientLocation);

// test route
routes.get('/local', function(req, res) {  
  const ipAddress = getClientIp(req);
  res.json(ipAddress);
});

export { routes };
