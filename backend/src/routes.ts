import { Router } from "express";
import { ReportController } from "./controllers/Report";
import { LocationController } from "./controllers/Location";

import { AuthController } from "./controllers/Auth";

const routes = Router();

const BASE_URL_V2 = "/api/v2";

/* V2 Routes -> with authentication */
routes.post(`${BASE_URL_V2}/location`, LocationController.postClientLocation);
routes.get(
  `${BASE_URL_V2}/locations`,
  AuthController.checkToken,
  LocationController.getAllLocations
);

routes.post(`${BASE_URL_V2}/register`, AuthController.createUser);
routes.post(`${BASE_URL_V2}/login`, AuthController.userLogin);

routes.get(
  `${BASE_URL_V2}/estados`,
  AuthController.checkToken,
  ReportController.getStates
);
routes.get(
  `${BASE_URL_V2}/anos`,
  AuthController.checkToken,
  ReportController.getYears
);

routes.get(
  `${BASE_URL_V2}/entregarelatorio`,
  AuthController.checkToken,
  ReportController.getCountReportDelivery
);

routes.get(
  `${BASE_URL_V2}/ativas`,
  AuthController.checkToken,
  ReportController.getCountActive
);

routes.get(
  `${BASE_URL_V2}/classes`,
  AuthController.checkToken,
  ReportController.getClasses
);

routes.get(
  `${BASE_URL_V2}/nascimentos`,
  AuthController.checkToken,
  ReportController.getBirths
);

routes.get(
  `${BASE_URL_V2}/municipios`,
  AuthController.checkToken,
  ReportController.getCities
);

routes.get(
  `${BASE_URL_V2}/aquisicoes`,
  AuthController.checkToken,
  ReportController.getAcquired
);

routes.get(
  `${BASE_URL_V2}/repteis`,
  AuthController.checkToken,
  ReportController.getReptiles
);

routes.get(
  `${BASE_URL_V2}/furtados`,
  AuthController.checkToken,
  ReportController.getStolen
);

routes.get(
  `${BASE_URL_V2}/obitos`,
  AuthController.checkToken,
  ReportController.getDeaths
);

routes.get(
  `${BASE_URL_V2}/ordemanimal`,
  AuthController.checkToken,
  ReportController.getAnimalOrder
);

export { routes };
