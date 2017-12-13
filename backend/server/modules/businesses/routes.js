import { Router } from 'express';
import * as BusinessController from './controller';

const routes = new Router();

routes.post('/businesses', BusinessController.createBusiness);
routes.get('/businesses', BusinessController.getAllBusinesses);
routes.get('/businesses/:businessId', BusinessController.getBusiness);
routes.patch('/businesses/:businessId', BusinessController.updateBusiness);

export default routes;
