const knex = require('../database/knex');

class SchoolsController{

    async create(request, response){
        
        const{name} = request.body;
        const {org_id} = request.params;

        console.log(org_id);
        const school_id = await knex("schools").insert({
            name,
            org_id
        });

        response.json();
    }

    async show(request, response){
        const {id} = request.params;
        const student = await knex("students").where({school_id:id}).orderBy("name"); 

        return response.json({
            ...student,

        });
    }
}

module.exports = SchoolsController;