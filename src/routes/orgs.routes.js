const { Router } = require('express');
const orgsRoutes = Router();
const OrgsController = require('../controller/OrgsController');

const orgsController = new OrgsController();

orgsRoutes.post('/', orgsController.create);
orgsRoutes.get('/:id', orgsController.showschool);
orgsRoutes.get('/students/:id', orgsController.showStudents);

module.exports = orgsRoutes;