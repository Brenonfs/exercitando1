
exports.up = knex => knex.schema.createTable("students", table =>{ 
    table.increments("id");
    table.text("name");
    table.integer("idade");
    table.integer("school_id").references("id").inTable("schools");

});

exports.down = knex => knex.schema.createTable("students",table =>{

});