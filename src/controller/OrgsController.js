const knex = require('../database/knex');

class OrgsController{

    async create(request, response){   
        const{name} = request.body;

        await knex("orgs").insert({
            name,
        });

        response.json(); 
    }

    async showschool(request, response){
        const {id} = request.params;
        const school = await knex("schools").where({org_id:id}).orderBy("name");

        return response.json({
            ...school,
            
        });
    }
    async showStudents(request, response){
        const {id} = request.params;
        const student = await knex("students").where({school_id:id}).orderBy("name");

        return response.json({
            student,
            
        });
    }
    
}

module.exports = OrgsController;