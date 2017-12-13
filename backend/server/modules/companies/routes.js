import { Router } from 'express';
import * as CompanyController from './controller';

const routes = new Router();

routes.post('/companies', CompanyController.createCompany);
routes.get('/companies', CompanyController.getAllCompanies);
routes.get('/companies/:companyId', CompanyController.getCompany);
routes.patch('/companies/:companyId', CompanyController.updateCompany);

export default routes;
