
exports.up = knex => knex.schema.createTable("students", table =>{ 
    table.increments("id");
    table.text("name");
    table.int("idade");
    table.integer("school_id").references("id").inTable("school");

});

exports.down = knex => knex.schema.createTable("students",table =>{

});