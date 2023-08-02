const knex = require('../database/knex');

class OrgsController{

    async create(request, response){
        const{name} = request.body;

        const org= await knex("orgs").insert({
            name,
        }).returning("*");

        response.json(org);
    }

    async showschool(request, response){
        const {id} = request.params;
        const school = await knex("schools").where({org_id:id}).orderBy("name").select("name");

        return response.json({
            ...school,

        });
    }

    async showStudents(request, response){
        const {id} = request.params;
        const schools = await knex("schools").where("org_id", id).select("id","name")
        let armazem = [];

        for (const school of schools) {
            const students = await knex("students").where({school_id:school.id}).orderBy("name").select("name");
            const schoolWithStudents = {
                school_name: school.name,
                students: students,
            };
            armazem.push(schoolWithStudents);
            }
        console.log({armazem})
        return response.json({armazem});
    }

    //console.log(students);

            // for (const student of students) {
            //     student.school_name = school.name;
            // }
            // armazem = [...students];


    // async  showStudents(request, response) {
    //     const { id } = request.params;
    //     const schools = await knex("schools").where("org_id", id);

    //     let students = [];

    //     for (const school of schools) {
    //         const schoolStudents = await knex("students")
    //             .where("school_id", school.id)
    //             .select("name");

    //         for (const student of schoolStudents) {
    //             student.school_name = school.name;
    //         }
    //         students = [...students, ...schoolStudents];
    //     }
    //     return response.json({ students });
    // }
}

module.exports = OrgsController;