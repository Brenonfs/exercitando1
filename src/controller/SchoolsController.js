const knex = require('../database/knex');

class SchoolsController{

    async create(request, response){
        
        const{name} = request.body;
        const {org_id} = request.params;

        
        const school_id = await knex("schools").insert({
            name,
            org_id
        }).returning("*");

        response.json(school_id);
    }

    async show(request, response){
        const {org_id} = request.params;
        const student = await knex("students").where({school_id:org_id}).orderBy("name").select("name","idade"); 

        return response.json({
            ...student,

        });
    }
}

module.exports = SchoolsController;