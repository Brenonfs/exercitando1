const knex = require('../database/knex');

class StudentsController{

    async create(request, response){
        
        const{name,idade} = request.body;
        const {school_id} = request.params;

        const student_id = await knex("students").insert({
            name,
            idade,
            school_id
        });
        
        response.json();
    }
}

module.exports = StudentsController;