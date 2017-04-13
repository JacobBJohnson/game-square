const gameRepo = require('../../../repositories/gamesrepository'),
    util = require('util');


class GamesController {

    // /api/games
    constructor(router) {
        router.get('/', this.getAll.bind(this));
    }

    getAll(req, res) {       
        gameRepo.getAll((err, data) => {
            if (err) {
                console.log('*** getAll error: ' + util.inspect(err));
                res.json(null);
            } else {                
                res.json(data);
            }
        });
    }
}

module.exports = GamesController;