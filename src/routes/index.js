const { Router } = require('express');
const studentsRouter = require("./students.routes");
const schoolsRouter = require("./schools.routes");
const orgsRouter = require("./orgs.routes");

const routes = Router();

routes.use("/orgs",orgsRouter);
routes.use("/schools",schoolsRouter);
routes.use("/students",studentsRouter);

module.exports = routes;