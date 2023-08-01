const { Router } = require('express');
const studentsRoutes = Router();
const StudentsController = require('../controller/StudentsController');
const studentsController = new StudentsController();

studentsRoutes.post('/:school_id', studentsController.create);

module.exports = studentsRoutes;