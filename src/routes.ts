import { Router } from 'express';
import {
  DragonController,
  HunterController,
  NarutoController,
  OneController,
  ErrorController
} from './controllers';

const routes = Router();

routes.get('/naruto/character', NarutoController.show);
routes.get('/naruto/pt-br/:name', NarutoController.indexPortuguese);
routes.get('/naruto/es/:name', NarutoController.indexSpanish);

routes.get('/dragonball/character', DragonController.show);
routes.get('/dragonball/pt-br/:name', DragonController.indexPortuguese);
routes.get('/dragonball/es/:name', DragonController.indexSpanish);
routes.get('/dragonball/en/:name', DragonController.indexEnglish);

routes.get('/onepunchman/character', OneController.show);
routes.get('/onepunchman/es/:name', OneController.indexSpanish);
routes.get('/onepunchman/en/:name', OneController.indexEnglish);

routes.get('/hunterxhunter/character', HunterController.show);
routes.get('/hunterxhunter/es/:name', HunterController.indexSpanish);
routes.get('/hunterxhunter/en/:name', HunterController.indexEnglish);

routes.get('*', ErrorController.error);

export default routes;
