var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const GameSchema = new Schema({
    id: {type: String, required:true},
    name: { type: String, required: true, trim: true },
    summary: { type: String },
    type: { type: String },
    cover:{
        url:{type: String},
        width:{type: Number},
        height:{type: Number}
    },
    rating: {type:Number}
});

module.exports = mongoose.model('Game', GameSchema, "games");