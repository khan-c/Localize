import { Router } from 'express';
import * as CompanyController from './controller';

const routes = new Router();

routes.post('/companies', CompanyController.createCompany);
routes.get('/companies', CompanyController.getAllCompanies);

export default routes;
