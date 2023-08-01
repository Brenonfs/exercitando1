
exports.up = knex => knex.schema.createTable("orgs", table =>{ 
    table.increments("id");
    table.text("name");
});

exports.down = knex => knex.schema.createTable("orgs",table =>{

});