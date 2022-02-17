import path from 'path';
import { Router } from 'express';

import { CreateDevController } from "./controllers/Dev/CreateDevController";
import { DeleteDevController } from './controllers/Dev/DeleteDevController';
import { GetAllDevsController } from './controllers/Dev/GetAllDevsController';
import { UpdateDevController } from './controllers/Dev/UpdateDevController';

const routes = Router();

routes.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './views/home/index.html'));
});

// < ----- Devs CRUD ------>
routes.post('/dev', new CreateDevController().handle);
routes.get('/dev', new GetAllDevsController().handle);
routes.delete('/dev/:id', new DeleteDevController().handle);
routes.put('/dev/:id', new UpdateDevController().handle);

export { routes }