const { Router } = require('express');
const schoolsRoutes = Router();
const SchoolsController = require('../controller/SchoolsController');
const schoolsController = new SchoolsController();

schoolsRoutes.post('/:org_id', schoolsController.create);
schoolsRoutes.get('/:org_id', schoolsController.show);

module.exports = schoolsRoutes;