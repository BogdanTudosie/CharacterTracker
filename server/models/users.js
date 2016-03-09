/**
 * Created by Taru on 26.2.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {

    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    role: {
        type: String
    }
});