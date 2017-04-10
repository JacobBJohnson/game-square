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
             callback(null,games)  
        // });              
    }
}

module.exports = new GameRepository();