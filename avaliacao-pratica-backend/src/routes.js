import { Router } from 'express';

import exampleController from './app/example/exampleController';

const routes = new Router();

routes.get('/', exampleController.helloWorld);
routes.post('/save', exampleController.saveData);

export default routes;