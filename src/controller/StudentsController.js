const knex = require('../database/knex');

class StudentsController{

    async create(request, response){
        
        const{name,idade} = request.body;
        const {school_id} = request.params;

        const student_id = await knex("students").insert({
            name,
            idade,
            school_id
        }).returning("*");

        response.json(student_id);
    }
}

module.exports = StudentsController;