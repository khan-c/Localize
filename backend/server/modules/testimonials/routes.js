import { Router } from 'express';
import * as TestimonialController from './controller';

const routes = new Router();

routes.get('/testimonials', TestimonialController.getAllTestimonials);

export default routes;
