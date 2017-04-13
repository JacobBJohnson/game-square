const mongoose = require('mongoose'),
Schema = mongoose.Schema;
//Game = require('../models/game');

var _ = require("lodash");

var games = require('../data/GameLib.json');

class GameRepository{    

    getAll(callback){         
        //  Game.find((err, games)=> {
        //     if (err) {
        //         console.log(`*** GameRepository.getAll err: ${err}`);
        //         return callback(err);                
        //     };       
        _.forEach(games,a=>a.rating = Math.round(Math.random()*5))+1;
             callback(null,games)  
        // });              
    }
}

module.exports = new GameRepository();