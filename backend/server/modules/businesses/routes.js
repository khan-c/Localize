import { Router } from 'express';
import * as BusinessController from './controller';
import isLoggedIn from '../../config/logged_in';

const routes = new Router();

routes.post('/businesses', isLoggedIn, BusinessController.createBusiness);
routes.get('/businesses', BusinessController.getAllBusinesses);
// works but needs better route name?
// routes.get('/businesses/:service', BusinessController.getBusinessesByService);
routes.get('/businesses/:businessId', BusinessController.getBusiness);
routes.patch('/businesses/:businessId', isLoggedIn, BusinessController.updateBusiness);

export default routes;
