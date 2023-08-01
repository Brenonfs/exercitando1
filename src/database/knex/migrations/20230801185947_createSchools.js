
exports.up = knex => knex.schema.createTable("schools", table =>{ 
    table.increments("id");
    table.text("name");
    table.integer("org_id").references("id").inTable("orgs");

});

exports.down = knex => knex.schema.createTable("schools",table =>{

});