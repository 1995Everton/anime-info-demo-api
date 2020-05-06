var express = require('express');
var routes = express.Router();
const DragonController = require('./controllers/DragonController');
const HunterController = require('./controllers/HunterController');
const NarutoController = require('./controllers/NarutoController');
const OneController = require('./controllers/OneController');
const ErrorController = require('./controllers/ErrorController');

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

module.exports = routes;