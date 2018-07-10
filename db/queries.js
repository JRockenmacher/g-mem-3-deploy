const database = require("./knex-config");

module.exports = {
    list(){
        return database('games')
    },
    create(game){
        return database('games')
        .insert(game)
        .returning('*')
        .then(record => record[0])
    },
    read(id){
        return database('games')
        .select()
        .where('id', id)
        .first()
    },
    update(id, game){
        return database('games')
        .update(game)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('games')
        .delete()
        .where('id', id)
    }
};
