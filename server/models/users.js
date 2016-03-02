/**
 * Created by Taru on 26.2.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {
    email: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String
    },
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character'}]
});